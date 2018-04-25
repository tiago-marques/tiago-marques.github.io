import ProjectActionTypes from './ProjectActionTypes';
import Dispatcher from '../Dispatcher';

const Actions = {

    async getInformation() {
        Dispatcher.dispatch({
            type: ProjectActionTypes.GET_INFORMATION,
        });
    },

    async updateInformation(payload) {
        Dispatcher.dispatch({
            type: ProjectActionTypes.UPDATE_INFORMATION,
            payload
        })
    }

}

export default Actions;