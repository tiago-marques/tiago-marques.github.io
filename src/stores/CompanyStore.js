import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';

import CompanyManager from '../managers/CompanyManager'
import CompanyActionTypes from '../actions/company/CompanyActionTypes'
import CompanyActions from '../actions/company/CompanyActions'

import Dispatcher from '../actions/Dispatcher';

class CompanyStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        setTimeout(CompanyActions.getInformation, 0)
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case CompanyActionTypes.GET_INFORMATION:
                CompanyManager.getCompanies();
                return state;
            case CompanyActionTypes.UPDATE_INFORMATION:
                return new Immutable.OrderedMap(action.payload)
            default:
                return state;
        }
    }
}

export default new CompanyStore();