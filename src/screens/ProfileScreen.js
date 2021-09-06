import React from 'react';
import './Profile.css'
import Highlight from 'react-highlight'

import { GitHub, Mail, Twitter } from 'react-feather';
import favicon from '../assets/favicon.png';
import pluraliq from '../assets/pluralsightiq.png';

const ProfileScreen = props => {

  return (
    <article className="container-column">
      <img style={borderRadius} src={props.profile.get("avatar_url") || favicon} alt="profile" />
      <br />
      <div className="container-space">
        <a href="https://github.com/tiago-marques" ><GitHub alt="Github" /></a>
        <a href="mailto:me@tiagomarques.com.br"><Mail alt="E-mail" /></a>
        <a href="https://twitter.com/metiagomarques"><Twitter alt="Twitter" /></a>
      </div>
      <a className="plural-container" href="https://app.pluralsight.com/profile/metiagomarques">
        <img src={pluraliq} width="200px" alt="pluralsight qi" />
      </a>
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