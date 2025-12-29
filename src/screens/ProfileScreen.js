import React from 'react';
import './Profile.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { GitHub, Mail, Twitter } from 'react-feather';
import { useData } from '../context/DataContext';
import favicon from '../assets/favicon.png';
import pluraliq from '../assets/pluralsightiq.png';

const ProfileScreen = () => {
  const { profile, loading } = useData();

  if (loading || !profile) {
    return (
      <article className="container-column">
        <div className="loading">Loading profile...</div>
      </article>
    );
  }

  const codeString = `class Github {
  constructor() {
    this.followers = ${profile.followers};
    this.location = "${profile.location || 'Unknown'}";
    this.created_at = "${profile.created_at}";
  }
}`;

  return (
    <article className="container-column">
      <img 
        style={avatarStyle} 
        src={profile.avatar_url || favicon} 
        alt={profile.login || 'profile'} 
      />
      
      <div className="container-space">
        <a 
          href="https://github.com/tiago-marques" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <GitHub />
        </a>
        <a 
          href="mailto:me@tiagomarques.com.br"
          aria-label="Email"
        >
          <Mail />
        </a>
        <a 
          href="https://twitter.com/metiagomarques"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Twitter Profile"
        >
          <Twitter />
        </a>
      </div>

      <a 
        className="plural-container" 
        href="https://app.pluralsight.com/profile/metiagomarques"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img src={pluraliq} width="200px" alt="pluralsight IQ" />
      </a>

      <h1>about {profile.login || 'tiago-marques'}</h1>
      <p>{profile.bio || 'Software Engineer & Tech Enthusiast'}</p>

      <SyntaxHighlighter 
        language="javascript" 
        style={vscDarkPlus}
        customStyle={{
          borderRadius: '12px',
          padding: '2rem',
          fontSize: '0.95rem'
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </article>
  );
};

const avatarStyle = {
  width: '250px',
  height: '250px',
  borderRadius: '50%',
  margin: '0 auto'
};

export default ProfileScreen;
