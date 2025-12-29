import CompanyActions from '../actions/company/CompanyActions';
import ApiService from '../services/ApiService';
import { DATA } from '../config/constants';
import { processImagePaths, getCompanyImagePath } from '../utils/imageHelper';

const CompanyManager = {
    getCompanies() {
        ApiService.loadLocal(DATA.COMPANIES)
            .then(data => {
                const processedData = processImagePaths(data, getCompanyImagePath);
                CompanyActions.updateInformation(processedData);
            })
            .catch(error => {
                console.error('Failed to load companies data:', error);
            });
    }
};

export default CompanyManager;