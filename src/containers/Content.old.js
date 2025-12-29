import React from 'react';

import ProfileScreen from '../screens/ProfileScreen'
import CompanyScreen from '../screens/CompanyScreen'
import ProjectScreen from '../screens/ProjectScreen';
import Footer from '../components/Footer';

function Content(props) {
  const { profile, company, project } = props;
  return (
    <div>
      <div className="markdown-body content">
        <ProfileScreen profile={profile} />
        <CompanyScreen company={company} />
        <ProjectScreen project={project} />
      </div>
      <Footer />
    </div>
  );
}


export default Content;