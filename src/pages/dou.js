import React from 'react';
import './promo.scss';

export default class DouPage extends React.Component {
  render() {
    return (
      <div className="page-promo lines-bg">
        <div className="container-fluid">
          <h2 className="promo-title">Specially for DOU People</h2>
          <div className="promo-tickets" id="2event_tickets_widget"></div>
          <div className="code"><code className="code-text">YGLFLovesDOU</code></div>
        </div>
      </div>
    );
  }
}
