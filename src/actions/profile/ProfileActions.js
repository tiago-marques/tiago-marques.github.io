import ProfileActionTypes from './ProfileActionTypes';
import Dispatcher from '../Dispatcher';

const Actions = {

    async getInformation() {
        Dispatcher.dispatch({
            type: ProfileActionTypes.GET_INFORMATION,
        });
    },

    async updateInformation(payload) {
        Dispatcher.dispatch({
            type: ProfileActionTypes.UPDATE_INFORMATION,
            payload
        })
    }

}

export default Actions;