import ProjectActions from '../actions/project/ProjectActions'

const ProjectManager = {
    getCompanies() {
        fetch('https://gistcdn.githack.com/tiago-marques/0022055bd94ec205c6094cc6668baecf/raw/f469594593a34d03f7ffceb972d4ac1b56c3ed2d/projects.json')
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