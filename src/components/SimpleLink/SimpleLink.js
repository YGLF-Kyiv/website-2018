import React, { PropTypes as toBe } from 'react';
import './simple-link.scss';
import Link from 'gatsby-link';

export default class Header extends React.Component {
  static propTypes = {
    title: toBe.string,
    text: toBe.string,
    url: toBe.string,
  }

  render() {
    const { title, text, url } = this.props;
    return (
      <a className="simple-link" href={url} target="_blank" rel="noopener noreferrer" title={title || text}>
        {text}
      </a>
    );
  }
}
