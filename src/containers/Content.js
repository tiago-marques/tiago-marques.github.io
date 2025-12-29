import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import CompanyScreen from '../screens/CompanyScreen';
import ProjectScreen from '../screens/ProjectScreen';
import Footer from '../components/Footer';

const Content = () => {
  return (
    <div className="content">
      <ProfileScreen />
      <CompanyScreen />
      <ProjectScreen />
      <Footer />
    </div>
  );
};

export default Content;
