import React from 'react'
import PropTypes from 'prop-types'
import './Company.css'

const Company = props => {
    return (
        <article className="company-card">
            {props.year && <h4>
                {props.year}
            </h4>}
            <img style={imageStyle} src={props.imageUri} alt={props.name} />
            {props.role && <pre>
                {props.role}
            </pre>}
        </article>
    )
}

const imageStyle = {
    width: '150px',
    margin: 'auto'
}

Company.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    imageUri: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
}

export default Company