import React, { Component, PropTypes as toBe } from 'react';
import BuyTicketsButton from '../BuyTicketsButton/BuyTicketsButton';
import FitToRhythm from '../FitToRhythm/FitToRhythm';
import './devdo-block.scss';

export default class DevDoBlock extends Component {
  static propTypes = {
    data: toBe.object,
  };

  static defaultProps = {
    data: {}
  };

  render() {
    const {
      title,
      description,
      youtubeID,
      anchor
    } = this.props.data;

    return (
      <FitToRhythm className="devdo-block container container-fluid">
        <a href="" name={anchor} className="-no-outline anchor" />
        <div className="devdo-block-video">
          <div className="devdo-block-video-box">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeID}?rel=0&amp;showinfo=0`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
        <div className="devdo-block-text-box">
          <div className="devdo-block-text">
            <div className="title-box">
              <h3>{title}</h3>
            </div>
            <p dangerouslySetInnerHTML={{__html: description}} />
          </div>
          <BuyTicketsButton />
        </div>
      </FitToRhythm>
    );
  }
}
