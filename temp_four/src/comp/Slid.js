import { NavLink } from "react-router-dom";

const Slid = ({ children }) => {
  return (
    <>
      <div className="page d-flex">
        <div className="sidebar bg-white p-relative p-20">
          <h3 className="p-relative mt-0 txt-c">Jafar</h3>
          <ul>
            <li>
              <NavLink
                className="p-10 d-flex align-center mb-5 fs-14 c-black rad-6"
                to="/"
              >
                <i className="fa-regular fa-chart-bar fa-fw"></i>
                <span className="ml-5 hide-mobile">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="p-10 d-flex align-center mb-5 fs-14 c-black rad-6"
                to="/Settings"
              >
                <i className="fa-solid fa-gear fa-fw"></i>
                <span className="ml-5 hide-mobile">Settings</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="p-10 d-flex align-center mb-5 fs-14 c-black rad-6"
                to="/Profile"
              >
                <i className="fa-solid fa-user fa-fw"></i>
                <span className="ml-5 hide-mobile">Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                p-20
                className="p-10 d-flex align-center mb-5 fs-14 c-black rad-6"
                to="/Projects"
              >
                <i className="fa-solid fa-diagram-project fa-fw"></i>
                <span className="ml-5 hide-mobile">Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="p-10 d-flex align-center mb-5 fs-14 c-black rad-6"
                to="/Courses"
              >
                <i className="fa-solid fa-graduation-cap fa-fw"></i>
                <span className="ml-5 hide-mobile">Courses</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="p-10 d-flex align-center mb-5 fs-14 c-black rad-6"
                to="/Friends"
              >
                <i className="fa-solid fa-user-group fa-fw"></i>
                <span className="ml-5 hide-mobile">Friends</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="p-10 d-flex align-center mb-5 fs-14 c-black rad-6"
                to="/Files"
              >
                <i className="fa-solid fa-file fa-fw"></i>
                <span className="ml-5 hide-mobile">Files</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="p-10 d-flex align-center mb-5 fs-14 c-black rad-6"
                to="/Plans"
              >
                <i className="fa-regular fa-credit-card fa-fw"></i>
                <span className="ml-5 hide-mobile">Plans</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="content w-full p-relative">
          <div className="head between-flex rad-6 p-15 bg-white p-relative">
            <input
              type="text"
              placeholder="Type A Keyword"
              className="p-10 rad-6 p-relative"
            />
            <div className="notification p-relative center-flex">
              <i
                id="bell"
                className="fa-regular active fa-bell fa-lg p-relative"
              />
              <img
                className="rad-half ml-15"
                src="media/photo_2024-02-03_13-46-25.jpg"
                alt=""
              />
            </div>
          </div>

          {children}
        </div>
      </div>
    </>
  );
};
export default Slid;
