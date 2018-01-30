import React from 'react';
import './successful-purchase.scss';
import { gaTrack } from '../shared/utils/ga';

export default class SuccessfulPurchasePage extends React.Component {
  componentWillMount() {
    gaTrack({
      eventCategory: 'purchase',
      eventAction: 'success',
      eventLabel: 'Success',
    });
  }

  render() {
    return (
      <div className="page-successful-purchase lines-bg">
        <div className="container container-fluid">
          <h2>Thank you!</h2>
          <p>
            See you in Kyiv in May! <br />
            <em>YGLF | Kyiv Team</em>.
          </p>
        </div>
      </div>
    );
  }
}
