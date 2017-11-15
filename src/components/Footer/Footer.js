import React from 'react';
import './footer.scss';
import Subscribe from '../Subscribe/Subscribe';
import SocialIcons from '../SocialIcons/SocialIcons';
import Link from 'gatsby-link';
import config from '../../../data/SiteConfig';
import { gaTrack } from '../../utils/ga';

export default class Footer extends React.Component {
  trackClick() {
    gaTrack({
      eventCategory: 'purchase',
      eventAction: 'click',
      eventLabel: 'Buy Tickets',
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="container container-fluid">
          <div className="row footer-subscribe">
            {/*<div className="col-lg-6 col-xs-12">*/}
            {/*<strong>Subscribe</strong>*/}
            {/*<p>*/}
            {/*Exciting things ahead,<br />  stay tuned for more information.*/}
            {/*</p>*/}
            {/*<Subscribe />*/}
            {/*</div>*/}
            <div className="col-md-6 col-xs-12">
              <strong>Find your way</strong>
              <div className="footer-links">
                <Link to="/">Home</Link>
                <a
                  target="_blank"
                  href={config.ticketsUrl}
                  rel="noopener noreferrer"
                  onClick={this.trackClick}
                >
                  Buy Tickets
                </a>
                <a
                  href="https://yougottalovefrontend.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YGLF 2017
                </a>
                <Link to="/diversity">Diversity Tickets</Link>
                <Link to="/code-of-conduct">Code Of Conduct</Link>
                <Link to="/sponsorship">Sponsorship</Link>
              </div>
            </div>
          </div>
          <div className="row footer-contacts">
            {/*<div className="col-md-6 col-xs-12">*/}
            {/*<div className="created-by">*/}
            {/*<span>*/}
            {/*Designed by{' '}*/}
            {/*<a*/}
            {/*href="http://highondesign.wix.com/"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
            {/*>*/}
            {/*WixStudio*/}
            {/*</a>,*/}
            {/*</span>{' '}*/}
            {/*<span>*/}
            {/*Coded by{' '}*/}
            {/*<a*/}
            {/*href="https://github.com/paveliko"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
            {/*>*/}
            {/*Pavel Rapoport*/}
            {/*</a>*/}
            {/*</span>*/}
            {/*</div>*/}
            {/*</div>*/}
            <div className="col-md-6 col-xs-12">
              <a className="footer-mailto" href={`mailto:${config.email}`}>
                {config.email}
              </a>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
