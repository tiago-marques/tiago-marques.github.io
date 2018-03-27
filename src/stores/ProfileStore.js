import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';

import ProfileActions from '../actions/profile/ProfileActions';
import ProfileActionTypes from '../actions/profile/ProfileActionTypes';
import ProfileManager from '../managers/ProfileManager'
import Dispatcher from '../actions/Dispatcher';

class ProfileStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        setTimeout(ProfileActions.getInformation, 0)
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case ProfileActionTypes.GET_INFORMATION:
                ProfileManager.getInformation();
                return state;
            case ProfileActionTypes.UPDATE_INFORMATION:
                return new Immutable.OrderedMap(action.payload)
            default:
                return state;
        }
    }
}

export default new ProfileStore();