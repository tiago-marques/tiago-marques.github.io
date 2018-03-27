import ProfileActions from '../actions/profile/ProfileActions'

const ProfileDataManager = {
    getInformation() {
        fetch('https://api.github.com/users/tiago-marques')
            .then((response) => {
                return response.json()
            }).then((payload) => {
                ProfileActions.updateInformation(payload)
            }).catch((ex) => {
                console.log('parsing failed', ex)
            })
    }
}

export default ProfileDataManager;