import React from 'react';
import Company from '../components/Company';
import './Company.css';
import { useData } from '../context/DataContext';

const CompanyScreen = () => {
  const { companies, loading } = useData();

  if (loading) {
    return (
      <div>
        <h1>main companies</h1>
        <div className="loading">Loading companies...</div>
      </div>
    );
  }

  return (
    <div>
      <h1>main companies</h1>
      <div className="company-grid">
        {companies.map((company, index) => (
          <Company key={company.name || index} {...company} />
        ))}
      </div>
    </div>
  );
};

export default CompanyScreen;
