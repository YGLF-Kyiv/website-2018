import React from 'react';
import 'flexboxgrid/css/index.css';
import './common.scss';
import './fontello.css';
import Header from '../components/Header/Header';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import Helmet from '../components/Helmet/Helmet';
import Footer from '../components/Footer/Footer';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="app">
        <Helmet />
        <div className="app-header">
          <HeaderMenu />
          <Header showButton={false} />
        </div>
        <div className="app-body">
          {children()}
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    );
  }
}
