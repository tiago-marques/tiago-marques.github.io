import React, { createContext, useContext, useState, useEffect } from 'react';
import companiesData from '../data/companies.json';
import projectsData from '../data/projects.json';
import { processImagePaths, getCompanyImagePath, getProjectImagePath } from '../utils/imageHelper';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        // Load profile from GitHub API
        const profileResponse = await fetch('https://api.github.com/users/tiago-marques');
        const profileData = await profileResponse.json();
        setProfile(profileData);

        // Load and process companies data
        const processedCompanies = processImagePaths(companiesData, getCompanyImagePath);
        setCompanies(Object.values(processedCompanies));

        // Load and process projects data
        const processedProjects = processImagePaths(projectsData, getProjectImagePath);
        setProjects(Object.values(processedProjects));

        setLoading(false);
      } catch (err) {
        console.error('Error loading data:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const value = {
    profile,
    companies,
    projects,
    loading,
    error
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
