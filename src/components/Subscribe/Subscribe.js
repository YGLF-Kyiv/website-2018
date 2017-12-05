import React, { Component } from 'react';
import './subscribe.scss';

class Subscribe extends Component {
  render() {
    // Mailchimp form
    return (
      <form
        action="https://yglf.us17.list-manage.com/subscribe/post?u=6304d25cb6fc721563ac70de3&amp;id=c5ca8dfcd8"
        method="post"
        className="subscribe-form"
      >
        <input
          type="email"
          name="EMAIL"
          placeholder="Enter Your email address"
          required
        />
        <div className="subscribe-form-token">
          <input type="text" name="b_6304d25cb6fc721563ac70de3_c5ca8dfcd8" tabIndex="-1" value="" />
        </div>
        <button type="submit" name="subscribe">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
          <span>OK</span>
        </button>
      </form>
    );
  }
}

export default Subscribe;
