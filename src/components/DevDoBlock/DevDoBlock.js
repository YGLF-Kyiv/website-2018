import React, { Component, PropTypes as toBe } from 'react';
import './devdo-block.scss';
import YouTube from 'react-youtube';
import FitToRhythm from '../FitToRhythm/FitToRhythm';

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
      video
    } = this.props.data;

    return (
      <FitToRhythm className="devdo-block container container-fluid">
        <div className="devdo-block-video">
          <div className="devdo-block-video-box">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeID}?rel=0${!video.showInfo ? '&amp;showinfo=0' : ''}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
        <div className="devdo-block-text">
          <div className="title-box">
            <h3>{title}</h3>
          </div>
          <p dangerouslySetInnerHTML={{__html: description}} />
        </div>
      </FitToRhythm>
    );
  }
}
