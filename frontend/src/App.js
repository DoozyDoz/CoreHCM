import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import Sidebar from "./components/SideBar";
import Divider from "./components/Divider";

const menuItems = [
  {
    title: "Home",
    defaultOpen: true,
    children: [
      { title: "Overview", link: "/overview" },
      { title: "Updates", link: "/updates" },
      { title: "Reports", link: "/reports" },
    ],
  },
  {
    title: "Dashboard",
    children: [
      { title: "Overview", link: "/dashboard/overview" },
      { title: "Weekly", link: "/dashboard/weekly" },
      { title: "Monthly", link: "/dashboard/monthly" },
      { title: "Annually", link: "/dashboard/annually" },
    ],
  },
  {
    title: "Orders",
    children: [
      { title: "New", link: "/orders/new" },
      { title: "Processed", link: "/orders/processed" },
      { title: "Shipped", link: "/orders/shipped" },
      { title: "Returned", link: "/orders/returned" },
    ],
  },
  {
    title: "Account",
    children: [
      { title: "New...", link: "/account/new" },
      { title: "Profile", link: "/account/profile" },
      { title: "Settings", link: "/account/settings" },
      { title: "Sign out", link: "/account/signout" },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <div className="d-flex">
        <div>
          {/* Sidebar content */}
          <Sidebar menuItems={menuItems} />
        </div>
        <Divider vertical />
        <div>
          {/* Main content */}
          <h1>Main Content</h1>
          {/* ... */}
        </div>
      </div>
    </div>
  );
}

export default App;
