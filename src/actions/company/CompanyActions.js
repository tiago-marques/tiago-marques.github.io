import CompanyActionTypes from './CompanyActionTypes';
import Dispatcher from '../Dispatcher';

const Actions = {

    async getInformation() {
        Dispatcher.dispatch({
            type: CompanyActionTypes.GET_INFORMATION,
        });
    },

    async updateInformation(payload) {
        Dispatcher.dispatch({
            type: CompanyActionTypes.UPDATE_INFORMATION,
            payload
        })
    }

}

export default Actions;