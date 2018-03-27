import React from 'react';
import './Profile.css'
import Highlight from 'react-highlight'

import favicon from '../assets/favicon.png'

const ProfileScreen = props => {

  return (
    <article className="markdown-body container-column">
      <img style={borderRadius} src={props.profile.get("avatar_url") || favicon} alt="profile" />

      <h1>about {props.profile.get("login") || 'tiago-marques'}</h1>
      <p>{props.profile.get("bio" || '-')}</p>

      {!!props.profile.size &&
        <Highlight className='javascript'>
          class Github {'{'}<br />
          &emsp;&emsp;&emsp;&emsp;constructor() {'{'}<br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;this.followers = {props.profile.get("followers")}; <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;this.public_repos = {props.profile.get("public_repos")};<br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;this.created_at = "{props.profile.get("created_at")}";<br />
          &emsp;&emsp;&emsp;&emsp;{'}'}<br />
          {'}'}
        </Highlight>
      }

    </article>
  )
}

const borderRadius = {
  width: '250px',
  height: '250px',
  borderRadius: '50%',
  margin: '0 auto'
}

export default ProfileScreen;