import ProjectActions from '../actions/project/ProjectActions';
import ApiService from '../services/ApiService';
import { DATA } from '../config/constants';
import { processImagePaths, getProjectImagePath } from '../utils/imageHelper';

const ProjectManager = {
    getProjects() {
        ApiService.loadLocal(DATA.PROJECTS)
            .then(data => {
                const processedData = processImagePaths(data, getProjectImagePath);
                ProjectActions.updateInformation(processedData);
            })
            .catch(error => {
                console.error('Failed to load projects data:', error);
            });
    }
};

export default ProjectManager;