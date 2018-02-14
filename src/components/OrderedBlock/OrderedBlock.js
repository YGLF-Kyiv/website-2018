import React, { PropTypes as toBe, Component } from 'react';
import './ordered-block.scss';
import FitToRythm from '../FitToRythm/FitToRythm';

export default class OrderedBlock extends Component {
  static propTypes = {
    data: toBe.object,
  };

  static defaultProps = {
    data: {
      additionalInfo: {},
      link: {},
    },
  };

  render() {
    const {number, subtitle, title, description, additionalInfo, link, img} = this.props.data;

    return (
      <div className="ordered-block">
        <FitToRythm>
          <div className="ordered-block-name">
            <span>
              {number} <i>{subtitle}</i>
            </span>
          </div>
          <div className="ordered-block-text">
            <h2>{title}</h2>
            {img && (
              <div className="ordered-block-img">
                <img src={img} alt={title} />
              </div>
            )}
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
            {link && (
              <div className="ordered-block-text-button">
                <a href={link.url} target="_blank">
                  {link.title}
                </a>
              </div>
            )}
          </div>
        </FitToRythm>
      </div>
    );
  }
}
