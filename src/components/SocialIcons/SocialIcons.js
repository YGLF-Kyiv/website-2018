import React from 'react';
import './social-icons.scss';

const getClassByType = type => `icon-${type}`;

export default class SocialIcons extends React.Component {

  render() {
    const data = [
      {
        type: 'instagram',
        url: 'https://www.instagram.com/yglfconf',
      },
      {
        type: 'facebook',
        url: 'https://www.facebook.com/YouGottaLoveFrontend',
      },
    ];
    const icons = data.map(iconData =>
      <a
        key={iconData.url}
        href={iconData.url}
        target="_blank"
        rel="noopener noreferrer"
        title={iconData.type}
      >
        <i className={getClassByType(iconData.type)}/>
      </a>
    );
    return (
      <div className="social-icons">
        {icons}
      </div>
    );
  };
}
