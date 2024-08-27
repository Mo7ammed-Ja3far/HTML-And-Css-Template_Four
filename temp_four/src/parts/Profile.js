import Slid from "../comp/Slid";
const Profile = () => {
  return (
    <Slid>
      <>
        <h1 className="p-relative m-20">Profile</h1>
        <div className="profile-page m-20">
          <div className="bg-white rad-10 p-20">
            <div className="profile between-flex">
              <div className="photo txt-c p-20">
                <img
                  src="media/photo_2024-02-03_13-46-25.jpg "
                  className="rad-half"
                  alt=""
                />
                <h3 className="m-0">Mohamed Jafar</h3>
                <p className="c-grey m-0 mt-10">Level 20</p>
                <span
                  className="p-relative d-block bg-eee"
                  style={{ height: 6, width: "70%", margin: "10px auto" }}
                >
                  <span
                    className="bg-blue d-block"
                    style={{ width: "75%", height: 6 }}
                  />
                </span>
                <div className="rate">
                  <i className="fa-solid fa-star c-orange fs-13" />
                  <i className="fa-solid fa-star c-orange fs-13" />
                  <i className="fa-solid fa-star c-orange fs-13" />
                  <i className="fa-solid fa-star c-orange fs-13" />
                  <i className="fa-solid fa-star c-orange fs-13" />
                </div>
                <p className="c-grey fs-13 mt-10">550 Rating</p>
              </div>
              <div className="info flex1">
                <div className="box d-flex f-wrap p-20">
                  <div className="m-0 c-grey w-full">General Information</div>
                  <div className="fs-14">
                    <span className="c-grey">Full Name:</span> Mohamed Jafar
                  </div>
                  <div className="fs-14">
                    <span className="c-grey">Gender:</span> male
                  </div>
                  <div className="fs-14">
                    <span className="c-grey">Country:</span> Egypt
                  </div>
                  <div className="fs-14">
                    <label>
                      <input type="checkbox" className="toggle-checkbox" />
                      <div className="toggle-switch" />
                    </label>
                  </div>
                </div>
                <div className="box d-flex f-wrap p-20">
                  <div className="m-0 c-grey w-full">Personal Information</div>
                  <div className="fs-14">
                    <span className="c-grey">Email:</span>{" "}
                    Mo7ammed.Ja3far@gmail.com
                  </div>
                  <div className="fs-14">
                    <span className="c-grey">phone:</span> 01124839303
                  </div>
                  <div className="fs-14">
                    <span className="c-grey">Date Of Birth:</span> 21/9/2005
                  </div>
                  <div className="fs-14">
                    <label>
                      <input type="checkbox" className="toggle-checkbox" />
                      <div className="toggle-switch" />
                    </label>
                  </div>
                </div>
                <div className="box d-flex f-wrap p-20">
                  <div className="m-0 c-grey w-full">Job Information</div>
                  <div className="fs-14">
                    <span className="c-grey">Title:</span> Front-End Developer
                  </div>
                  <div className="fs-14">
                    <span className="c-grey">Programming Language</span> C#
                  </div>
                  <div className="fs-14">
                    <span className="c-grey">Years Of Experience</span> 5+
                  </div>
                  <div className="fs-14">
                    <label>
                      <input type="checkbox" className="toggle-checkbox" />
                      <div className="toggle-switch" />
                    </label>
                  </div>
                </div>
                <div className="box d-flex f-wrap p-20">
                  <div className="m-0 c-grey w-full">billing Information</div>
                  <div className="fs-14">
                    <span className="c-grey">Payment Method:</span> Paypal
                  </div>
                  <div className="fs-14">
                    <span className="c-grey">Email:</span> email@website.com
                  </div>
                  <div className="fs-14">
                    <span className="c-grey">Subscription:</span> Monthly
                  </div>
                  <div className="fs-14">
                    <label>
                      <input type="checkbox" className="toggle-checkbox" />
                      <div className="toggle-switch" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex mt-20">
            <div className="my-skills p-20 bg-white rad-10">
              <h2 className="m-0 mb-10">My Skills</h2>
              <p className="fs-14 c-grey d-block">Complete Skills List</p>
              <div className="skills pt-15 pb-15">
                <span className="btn-shape bg-eee">HTML</span>
                <span className="btn-shape ml-5 mr-5 bg-eee">Pugjs</span>
                <span className="btn-shape bg-eee">HTML</span>
              </div>
              <div className="skills pt-15 pb-15">
                <span className="btn-shape bg-eee">CSS</span>
                <span className="btn-shape ml-5 mr-5 bg-eee">SASS</span>
                <span className="btn-shape bg-eee">Stylus</span>
              </div>
              <div className="skills pt-15 pb-15">
                <span className="btn-shape bg-eee">JavaScript</span>
                <span className="btn-shape ml-5 mr-5 bg-eee">TypeScript</span>
              </div>
              <div className="skills pt-15 pb-15">
                <span className="btn-shape bg-eee">Vuejs</span>
                <span className="btn-shape ml-5 mr-5 bg-eee">Jasmine</span>
              </div>
              <div className="skills pt-15 pb-15">
                <span className="btn-shape bg-eee">PHP</span>
                <span className="btn-shape ml-5 mr-5 bg-eee">Laravel</span>
              </div>
              <div className="skills pt-15 pb-15">
                <span className="btn-shape bg-eee">Python</span>
                <span className="btn-shape ml-5 mr-5 bg-eee">Django</span>
              </div>
            </div>
            <div className="last-activities p-20 bg-white rad-10">
              <h2 className="m-0 mb-10">Latest Activities</h2>
              <p className="fs-14 c-grey d-block">
                Latest Activities Done By The User
              </p>
              <div className="activities pt-15 pb-15 between-flex">
                <img
                  src="media/Profile/activity-01.png"
                  className="rad-half pr-5"
                  alt=""
                />
                <div className="flex1">
                  Store
                  <span className="fs-14 c-grey mt-15 d-block">
                    Bought The Mastering Python Course
                  </span>
                </div>
                <div className="">
                  18:10
                  <span className="fs-14 c-grey d-block mt-15">Yesterday</span>
                </div>
              </div>
              <div className="activities pt-15 pb-15 between-flex">
                <img
                  src="media/Profile/activity-02.png"
                  className="rad-half pr-5"
                  alt=""
                />
                <div className="flex1">
                  Academy
                  <span className="fs-14 c-grey mt-15 d-block">
                    Got The PHP Certificate
                  </span>
                </div>
                <div className="">
                  18:10
                  <span className="fs-14 c-grey d-block mt-15">Yesterday</span>
                </div>
              </div>
              <div className="activities pt-15 pb-15 between-flex">
                <img
                  src="media/Profile/activity-03.png"
                  className="rad-half pr-5"
                  alt=""
                />
                <div className="flex1">
                  Badges
                  <span className="fs-14 c-grey mt-15 d-block">
                    Unlocked The 10 Skills Badge
                  </span>
                </div>
                <div className="">
                  18:10
                  <span className="fs-14 c-grey d-block mt-15">Yesterday</span>
                </div>
              </div>
              <div className="activities pt-15 pb-15 between-flex">
                <img
                  src="media/Profile/activity-01.png"
                  className="rad-half pr-5"
                  alt=""
                />
                <div className="flex1">
                  Stor
                  <span className="fs-14 c-grey mt-15 d-block">
                    Bought The Typescript Course
                  </span>
                </div>
                <div className="">
                  18:10
                  <span className="fs-14 c-grey d-block mt-15">Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Slid>
  );
};
export default Profile;
