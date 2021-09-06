import CompanyActions from '../actions/company/CompanyActions'

const CompanyManager = {
    getCompanies() {
        fetch('https://cdn.rawgit.com/tiago-marques/12e7ac0e7ddedeb0091211891f825381/raw/8e43ce8cf88f1701f90a08c70994e93fe4dd4f43/companies.json')
            .then((response) => {
                return response.json()
            }).then((payload) => {
                CompanyActions.updateInformation(payload)
            }).catch((ex) => {
                console.log('parsing failed', ex)
            })
    }
}


export default CompanyManager;