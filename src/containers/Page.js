import {Container} from 'flux/utils';
import Content from './Content';

import ProfileStore from '../stores/ProfileStore';
import CompanyStore from '../stores/CompanyStore';

function getStores() {
  return [
    ProfileStore,
    CompanyStore,
  ];
}

function getState() {
  return {
    profile: ProfileStore.getState(),
    company: CompanyStore.getState(),
  };
}

export default Container.createFunctional(Content, getStores, getState);