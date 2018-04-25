import React from 'react'
import PropTypes from 'prop-types'
import './Project.css'

const Project = props => {
    return (
        <article className="markdown-body container-column">
            {props.role && <h4 style={roleStyle}>
                {props.role}
            </h4>}
            <img style={imageStyle} src={props.imageUri} alt={props.name} />
        </article>
    )
}

const imageStyle = {
    width: '150px',
    height: '150px',
    margin: '0 auto'
}

const roleStyle = {
    alignSelf: 'center'
}

Project.propTypes = {
    role: PropTypes.string,
    year: PropTypes.string,
    name: PropTypes.string.isRequired,
    imageUri: PropTypes.string.isRequired,
}

export default Project