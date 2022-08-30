import { Outlet, Link } from "react-router-dom";

import React from "react";

export default function Layout() {
  return (
    <>
      <nav className="text-2xl">
        <ul>
          <li className="hvr-float-shadow">
            <Link to="/">Home</Link>
          </li>
          <li className="hvr-float-shadow">
            <Link to="/calendar">Calendar</Link>
          </li>

          <li className="hvr-float-shadow">
            <Link to="/announcements">Announcements</Link>
          </li>

          <li className="hvr-float-shadow">
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
