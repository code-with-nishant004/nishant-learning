import { useState, useEffect } from "react";
import { NavLink } from "react-router";

function Layout({ children }) {
  return (
    <div className="app-wrapper">
      <nav className="app-header navbar navbar-expand bg-body">
        <div className="container-fluid">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="navbar-search"
                href="#"
                role="button"
              >
                <i className="bi bi-search" />
              </a>
            </li>
            <li className="nav-item dropdown user-menu">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <img
                  src="img/user2-160x160.jpg"
                  className="user-image rounded-circle shadow"
                  alt="User Image"
                />
                <span className="d-none d-md-inline">Alexander Pierce</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <li className="user-header text-bg-primary">
                  <img
                    src="img/user2-160x160.jpg"
                    className="rounded-circle shadow"
                    alt="User Image"
                  />
                  <p>
                    Alexander Pierce - Web Developer
                    <small>Member since Nov. 2023</small>
                  </p>
                </li>

                <li className="user-body">
                  <div className="row">
                    <div className="col-4 text-center">
                      <a href="#">Followers</a>
                    </div>
                    <div className="col-4 text-center">
                      <a href="#">Sales</a>
                    </div>
                    <div className="col-4 text-center">
                      <a href="#">Friends</a>
                    </div>
                  </div>
                </li>
                <li className="user-footer">
                  <a href="#" className="btn btn-default btn-flat">
                    Profile
                  </a>
                  <a href="#" className="btn btn-default btn-flat float-end">
                    Sign out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <aside
        className="app-sidebar bg-body-secondary shadow"
        data-bs-theme="dark"
      >
        <div className="sidebar-brand">
          <a href="./index.html" className="brand-link">
            <img
              src="img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image opacity-75 shadow"
            />
            <span className="brand-text fw-light">AdminLTE 4</span>
          </a>
        </div>
        <div className="sidebar-wrapper">
          <nav className="mt-2">
            <ul
              className="nav sidebar-menu flex-column"
              data-lte-toggle="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <NavLink to="/" className="nav-link active">
                  <i className="nav-icon bi bi-speedometer" />
                  <p>Dashboard</p>
                </NavLink>
              </li>
              <li className="nav-item menu-open">
                <NavLink to="/customers" className="nav-link active">
                  <i className="nav-icon bi bi-speedometer" />
                  <p>Customers</p>
                </NavLink>
              </li>
              <li className="nav-item menu-open">
                <NavLink to="/products" className="nav-link active">
                  <i className="nav-icon bi bi-speedometer" />
                  <p>Products</p>
                </NavLink>
              </li>
            </ul>
            {/*end::Sidebar Menu*/}
          </nav>
        </div>
        {/*end::Sidebar Wrapper*/}
      </aside>
      {/*end::Sidebar*/}
      {/*begin::App Main*/}
      <main className="app-main">{children}</main>

      <footer className="app-footer">
        <div className="float-end d-none d-sm-inline">Anything you want</div>
        <strong>
          Copyright © 2014-2024&nbsp;
          <a href="https://adminlte.io" className="text-decoration-none">
            AdminLTE.io
          </a>
          .
        </strong>
        All rights reserved.
      </footer>
    </div>
  );
}

export default Layout;
