import React from 'react';
import './footer.scss';
import Subscribe from '../Subscribe/Subscribe';
import SocialIcons from '../SocialIcons/SocialIcons';
import Link from 'gatsby-link';
import config from '../../../data/SiteConfig';
import { gaTrack } from '../../shared/utils/ga';

const SOCIAL_ICONS_DATA = [
  {
    type: 'twitter',
    url: `https://twitter.com/${config.userTwitter}`,
  },
  {
    type: 'facebook',
    url: `https://www.facebook.com/${config.fbPage}`,
  },
];

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
            <div className="col-sm-6 col-xs-12">
            <strong>Subscribe</strong>
            <p>
            Exciting things ahead,<br />stay tuned for more information.
            </p>
            <Subscribe />
            </div>
            <div className="col-sm-6 col-xs-12">
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
                <Link to="/about">About</Link>
                <Link to="/speakers">Speakers</Link>
                {/*<Link to="/#workshops">Workshops</Link>*/}
                <Link to="/sponsors">Sponsors</Link>
                <Link to="/diversity">Diversity Tickets</Link>
                <Link to="/schedule">Schedule</Link>
                <a
                  href="https://yougottalovefrontend.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YGLF 2017
                </a>
                <Link to="/code-of-conduct">Code Of Conduct</Link>

              </div>
            </div>
          </div>
          <div className="row footer-contacts">
            <div className="col-md-6 col-xs-12">
              <div className="created-by">
                <span>
                  Designed by{' '}
                    <a
                      href="http://highondesign.wix.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WixStudio
                    </a>,
                </span>{' '}
                <span>
                  Coded by{' '}
                  <a
                    href="https://www.linkedin.com/in/andriisierkov/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Andrei Sierkov
                  </a>{' & '}
                  <a
                    href="https://www.linkedin.com/in/marina-marina/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Marina Sol
                  </a>
                </span>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <a className="footer-mailto" href={`mailto:${config.email}`}>
                {config.email}
              </a>
              <SocialIcons data={SOCIAL_ICONS_DATA} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
