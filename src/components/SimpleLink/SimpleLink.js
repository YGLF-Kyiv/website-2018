import React, { PropTypes as toBe } from 'react';
import './simple-link.scss';
import Link from 'gatsby-link';

export default class SimpleLink extends React.Component {
  static propTypes = {
    title: toBe.string,
    text: toBe.string,
    url: toBe.string,
    target: toBe.string,
  }

  static defaultProps = {
    target: '_blank',
  }

  render() {
    const { title, text, url, target } = this.props;
    return (
      <a className="simple-link" href={url} target={target} rel="noopener noreferrer" title={title || text}>
        {text}
      </a>
    );
  }
}
