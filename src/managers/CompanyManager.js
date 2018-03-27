import CompanyActions from '../actions/company/CompanyActions'

const CompanyManager = {
    getCompanies() {
        fetch('https://cdn.rawgit.com/tiago-marques/12e7ac0e7ddedeb0091211891f825381/raw/c010dea56fffb3f8095c924d66f723d9938728df/companies.json')
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