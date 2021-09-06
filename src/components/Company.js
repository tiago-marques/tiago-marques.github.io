import React from 'react'
import PropTypes from 'prop-types'
import './Company.css'

const Company = props => {
    return (
        <article className="markdown-body container-column">
            {props.year && <h4 style={yearStyle}>
                {props.year}
            </h4>}
            <img style={imageStyle} src={props.imageUri} alt={props.name} />
            {props.role && <pre style={preStyle}>
                {props.role}
            </pre>}
        </article>
    )
}

const preStyle = {
    textOverflow: 'ellipsis',
    width: '200px'
}

const imageStyle = {
    width: '150px',
    margin: 'auto'
}

const yearStyle = {
    alignSelf: 'center'
}

Company.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    imageUri: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
}

export default Company