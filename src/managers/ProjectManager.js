import ProjectActions from '../actions/project/ProjectActions'

const ProjectManager = {
    getCompanies() {
        fetch('https://cdn.rawgit.com/tiago-marques/0022055bd94ec205c6094cc6668baecf/raw/987c03c972599279cf726d79304f30315f99dd56/projects.json')
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