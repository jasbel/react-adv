<<<<<<< HEAD
import { Suspense } from "react";
import { BrowserRouter as Router, Route, NavLink, Routes, Navigate } from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(route => (
                <li key={route.to}>
                  <NavLink to={route.to} className={({ isActive }) => (isActive ? "nav-active" : "")}>
                    {route.name}
                  </NavLink>
                </li>
              ))}
=======
import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';


export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span> }>
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
            
              {
                routes.map( ({ path, name }) => (
                  <li key={ path }>
                    <NavLink 
                      to={ path }
                      activeClassName="nav-active">
                        { name }
                      </NavLink>
                  </li>
                ))
              }
>>>>>>> 974413b64e35c00c615f3e5e800f29cbedc10a4c
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
<<<<<<< HEAD
            renders the first one that matches the current URL. */}
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </Router>
=======
              renders the first one that matches the current URL. */}
          <Switch>
              
              {
                routes.map( ({ path, component:Component }) => (
                  <Route 
                    key={ path }
                    path={ path }
                    render={ () => <Component /> }
                  />
                ))
              }

              <Redirect to={ routes[0].path } />
          
          </Switch>
        </div>
      </Router>

>>>>>>> 974413b64e35c00c615f3e5e800f29cbedc10a4c
    </Suspense>
  );
};
