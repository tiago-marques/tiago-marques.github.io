import CompanyActions from '../actions/company/CompanyActions'

const CompanyManager = {
    getCompanies() {
        fetch('https://cdn.rawgit.com/tiago-marques/12e7ac0e7ddedeb0091211891f825381/raw/1c400cdbcd7657d20a560c29d4a94dc7ab0ba5c3/companies.json')
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