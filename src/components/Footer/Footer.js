import React from 'react';
import './footer.scss';
import Link from "gatsby-link";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container container-fluid">
          <div className="row">
            <div className="col-lg-6 col-xs-12"></div>
            <div className="col-lg-6 col-xs-12"></div>
          </div>
        </div>
      </div>
    );
  }
}
