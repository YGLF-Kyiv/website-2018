import React from 'react';
import './footer.scss';
import Subscribe from '../Subscribe/Subscribe';
import SocialIcons from '../SocialIcons/SocialIcons';
import Link from 'gatsby-link';
import config from '../../../data/SiteConfig';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container container-fluid">
          {/*<div className="row footer-subscribe">*/}
            {/*<div className="col-lg-7 col-xs-12">*/}
              {/*<strong>Subscribe</strong>*/}
              {/*<p>*/}
                {/*Exciting things ahead,<br />  stay tuned for more information.*/}
              {/*</p>*/}
              {/*<Subscribe />*/}
            {/*</div>*/}
            {/*<div className="col-lg-5 col-xs-12">*/}
              {/*<strong>Find your way</strong>*/}
              {/*<div className="footer-links">*/}
                {/*<Link to="/">Home</Link>*/}
                {/*<a*/}
                  {/*href="https://www.eventbrite.com/e/you-gotta-love-frontend-2017-tickets-32014463121?aff=websitefooter"*/}
                  {/*target="_blank"*/}
                  {/*rel="noopener noreferrer"*/}
                {/*>*/}
                  {/*Tickets*/}
                {/*</a>*/}
                {/*<Link to="/about">About</Link>*/}
                {/*<Link to="/speakers">Speakers</Link>*/}
                {/*<Link to="/workshops">Workshops</Link>*/}
                {/*<Link to="/sponsors">Sponsors</Link>*/}
                {/*<Link to="/schedule">Schedule</Link>*/}
                {/*<a*/}
                  {/*href="http://2016.yougottalovefrontend.com/"*/}
                  {/*target="_blank"*/}
                  {/*rel="noopener noreferrer"*/}
                {/*>*/}
                  {/*YGLF 2016*/}
                {/*</a>*/}
                {/*<Link to="/codeofconduct">Code Of Conduct</Link>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}
          <div className="row footer-contacts">
            <div className="col-md-7 col-xs-12">
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
            </div>
            <div className="col-md-5 col-xs-12">
              <a className="footer-mailto" href={`mailto:${config.email}`}>
                { config.email }
              </a>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
