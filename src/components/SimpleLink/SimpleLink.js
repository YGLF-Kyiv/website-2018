import React, { PropTypes as toBe } from 'react';
import './simple-link.scss';

export default class SimpleLink extends React.Component {
  static propTypes = {
    title: toBe.string,
    text: toBe.string,
    url: toBe.string,
    target: toBe.string,
    children: toBe.any,
    className: toBe.any,
    rel: toBe.string,
  }

  static defaultProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  }

  render() {
    const { title, text, url, target, children, className, rel } = this.props;

    return (
      <a className={`simple-link ${className}`} href={url} target={target} rel={rel} title={title || text}>
        {text}
        {children}
      </a>
    );
  }
}
