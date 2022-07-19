import { BrowserRouter as Router, Route, NavLink, Routes, Navigate } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";

import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
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
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </div>
    </Router>
  );
};
