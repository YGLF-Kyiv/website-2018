import React, { Component, PropTypes as toBe } from 'react';
import './speakers-intro-block.scss';
import FitToRhythm from '../FitToRhythm/FitToRhythm';

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
      <FitToRhythm className="speakers-intro-block">
        {/*<div className="speakers-intro-block-name">*/}
          {/*<span>*/}
            {/*{data.number} <i>{data.subtitle}</i>*/}
          {/*</span>*/}
        {/*</div>*/}
        <div className="speakers-intro-block-text">
          <FitToRhythm>
            <h2>{data.title}</h2>
            {data.description.map((el, index) => {
              return <p key={index}>{el}</p>;
            })}
          </FitToRhythm>
          <div className="speakers-intro-block-text-button">
            {/*<a*/}
              {/*href={data.actionButton.href}*/}
              {/*rel="noopener noreferrer"*/}
              {/*target={data.actionButton.target}*/}
            {/*>*/}
              {/*{data.actionButton.text}*/}
            {/*</a>*/}
          </div>
        </div>
      </FitToRhythm>
    );
  }
}
