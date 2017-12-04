import React, { Component, PropTypes as toBe } from 'react';
import './speakers-intro-block.scss';

export default class InfoBlock extends Component {
  static propTypes = {
    data: toBe.object,
  };

  static defaultProps = {
    data: {},
  };

  render() {
    const { data } = this.props;
    return (
      <div className="speakers-intro-block">
        {/*<div className="speakers-intro-block-name">*/}
          {/*<span>*/}
            {/*{data.number} <i>{data.subtitle}</i>*/}
          {/*</span>*/}
        {/*</div>*/}
        <div className="speakers-intro-block-text">
          <h2>{data.title}</h2>
          {data.p.map((el, index) => {
            return <p key={index}>{el}</p>;
          })}
          <div className="speakers-intro-block-text-button">
            <a
              href={data.actionButton.href}
              rel="noopener noreferrer"
              target={data.actionButton.target}
            >
              {data.actionButton.text}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
