import React from 'react';

import ProfileScreen from '../screens/ProfileScreen'
import CompanyScreen from '../screens/CompanyScreen'

function Content(props) {
  const { profile, company } = props;
  return (
    <div>
      <ProfileScreen profile={profile} />
      <CompanyScreen company={company} />
    </div>
  );
}


export default Content;