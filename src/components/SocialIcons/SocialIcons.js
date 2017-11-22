import React, { PropTypes as toBe } from 'react';
import './social-icons.scss';
import config from '../../../data/SiteConfig';

const getClassByType = type => `icon-${type}`;

export default class SocialIcons extends React.Component {
  static propTypes = {
    urls: toBe.object,
  };

  static defaultProps = {
    urls: {
      userTwitter: config.userTwitter,
      siteFBAppID: config.siteFBAppID,
      siteGHAppID: null,
    },
  };

  render() {
    const { urls } = this.props;
    let data = [
      {
        showIcon: !!urls.userTwitter,
        type: 'twitter',
        url: `https://twitter.com/${urls.userTwitter}`,
      },
      {
        showIcon: !!urls.siteFBAppID,
        type: 'facebook',
        url: `https://www.facebook.com/${urls.siteFBAppID}`,
      },
      {
        showIcon: urls.siteGHAppID,
        type: 'github',
        url: `https://www.github.com/${urls.siteGHAppID}`
      }
    ];

    const icons = data.map(iconData => {
      return iconData.showIcon
        ? (
          <a
            className="no-outline"
            key={iconData.url}
            href={iconData.url}
            target="_blank"
            rel="noopener noreferrer"
            title={iconData.type}
          >
            <i className={getClassByType(iconData.type)} />
          </a>
        )
        : null
    });
    return <div className="social-icons">{icons}</div>;
  }
}
