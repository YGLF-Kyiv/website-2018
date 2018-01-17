import React from 'react';
import './diversity.scss';
import SimpleLink from '../components/SimpleLink/SimpleLink';
import { gaTrack } from '../shared/utils/ga';
import wixEngineering from '../../static/wix-engineering.png';

export default class DiversityTicketsPage extends React.Component {
  componentWillMount() {
    gaTrack({
      eventCategory: 'diversity',
      eventAction: 'diversity',
      eventLabel: 'Diversity',
    });
  }

  render() {
    const TEXT_EMAIL = 'diversity@yglf.com.ua';
    const URL_EMAIL = `mailto:${TEXT_EMAIL}`;

    return (
      <div className="page-diversity-tickets lines-bg">
        <div className="container container-fluid">
          <SimpleLink
            url="https://www.wix.engineering/"
            className="link-wix-logo"
          >
            <img
              className="wix-engineering-logo"
              src={wixEngineering}
              alt="WIX Engineering"
            />
          </SimpleLink>

          <section>
            <h2>Diversity Tickets</h2>
            <p>
              We are proud to announce that we have Diversity tickets for YGLF
              Conference!
            </p>
            <h3>What are Diversity tickets</h3>
            <p>
              They are a kind of tickets, made especially for people that are
              lacking stable representation in the tech industry.
            </p>
          </section>

          <section>
            <h3>How to apply</h3>

            <p>Submission has closed on January 15, 2018.<br />
              We had a sweepstake sponsored by Wix Engineering for discounted diversity tickets at
              $50 per ticket.
            </p>
            <p>
              After submission 40 lucky people were randomly selected and contacted through the
              e-mail address which they had submitted.
            </p>
          </section>
        </div>
      </div>
    );
  }
}
