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
        </div>

        <div className="invitation-block-text">
          <h2>What is YGLF?</h2>
          <p>This is a community-driven event. Originally born in Tel Aviv, this will be the first year taking it to  Kyiv.</p>
          <p>We love to say that it is event made by developers for developers.</p>
          <p>This work is joint effort by  volunteers  from local Frontend communities including KyivJS Meetup, React Kyiv Meetup, BeerJS Kyiv, KharkivJS and we’re also getting  help from numerous great local developers and event organisers.</p>
          <p>We're getting this help because we don’t get many internationally recognized speakers visiting Kyiv, so changing  that is one of the primary  goals for YGLF.</p>
          <p>Another goal is to get speakers who  are known for  their service to  the global frontend community: authors of popular libraries, and contributors, writers and speakers, researchers and standards creators.</p>
        </div>

        <div className="invitation-block-text">
          <h2>Who are your audience?</h2>
          <p>We are pretty sure that all local communities from Ukraine will be represented in the YGLF Kyiv audience. Also we believe that number of people from Eastern Europe countries would love to join this event.</p>
        </div>

        <div className="invitation-block-text">
          <h2>Kyiv</h2>
          <p>You can learn a lot about the city from Bruce’s video.</p>
          <p>In Spring, Kyiv has a special beauty, because the 'chestnut city' starts to bloom – believe us, you'd love to see that.</p>
          <p>To sum up, Kyiv is great place to visit, and you'll want to come back again.</p>
        </div>


        <div className="invitation-block-text">
          <p>Again, we want to invite you to speak at YGLF Kyiv and, if you are willing to do that, please reply to the email we sent you,  and we’ll sort out  all the details and logistics.
          We provide all the transportation and accommodation expenses.</p>
          <p className="-text-uppercase -text-semibold">We really hope you will join us!</p>

          <p className="signing-up">With love from Kyiv,<br/>and the YGLF volunteers team.</p>
        </div>
      </div>
    );
  }
}
