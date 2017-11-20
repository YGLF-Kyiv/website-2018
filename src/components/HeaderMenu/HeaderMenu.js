import React from 'react';
import './header-menu.scss';
import Link from 'gatsby-link';
import classNames from 'classnames';

const MENU_ITEMS = [
  { title: 'Home', to: '/' },
  { title: 'Speakers', to: '/speakers', disabled: true },
  { title: 'Schedule', to: '/schedule', disabled: true },
  { title: 'Diversity Tickets', to: '/diversity' },
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
    return MENU_ITEMS.map(item => (
      <Link
        activeClassName="-active"
        to={item.to}
        key={item.title}
        onClick={this.closeMenu}
        className={classNames({ '-disabled': item.disabled })}
      >
        {item.title}
      </Link>
    ));
  }

  toggleMenu(e) {
    e.preventDefault();
    this.setState({
      menuExpanded: !this.state.menuExpanded,
    });
  }
  closeMenu() {
    this.setState({
      menuExpanded: false,
    });
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
