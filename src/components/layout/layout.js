import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './layout.scss';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <aside id="left-panel" className="left-panel">
          <nav className="custom-navbar navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/quick-typing"><i className="menu-icon fa fa-american-sign-language-interpreting" />Gõ tốc ký</Link>
                </li>
                <li>
                  <Link to="/hocquytac"><i className="menu-icon fas fa-file-alt" /> Học quy tắc</Link>
                </li>
                <li>
                  <Link to="/luyengocau"><i className="menu-icon fa fa-puzzle-piece" />Luyện gõ</Link>
                </li>
                <li>
                  <Link to="/statistic"> <i className="menu-icon fa fa-bar-chart" />Thống kê</Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        <div id="right-panel" className="right-panel">
          <header id="header" className="header">
            <div className="top-left">
              <div className="navbar-header">
                <a className="navbar-brand" href="./"><img src="images/logotocky3.png" style={{ maxHeight: '41px' }} alt="Logo" /></a>
                <a href="#" id="menuToggle" className="menutoggle"><i style={{color: 'white'}} className="fa fa-bars" /></a>
              </div>
            </div>
          </header>
          <div className="content">
            {this.props.children}
          </div>

        </div>
      </div>
    )
  }
}
