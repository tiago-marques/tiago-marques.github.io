import React from 'react';
import './Profile.css'
import Highlight from 'react-highlight'

import { Github, Mail, Twitter } from 'react-feather';
import favicon from '../assets/favicon.png'

const ProfileScreen = props => {

  return (
    <article className="container-column">
      <img style={borderRadius} src={props.profile.get("avatar_url") || favicon} alt="profile" />
      <br />
      <div className="container-space">
        <a href="https://github.com/tiago-marques"><Github /></a>
        <a href="mailto:me@tiagomarques.com.br"><Mail /></a>
        <a href="https://twitter.com/metiagomarques"><Twitter /></a>
      </div>
      <h1>about {props.profile.get("login") || 'tiago-marques'}</h1>
      <p>{props.profile.get("bio" || '-')}</p>

      {!!props.profile.size &&
        <Highlight className='javascript'>
          class Github {'{'}<br />
          &emsp;&emsp;&emsp;&emsp;constructor() {'{'}<br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;this.followers = {props.profile.get("followers")}; <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;this.location = "{props.profile.get("location")}";<br />
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