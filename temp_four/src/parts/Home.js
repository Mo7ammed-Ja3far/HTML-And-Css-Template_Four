import Slid from "../comp/Slid";
import { Helmet } from "react-helmet-async";
const Dashboard = () => {
  return (
    <Slid>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="This is Your Dashboard" />
      </Helmet>
      <>
        <h1 className="p-relative m-20">Dashboard</h1>
        <div className="wrapper m-20 d-grid gap-20">
          <div className="welcome bg-white rad-10 txt-c-mobile">
            <div className="info p-20 between-flex rad-10 bg-eee">
              <div>
                <h2 className="m-0">Welcome</h2>
                <span className="c-grey mt-5 d-block">Jafar</span>
              </div>
              <img src="media/welcome.png" className="hide-mobile" alt="" />
            </div>
            <img
              src="media/photo_2024-02-03_13-46-25.jpg"
              className="avatar"
              alt=""
            />
            <div className="body p-20 m-20 txt-c center-flex block-mobile bg-white">
              <div>
                Mohamed Jafar <span className="c-grey d-block">Developer</span>
              </div>
              <div>
                80<span className="c-grey d-block">Projects</span>
              </div>
              <div>
                $8500<span className="c-grey d-block m-0">Earned</span>
              </div>
            </div>
            <a
              href=""
              className="visit d-block fs-14 bg-blue c-white w-fit btn-shape"
            >
              Profile
            </a>
          </div>
          <div className="quick-draft bg-white p-20 rad-10">
            <h2 className="m-0">Quick Draft</h2>
            <span className="c-grey mt-10 d-block">
              Write A Draft For your ideas
            </span>
            <input
              type="text"
              placeholder="Title"
              className="d-block w-full p-5 bg-eee mt-20 rad-6"
            />
            <textarea
              placeholder="Your Thought"
              className="d-block mt-20 h-100 p-5 bg-eee w-full mb-15 rad-6"
              defaultValue={""}
            />
            <a
              href=""
              className="visit btn-shape bg-blue d-block w-fit m-0 c-white"
            >
              Send
            </a>
          </div>
          <div className="yearly-targets rad-6 p-20 bg-white">
            <h2 className="m-0">Yearly Targets</h2>
            <span className="c-grey fs-14 mt-10 d-block">Targets Of Year</span>
            <div className="line mt-20 center-flex">
              <div className="icon center-flex bg-blue2 mr-10">
                <i className="fa-solid fa-dollar-sign fa-lg c-white" />
              </div>
              <div className="info">
                <span className="c-grey d-block mb-10"> Money </span>
                <span className="fw-bold d-block w-full">$20.000</span>
                <div className="progress p-relative mt-10 w-full">
                  <div className="bg-blue p-relative" style={{ width: "80%" }}>
                    <span className="p-5 bg-blue c-white rad-6 fs-14">
                      80% <span />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="line mt-20 center-flex">
              <div className="icon center-flex mr-10 bg-orange2">
                <i className="fa-solid fa-code fa-lg c-orange" />
              </div>
              <div className="info">
                <span className="c-grey d-block mb-10"> Projects </span>
                <span className="fw-bold d-block w-full">24</span>
                <div className="progress bg-orange2 p-relative mt-10 w-full">
                  <div
                    className="bg-orange p-relative"
                    style={{ width: "55%" }}
                  >
                    <span className="p-5 bg-orange c-white rad-6 fs-14">
                      55% <span style={{ borderTopColor: "orange" }} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="line mt-20 center-flex">
              <div className="icon center-flex mr-10 bg-green2">
                <i className="fa-solid fa-user fa-lg c-green" />
              </div>
              <div className="info">
                <span className="c-grey d-block mb-10"> Team </span>
                <span className="fw-bold d-block w-full">12</span>
                <div className="progress bg-green p-relative mt-10 w-full">
                  <div className="bg-green p-relative" style={{ width: "75%" }}>
                    <span className="p-5 bg-green c-white rad-6 fs-14">
                      75%
                      <span style={{ borderTopColor: "var(--green-color)" }} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tickets-statistics p-20 bg-white">
            <h2 className="m-0">Tickets Statistics</h2>
            <span className="c-grey fs-14 mt-10 mb-10 d-block">
              Everything About Support Tickets
            </span>
            <div className="boxes d-flex txt-c f-wrap gap-20">
              <div className="box p-20">
                <i className="fa-regular fa-rectangle-list fa-2x mb-10 c-orange" />
                <div className="fw-bold fs-25">250</div>
                <span className="d-block c-grey fs-14">Total</span>
              </div>
              <div className="box p-20">
                <i className="fa-solid fa-spinner fa-2x mb-10 c-blue" />
                <div className="fw-bold fs-25">250</div>
                <span className="d-block c-grey fs-14">Total</span>
              </div>
              <div className="box p-20">
                <i className="fa-regular fa-circle-check fa-2x mb-10 c-green" />
                <div className="fw-bold fs-25">250</div>
                <span className="d-block c-grey fs-14">Total</span>
              </div>
              <div className="box p-20">
                <i className="fa-regular fa-rectangle-xmark fa-2x mb-10 c-red" />
                <div className="fw-bold fs-25">250</div>
                <span className="d-block c-grey fs-14">Total</span>
              </div>
            </div>
          </div>
          <div className="latest-news p-20 bg-white m">
            <h2 className="m-0 mb-20">Latest News</h2>
            <div className="box colo-mobile txt-c-mobile center-flex pt-20 pb-20">
              <img
                className="mr-10 rad-10"
                src="media/latest news/news-01.png"
                alt=""
              />
              <div className="info p-10">
                <span className="fw-bold">Created SASS Section </span>
                <span className="c-grey d-block fs-14">
                  New SASS Examples &amp; Tutorials
                </span>
              </div>
              <span className="time bg-eee fs-14 rad-10 btn-shape">
                3 Days Ago
              </span>
            </div>
            <div className="box colo-mobile txt-c-mobile center-flex pt-20 pb-20">
              <img
                className="mr-10 rad-10"
                src="media/latest news/news-02.png"
                alt=""
              />
              <div className="info p-10">
                <span className="fw-bold">Created SASS Section </span>
                <span className="c-grey d-block fs-14">
                  New SASS Examples &amp; Tutorials
                </span>
              </div>
              <span className="time bg-eee fs-14 rad-10 btn-shape">
                5 Days Ago
              </span>
            </div>
            <div className="box colo-mobile txt-c-mobile center-flex pt-20 pb-20">
              <img
                className="mr-10 rad-10"
                src="media/latest news/news-03.png"
                alt=""
              />
              <div className="info p-10">
                <span className="fw-bold">Team Increased </span>
                <span className="c-grey d-block fs-14">
                  3 Developers Joined The Team
                </span>
              </div>
              <span className="time bg-eee fs-14 rad-10 btn-shape">
                7 Days Ago
              </span>
            </div>
            <div className="box colo-mobile txt-c-mobile center-flex pt-20 pb-20">
              <img
                className="mr-10 rad-10"
                src="media/latest news/news-04.png"
                alt=""
              />
              <div className="info p-10">
                <span className="fw-bold">Added Payment Gateway </span>
                <span className="c-grey d-block fs-14">
                  Many New Payment Gateways Added
                </span>
              </div>
              <span className="time bg-eee fs-14 rad-10 btn-shape">
                9 Days Ago
              </span>
            </div>
          </div>
          <div className="latest-tasks bg-white p-20">
            <h2 className="m-0 mb-10">Latest Tasks</h2>
            <div className="box pt-10 pb-10 center-flex">
              <div className="info p-10">
                <span className="fw-bold d-block"> Record One New Video </span>
                <span className="c-grey">
                  Record Python Create Exe Project{" "}
                </span>
              </div>
              <i className="fa-regular fa-trash-can delete" />
            </div>
            <div className="box pt-10 pb-10 center-flex">
              <div className="info">
                <span className="fw-bold d-block"> Record One New Video </span>
                <span className="c-grey">
                  Record Python Create Exe Project{" "}
                </span>
              </div>
              <i className="fa-regular fa-trash-can delete" />
            </div>
            <div className="box pt-10 pb-10 center-flex">
              <div className="info">
                <span className="fw-bold d-block"> Record One New Video </span>
                <span className="c-grey">
                  Record Python Create Exe Project{" "}
                </span>
              </div>
              <i className="fa-regular fa-trash-can delete" />
            </div>
            <div className="box pt-10 pb-10 center-flex">
              <div className="info">
                <span className="fw-bold d-block"> Record One New Video </span>
                <span className="c-grey">
                  Record Python Create Exe Project{" "}
                </span>
              </div>
              <i className="fa-regular fa-trash-can delete" />
            </div>
            <div className="box pt-10 pb-10 center-flex">
              <div className="info">
                <span className="fw-bold d-block"> Record One New Video </span>
                <span className="c-grey">
                  Record Python Create Exe Project{" "}
                </span>
              </div>
              <i className="fa-regular fa-trash-can delete" />
            </div>
          </div>
          <div className="top-search bg-white p-20">
            <h2 className="m-0">Top Search Items</h2>
            <div className="between-flex">
              <span className="c-grey mt-10 fs-14">Keyword</span>
              <span className="mt-10 fs-14">Search Count</span>
            </div>
            <div className="between-flex">
              <span className="pt-10 pb-10 mt-10 fs-14">Keyword</span>
              <span className="mt-10 btn-shape bg-eee fs-14">180</span>
            </div>
            <div className="between-flex">
              <span className="pt-10 pb-10 mt-10 fs-14">Keyword</span>
              <span className="mt-10 btn-shape bg-eee fs-14">180</span>
            </div>
            <div className="between-flex">
              <span className="pt-10 pb-10 mt-10 fs-14">Keyword</span>
              <span className="mt-10 btn-shape bg-eee fs-14">180</span>
            </div>
            <div className="between-flex">
              <span className="pt-10 pb-10 mt-10 fs-14">Keyword</span>
              <span className="mt-10 btn-shape bg-eee fs-14">180</span>
            </div>
            <div className="between-flex">
              <span className="pt-10 pb-10 mt-10 fs-14">Keyword</span>
              <span className="mt-10 btn-shape bg-eee fs-14">180</span>
            </div>
            <div className="between-flex">
              <span className="pt-10 pb-10 mt-10 fs-14">Keyword</span>
              <span className="mt-10 btn-shape bg-eee fs-14">180</span>
            </div>
          </div>
          <div className="last-uploads bg-white p-20">
            <h2 className="m-0 mb-10">Latest Uploads</h2>
            <div className="box center-flex pt-10 pb-10">
              <img src="media/Files/avi.svg" className="mr-10" alt="" />
              <div className="info">
                <span>My-file.pdf</span>
                <span className="d-block c-grey block fs-14">Jafar</span>
              </div>
              <span className="btn-shape bg-eee fs-14">2.9mb</span>
            </div>
            <div className="box center-flex pt-10 pb-10">
              <img src="media/Files/avi.svg" className="mr-10" alt="" />
              <div className="info">
                <span>My-file.pdf</span>
                <span className="d-block c-grey fs-14">Jafar</span>
              </div>
              <span className="btn-shape bg-eee fs-14">2.9mb</span>
            </div>
            <div className="box center-flex pt-10 pb-10">
              <img src="media/Files/avi.svg" className="mr-10" alt="" />
              <div className="info">
                <span>My-file.pdf</span>
                <span className="d-block c-grey fs-14">Jafar</span>
              </div>
              <span className="btn-shape bg-eee fs-14">2.9mb</span>
            </div>
            <div className="box center-flex pt-10 pb-10">
              <img src="media/Files/avi.svg" className="mr-10" alt="" />
              <div className="info">
                <span>My-file.pdf</span>
                <span className="d-block c-grey fs-14">Jafar</span>
              </div>
              <span className="btn-shape bg-eee fs-14">2.9mb</span>
            </div>
            <div className="box center-flex pt-10 pb-10">
              <img src="media/Files/avi.svg" className="mr-10" alt="" />
              <div className="info">
                <span>My-file.pdf</span>
                <span className="d-block c-grey fs-14">Jafar</span>
              </div>
              <span className="btn-shape bg-eee fs-14">2.9mb</span>
            </div>
            <div className="box center-flex pt-10 pb-10">
              <img src="media/Files/avi.svg" className="mr-10" alt="" />
              <div className="info">
                <span>My-file.pdf</span>
                <span className="d-block c-grey fs-14">Jafar</span>
              </div>
              <span className="btn-shape bg-eee fs-14">2.9mb</span>
            </div>
          </div>
          <div className="last-project p-20 bg-white rad-10">
            <h2 className="m-0">Last Project Progress</h2>
            <div className="project p-relative">
              <ul>
                <li className="p-relative">Got The Project</li>
                <li className="p-relative">Started The Project</li>
                <li className="p-relative">The Project About To Finish</li>
                <li className="p-relative">Test The Project</li>
                <li className="p-relative">
                  Finish The Project &amp; Get Money
                </li>
              </ul>
              <img
                src="media/project.png"
                style={{
                  width: 160,
                  opacity: "0.1",
                  position: "absolute",
                  bottom: "-20px",
                  right: "-20px",
                }}
                alt=""
                className="hide-mobile"
              />
            </div>
          </div>
          <div className="reminders bg-white p-20 rad-10">
            <h2 className="m-0 mb-20">Reminders</h2>
            <ul>
              <li className="p-relative ml-15 pt-10 blue">
                <span className="circle bg-blue" />
                <div>
                  <span className="fw-bold fs-14">Check My Tasks List</span>
                  <span className="d-block c-grey fs-14">
                    28/09/2022 - 12:00am
                  </span>
                </div>
              </li>
              <li className="p-relative ml-15 pt-10 orange">
                <span className="circle bg-orange" />
                <div className="green">
                  <span className="fw-bold fs-14"> Check My Projects</span>
                  <span className="d-block c-grey fs-14">
                    26/10/2022 - 12:00am
                  </span>
                </div>
              </li>
              <li className="p-relative ml-15 pt-10 green">
                <span className="circle bg-green c-green" />
                <div>
                  <span className="fw-bold fs-14">Call All My Clients</span>
                  <span className="d-block c-grey fs-14">
                    05/11/2022 - 12:00am
                  </span>
                </div>
              </li>
              <li className="p-relative ml-15 pt-10 red">
                <span className="circle bg-red" />
                <div>
                  <span className="fw-bold fs-14">
                    Finish The Development Workshop
                    <span className="d-block c-grey fs-14">
                      20/12/2022 - 12:00am
                    </span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="last-post bg-white p-20 rad-10">
            <h2 className="m-0">Last Post</h2>
            <div className="info w-full center-flex">
              <img
                src="media/photo_2024-02-03_13-46-25.jpg"
                className="rad-half mr-10"
                style={{ width: 48, height: 48 }}
              />
              <div className="flex1">
                <span className="fw-bold d-block">Mohamed Jafar</span>
                <span className="c-grey fs-14">About 3 Hours Ago</span>
              </div>
            </div>
            <div
              className="pt-15 txt-c-mobile pb-10"
              style={{ minHeight: 100 }}
            >
              You Can Fool All Of The People Some Of The Time, And Some Of The
              People All Of The Time, But You Can't Fool All Of The People All
              Of The Time.
            </div>
            <div className="pt-10 pb-10 between-flex">
              <span className="c-grey fs-14">
                <i className="fa-regular fa-heart pr-5" />
                1.8K
              </span>
              <span className="c-grey fs-14">
                <i className="fa-regular fa-comments pr-5" />
                500
              </span>
            </div>
          </div>
          <div className="social-media p-20 bg-white rad-10">
            <h2 className="m-0 mb-15">Social Media Stats</h2>
            <div className="center-flex mb-10">
              <div className="facebook bg-blue fs-14 p-20">
                <i
                  style={{ width: 30 }}
                  className="fa-brands fa-facebook-f fa-2x c-white h-full center-flex"
                />
              </div>
              <div className="between-flex flex1 p-20 bg-blue2">
                <span className="c-blue flex1">2M Like</span>
                <span className="btn-shape fs-14 bg-blue c-white">Like</span>
              </div>
            </div>
            <div className="center-flex mb-10">
              <div className="whatsapp bg-green fs-14 p-20">
                <i
                  style={{ width: 30 }}
                  className="fa-brands fa-whatsapp fa-2x c-white h-full center-flex"
                />
              </div>
              <div className="between-flex flex1 p-20 bg-green2">
                <span className="c-green flex1">2M Like</span>
                <span className="btn-shape fs-14 bg-green c-white">Like</span>
              </div>
            </div>
            <div className="center-flex mb-10">
              <div
                style={{ backgroundColor: "#fe1b7f" }}
                className="instagram bg-blue fs-14 p-20"
              >
                <i
                  style={{ width: 30 }}
                  className="fa-brands fa-instagram fa-2x c-white h-full center-flex"
                />
              </div>
              <div
                style={{ backgroundColor: "#fe1b7d82" }}
                className="between-flex flex1 p-20 bg-blue2"
              >
                <span className="c-white flex1">2M Like</span>
                <span
                  style={{ backgroundColor: "#fe1b7d" }}
                  className="btn-shape fs-14 bg-blue c-white"
                >
                  Like
                </span>
              </div>
            </div>
            <div className="center-flex mb-10">
              <div className="linkedin bg-blue fs-14 p-20">
                <i
                  style={{ width: 30 }}
                  className="fa-brands fa-linkedin fa-2x c-white h-full center-flex"
                />
              </div>
              <div
                style={{ backgroundColor: "rgb(0 119 181 / 20)" }}
                className="between-flex flex1 p-20 bg-blue2"
              >
                <span className="c-white flex1">2M Like</span>
                <span className="btn-shape fs-14 bg-blue c-white">Like</span>
              </div>
            </div>
          </div>
        </div>
        <div className="m-20 p-20 bg-white">
          <h2 className="m-0 mb-15">Project</h2>
          <div className="responsive-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Finish Date</th>
                  <th>Client</th>
                  <th>Price</th>
                  <th>Team</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ministry Wikipedia</td>
                  <td>10 May 2022</td>
                  <td>Ministry</td>
                  <td>$5300</td>
                  <td />
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>Elzero Shop</td>
                  <td>12 Oct 2021</td>
                  <td>Elzero Company</td>
                  <td>$1500</td>
                  <td />
                  <td>In Progress</td>
                </tr>
                <tr>
                  <td>Bouba App</td>
                  <td>05 Sep 2021</td>
                  <td>Bouba</td>
                  <td>$800</td>
                  <td />
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>Mahmoud Website</td>
                  <td>22 May 2021</td>
                  <td>Mahmoud</td>
                  <td>$600</td>
                  <td />
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>Sayed Website</td>
                  <td>24 May 2021</td>
                  <td>Sayed</td>
                  <td>$300</td>
                  <td />
                  <td>Rejected</td>
                </tr>
                <tr>
                  <td>Arena Application</td>
                  <td>01 Mar 2021</td>
                  <td>Arena Company</td>
                  <td>$2600</td>
                  <td />
                  <td>Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    </Slid>
  );
};
export default Dashboard;
