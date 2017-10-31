import React from 'react';
import 'flexboxgrid/css/index.css';
import './common.scss';
import './fontello.css';
import Header from '../components/Header/Header';
import Helmet from '../components/Helmet/Helmet';
import Footer from '../components/Footer/Footer';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="app">
        <Helmet />
        <Header />
        <div className="body">
          {children()}
        </div>
        <Footer />
      </div>
    );
  }
}
