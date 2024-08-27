import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Slid from "./comp/Slid.js";
import Dashboard from "./parts/Home.js";
import Courses from "./parts/Courses.js";
import Friends from "./parts/Friends.js";
import Files from "./parts/Files.js";
import Profile from "./parts/Profile.js";
import Projects from "./parts/Projects.js";
import Settings from "./parts/Settings.js";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Courses",
    element: <Courses />,
  },
  {
    path: "/Friends",
    element: <Friends />,
  },
  {
    path: "/Files",
    element: <Files />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/Settings",
    element: <Settings />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
