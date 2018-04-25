import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';

import ProjectManager from '../managers/ProjectManager'
import ProjectActionTypes from '../actions/project/ProjectActionTypes'
import ProjectActions from '../actions/project/ProjectActions'

import Dispatcher from '../actions/Dispatcher';

class ProjectStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        setTimeout(ProjectActions.getInformation, 0)
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case ProjectActionTypes.GET_INFORMATION:
                ProjectManager.getCompanies();
                return state;
            case ProjectActionTypes.UPDATE_INFORMATION:
                return new Immutable.OrderedMap(action.payload)
            default:
                return state;
        }
    }
}

export default new ProjectStore();