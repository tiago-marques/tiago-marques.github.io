import React from 'react';
import Company from '../components/Company'
import './Company.css'

const CompanyScreen = props => {

  return (
    <div className="markdown-body">
      <h1>main companies</h1>
      <div className="company-grid">
        {!!props.company.size && props.company.valueSeq().map(company => {
          return <Company key={company.name} {...company} />
        })
        }
      </div>
    </div>
  )
}

export default CompanyScreen;