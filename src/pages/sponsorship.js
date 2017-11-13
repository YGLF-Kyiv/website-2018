import React from 'react'
import "./sponsorship.scss";
import { gaTrack } from '../utils/ga';

export default class SponsorshipPage extends React.Component {

  componentWillMount() {
    gaTrack({
      eventCategory: 'sponsorship',
      eventAction: 'sponsorship',
      eventLabel: 'Sponsorship',
    });
  }

  render() {
    return (
      <div className="page-sponsorship lines-bg">
        <div className="container container-fluid">

          <section>
            <h2>Sponsoring You Gotta Love Frontend</h2>
            <p>We want to change how sponsors behave at conferences.</p>
            <p>
              We attend many conferences, and we have the best experience of good and bad examples.
              So we want to help our sponsors to reach their goals, whatever they are recruiting or
              promoting brand and products.
            </p>
            <p>
              We have only one sponsor package, it costs $5000.
            </p>
            <p>
              It includes all possible branding, but what is more important, it includes our
              expertise which will help you to perform your activities at the most intelligent level.
            </p>
          </section>

          <section>
            <h3>What you give</h3>
            <p>
              YGLF is a non-profit event made by volunteers.
            </p>
            <p>
              All income after all expenses would be put in local communities support to help with
              meetups and other free activities.
            </p>
          </section>

          <section>
            <h3>What you get</h3>
            <p>
              We truly believe that standard conference sponsorship doesn't work as it should.
            </p>
            <p>
              You logo everywhere, a boring booth with quiz, games and a lot of wasted paper — all
              these create white noise, and no one really cares.
            </p>
            <p>
              We want to change this positively to increase the possibility that your money
              will work for your goals. We know our audience, and we know how to connect your brand
              with these people.
            </p>
          </section>

          <section>
            <h3>Do you need to find the best developers? </h3>
            <p>
              Don't neglect their smartness, try something special that tells about you as a perfect company:
            </p>
            <ul>
              <li>
                show your infrastructure (like how easy it is to deploy 'hello world' inside your environment);
              </li>
              <li>
                show exciting tasks that you solve (we believe that getting Fibonacci sequence isn't one of those);
              </li>
              <li>
                explain how you care about the code quality, reviews, TDD practices.
              </li>
            </ul>

            <p>
              We would be happy to consult your company about how to achieve your recruiting goals
              without being annoying and offensive to potential candidates.
            </p>
          </section>

          <section>
            <h3>Do you need to promote your products and brand?</h3>
            <p>
              We definitely know what people like us want from gadgets and applications — we deeply
              understand your customers at this event, because we are your customers.
            </p>
            <p>
              So let us help you! For example, we can support you with some of these ideas:
            </p>
            <ul>
              <li>
                create live product testing environment;
              </li>
              <li>
                let attendees influence your product by bringing your devs to communicate with advanced customers;
              </li>
              <li>
                you have a raw product and want to get professional feedback? Get your best
                followers at YGLF, give your early beta to our attendees and get the most valuable
                and accurate feedback.
              </li>
            </ul>
            <p>
              We would be happy to consult your company about how to achieve your branding and
              promotion goals without using aggressive marketings steps.
            </p>
            <p>
              Sponsoring YGLF in Kyiv is an excellent opportunity to get amazing devs on board,
              to promote your brand to the very targeted and smart audience and to get a really
              professional feedback about your product.
            </p>
          </section>

        </div>
      </div>
    );
  }
}
