import React from 'react';
import './header-menu.scss';
import Link from 'gatsby-link';
import classNames from 'classnames';
import { isInBrowser } from '../../shared/utils/common'

const MENU_ITEMS = [
  { title: 'Home', to: '/' },
  { title: 'About', to: '/about' },
  { title: 'Speakers', to: '/speakers' },
  { title: 'Schedule', to: '/schedule' },
  { title: 'Sponsors', to: '/sponsorship' },
];

export default class HeaderMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      menuExpanded: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  renderList() {
    const isAtHome = isInBrowser() && ['/', ''].includes(document.location.pathname);
    return MENU_ITEMS.map(item => {
      // fixing gatsby bug that home link is always highligted
      const unhighlight = item.to === '/' && !isAtHome;
      return (
        <Link
          activeClassName="-active"
          to={item.to}
          key={item.title}
          onClick={this.closeMenu}
          className={classNames({ '-disabled': item.disabled, '-unhighlight': unhighlight })}
        >
          {item.title}
        </Link>
      );
    });
  }

  toggleMenu(e) {
    e.preventDefault();
    this.state.menuExpanded ? this.closeMenu() : this.openMenu();
  }
  openMenu() {
    this.setState({
      menuExpanded: true,
    });
    window.document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
  }
  closeMenu() {
    this.setState({
      menuExpanded: false,
    });
    window.document.body.style.overflow = 'auto';
  }

  render() {
    const { menuExpanded } = this.state;
    return (
      <div className={classNames('header-menu', { '-expanded': menuExpanded })}>
        <div className="header-menu-expand">
          <a
            href="#"
            className="header-menu-expand-btn"
            onClick={this.toggleMenu}
          >
            {menuExpanded ? 'Back' : 'Menu'}
          </a>
        </div>
        <div className="header-menu-inner">{ this.renderList() }</div>
        <div className="header-menu-overlay">{ this.renderList() }</div>
      </div>
    );
  }
}
