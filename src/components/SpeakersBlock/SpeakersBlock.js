import React, { Component } from 'react';
import './speakers-block.scss';

export default class InfoBlock extends Component {
  render() {
    return (
      <div className="speakers-block container container-fluid">
        {/*<div className="speakers-block-name">*/}
          {/*<span>*/}
            {/*1 <i>Amazing Talks</i>*/}
          {/*</span>*/}
        {/*</div>*/}
        <div className="speakers-block-text">
          <h2>Call For Papers</h2>
          <p>
            Kyiv and all of the Frontend communities here are amazing. Audience is technically strong and thankful for new knowledge.
          </p>
          <p>
            If you are eager to share your experience and useful insights, apply to become a speaker.
          </p>
          <div className="speakers-block-text-button">
            <a
              href="mailto:hello@yglf.com.ua?subject=Call%20For%20Papers"
              rel="noopener noreferrer"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    );
  }
}
