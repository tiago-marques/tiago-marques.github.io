import ProjectActions from '../actions/project/ProjectActions'

const ProjectManager = {
    getCompanies() {
        fetch('https://gistcdn.githack.com/tiago-marques/0022055bd94ec205c6094cc6668baecf/raw/aded3c37fe155a3e7287071d872fe26a029832b9/projects.json')
            .then((response) => {
                return response.json()
            }).then((payload) => {
                ProjectActions.updateInformation(payload)
            }).catch((ex) => {
                console.log('parsing failed', ex)
            })
    }
}


export default ProjectManager;