import React from 'react'
import PropTypes from 'prop-types'
import './Project.css'

const Project = props => {
    return (
        <article className="markdown-body container-column">
            {props.role && <h4 style={roleStyle}>
                {props.role}
            </h4>}
            <div style={imageContainer}>
            <img style={imageStyle} src={props.imageUri} alt={props.name} />
            </div>
        </article>
    )
}

const imageStyle = {
    width: '150px',
    margin: 'auto'
}

const imageContainer = {
    display: 'flex',
    height: '150px',
    margin: 'auto'
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