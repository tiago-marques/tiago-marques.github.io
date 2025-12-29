import ProfileActions from '../actions/profile/ProfileActions';
import ApiService from '../services/ApiService';
import { GITHUB_API_URL } from '../config/constants';

const ProfileDataManager = {
    getInformation() {
        ApiService.get(GITHUB_API_URL)
            .then(payload => {
                ProfileActions.updateInformation(payload);
            })
            .catch(error => {
                console.error('Failed to fetch profile information:', error);
            });
    }
};

export default ProfileDataManager;