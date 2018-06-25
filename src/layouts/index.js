import React from 'react';
import 'flexboxgrid/css/index.css';
import './common.scss';
import './fontello.css';
import Header from '../components/Header/Header';
import Helmet from '../components/Helmet/Helmet';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import IntroMovie from '../components/IntroMovie/index';
import Footer from '../components/Footer/Footer';
import CurrentEvent from "../components/CurrentEvent/CurrentEvent";
import { isInBrowser } from '../shared/utils/common';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="app">
        <Helmet />
        <div className="app-header">
          <HeaderMenu />
          <Header showButton={false} />
          { isInBrowser() && <IntroMovie /> }
        </div>
        <div className="app-body">
          { children() }
          <CurrentEvent />
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    );
  }
}
