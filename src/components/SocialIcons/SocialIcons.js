import React, { PropTypes as toBe } from 'react';
import './social-icons.scss';

const getClassByType = type => `icon-${type}`;

export default class SocialIcons extends React.Component {
  static propTypes = {
    data: toBe.array,
  };

  static defaultProps = {
    data: {},
  };

  render() {
    const { data } = this.props;

    const icons = data.map(iconData => {
      return (
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
      );
    });
    return <div className="social-icons">{icons}</div>;
  }
}
