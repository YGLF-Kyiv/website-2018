import React, { PropTypes as toBe, Component } from 'react';
import './ordered-block.scss';
import FitToRhythm from '../FitToRhythm/FitToRhythm';

export default class OrderedBlock extends Component {
  static propTypes = {
    data: toBe.object,
    showSubheader: toBe.bool,
  };

  static defaultProps = {
    showSubheader: true,
    data: {
      additionalInfo: {},
      link: {},
    },
  };

  render() {
    const {
      number,
      subtitle,
      title,
      description,
      additionalInfo,
      link,
      img,
      showSubheader
    } = this.props.data;

    return (
      <div className="ordered-block">
        <FitToRhythm>
          {showSubheader && (
            <div className="ordered-block-name">
              <span>
                {number} <i>{subtitle}</i>
              </span>
            </div>
          )}
          <div className="ordered-block-text">
            <h2>{title}</h2>
            {img && (
              <FitToRhythm>
                <div className="ordered-block-img">
                  <img src={img} alt={title} />
                </div>
              </FitToRhythm>
            )}
            <FitToRhythm>
              {description.map((el, index) => {
                return <p key={index}>{el}</p>;
              })}
              {additionalInfo && (
                <p>
                  <strong>{additionalInfo.title}</strong>
                  <br />
                  {additionalInfo.description}
                </p>
              )
              }
            </FitToRhythm>
            {link && (
              <div className="ordered-block-text-button">
                <a href={link.url} target="_blank">
                  {link.title}
                </a>
              </div>
            )}
          </div>
        </FitToRhythm>
      </div>
    );
  }
}
