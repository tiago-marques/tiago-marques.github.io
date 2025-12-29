import {Container} from 'flux/utils';
import Content from './Content';

import ProfileStore from '../stores/ProfileStore';
import CompanyStore from '../stores/CompanyStore';
import ProjectStore from '../stores/ProjectStore';

function getStores() {
  return [
    ProfileStore,
    CompanyStore,
    ProjectStore,
  ];
}

function getState() {
  return {
    profile: ProfileStore.getState(),
    company: CompanyStore.getState(),
    project: ProjectStore.getState(),
  };
}

export default Container.createFunctional(Content, getStores, getState);