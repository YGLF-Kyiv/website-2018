import React from 'react'
import "./diversity.scss";
import SimpleLink from '../components/SimpleLink/SimpleLink';
import { gaTrack } from '../utils/ga';
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
          <SimpleLink url="https://www.wix.engineering/" className="link-wix-logo">
            <img className="wix-engineering-logo" src={wixEngineering} alt="WIX Engineering"/>
          </SimpleLink>

          <section>
            <h2>Diversity Tickets</h2>
            <p>We are proud to announce that we have Diversity tickets for YGLF Conference!</p>
            <h3>What are Diversity tickets</h3>
            <p>
              They are a kind of tickets, made especially for people that are lacking stable
              representation in the tech industry.
            </p>
          </section>

          <section>
            <h3>How to apply</h3>
            <p>
              We will have a sweepstake, sponsored by Wix Engineering, for discounted diversity
              tickets at $50 per ticket.
            </p>
            <p>
              Please apply for the tickets through <SimpleLink rel="" target="" url={URL_EMAIL} text={TEXT_EMAIL} />&nbsp;
              (send us your name and email only) before January 15, 2018.
            </p>
            <p>
              After submission closes, 40 lucky people will be selected randomly and contacted
              through the e-mail address which they submitted. The e-mail will hold a coupon code,
              with which they can purchase their discounted diversity ticket.
            </p>
          </section>
        </div>
      </div>
    );
  }
}
