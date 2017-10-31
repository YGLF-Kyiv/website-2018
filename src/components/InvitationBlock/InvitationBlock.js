import React, { Component } from 'react';
import './invitation-block.scss';

export default class InvitationBlock extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="invitation-block container container-fluid">
        <div className="invitation-block-text">
          <h2>Hello, {data.invitation.name}!</h2>
          <p>
            We’ve made a very personal invitation asking you to speak at You Gotta Love Frontend Conference in Kyiv, Ukraine.
          </p>
          <p>
            <span className="invitation-block-video">
              <iframe src={data.invitation.video}
                width="450" height="253" frameBorder="0" allowFullScreen></iframe>
            </span>
          </p>
          <p>
            {data.invitation.text}
          </p>
        </div>
      </div>
    );
  }
}
