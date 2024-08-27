import Slid from "../comp/Slid";
const Settings = () => {
  return (
    <Slid>
      <h1 class="p-relative m-20">Settings</h1>
      <div className="settings-page d-grid gap-20 m-20">
        <div className="bg-white p-20 rad-10">
          <h2 className="m-0">Site Control</h2>
          <p className="mt-15 c-grey fs-14">
            Control The Website If There Is Maintenance
          </p>
          <div className="mt-20 between-flex">
            <div className="flex1">
              <span>Website Control</span>
              <span className="d-block mt-10 c-grey fs-14">
                Open/Close Website And Type The Reason
              </span>
            </div>
            <label>
              <input
                defaultChecked=""
                type="checkbox"
                className="toggle-checkbox"
              />
              <div className="toggle-switch" />
            </label>
          </div>
          <textarea
            className="close-text border-ccc w-full rad-6 mt-20"
            placeholder="Close Message Content"
            defaultValue={""}
          />
        </div>
        <div className="bg-white p-20 rad-10">
          <h2 className="m-0">General Info</h2>
          <p className="mt-20 c-grey fs-14">
            General Information About Your Account
          </p>
          <div>
            <label htmlFor="first" className="c-grey fs-14">
              First Name
            </label>
            <input
              type="text"
              className="border-ccc p-10 w-full rad-6 mt-10"
              id="first"
              placeholder="First Name"
            />
          </div>
          <div className="mt-15">
            <label htmlFor="last" className="c-grey fs-14">
              Last Name
            </label>
            <input
              type="text"
              className="border-ccc p-10 w-full rad-6 mt-10"
              id="last"
              placeholder="Last Name"
            />
          </div>
          <div className="mt-15">
            <label htmlFor="email" className="c-grey d-block fs-14">
              Email
            </label>
            <div className="between-flex mt-10">
              <input
                type="email"
                className="border-ccc p-10 w-full rad-6"
                id="email"
                placeholder="Email"
                disabled=""
                defaultValue="Mo7ammed.Ja3far@gamil.com"
              />
              <a href="" className="center-flex h-full c-blue flex1">
                Change
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white p-20 rad-10">
          <h2 className="m-0">Security Info</h2>
          <p className="fs-14 c-grey mt-20">
            Security Information About Your Account
          </p>
          <div className="sec-box pb-20 between-flex mt-20">
            <div className="flex1">
              Password
              <span className="c-grey fs-14 mt-10 d-block">
                Last Change On 25/10/2021
              </span>
            </div>
            <a href="#" className="btn-shape bg-blue c-white">
              Change
            </a>
          </div>
          <div className="sec-box pb-20 between-flex mt-20">
            <div className="flex1">
              Two-Factor Authentication
              <span className="c-grey fs-14 mt-10 d-block">
                Two-Factor Authentication
              </span>
            </div>
            <label>
              <input type="checkbox" className="toggle-checkbox" />
              <div className="toggle-switch" />
            </label>
          </div>
          <div className="sec-box pb-20 between-flex mt-20">
            <div className="flex1">
              Devices
              <span className="c-grey fs-14 mt-10 d-block">
                Check The Login Devices List
              </span>
            </div>
            <a href="#" className="btn-shape bg-eee c-black">
              Devices
            </a>
          </div>
        </div>
        <div className="social-boxes bg-white p-20 rad-10">
          <h2 className="m-0">Social Info</h2>
          <p className="fs-14 c-grey mt-20">Social Media Information</p>
          <div className="between-flex mt-20">
            <i className="fa-brands border-ccc fa-twitter bg-eee center-flex c-grey" />
            <input
              type="text"
              placeholder="Your Twitter"
              className="flex1 border-ccc w-full bg-eee p-10"
            />
          </div>
          <div className="between-flex mt-20">
            <i className="fa-brands border-ccc fa-facebook-f bg-eee center-flex c-grey" />
            <input
              type="text"
              placeholder="Your Facebook"
              className="flex1 border-ccc w-full bg-eee p-10"
            />
          </div>
          <div className="between-flex mt-20">
            <i className="fa-brands border-ccc fa-linkedin bg-eee center-flex c-grey" />
            <input
              type="text"
              placeholder="Your Linkedin"
              className="flex1 border-ccc w-full bg-eee p-10"
            />
          </div>
          <div className="between-flex mt-20">
            <i className="fa-brands border-ccc fa-youtube bg-eee center-flex c-grey" />
            <input
              type="text"
              placeholder="Your Youtube"
              className="flex1 border-ccc w-full bg-eee p-10"
            />
          </div>
        </div>
        <div className="bg-white p-20 rad-10">
          <h2 className="m-0">Widgets Control</h2>
          <p className="fs-14 c-grey mt-20">Show/Hide Widgets</p>
          <div className="m-10 mt-15 center-flex">
            <input defaultChecked="" type="checkbox" id="quick" />
            <label className="flex1 ml-5" htmlFor="quick">
              Quick Draft
            </label>
          </div>
          <div className="m-10 mt-15 center-flex">
            <input type="checkbox" id="Yearly Targets" />
            <label className="flex1 ml-5" htmlFor="Yearly Targets">
              Yearly Targets
            </label>
          </div>
          <div className="m-10 mt-15 center-flex">
            <input defaultChecked="" type="checkbox" id="Tickets Statistics" />
            <label className="flex1 ml-5" htmlFor="Tickets Statistics">
              Tickets Statistics
            </label>
          </div>
          <div className="m-10 mt-15 center-flex">
            <input type="checkbox" id="Latest News" />
            <label className="flex1 ml-5" htmlFor="Latest News">
              Latest News
            </label>
          </div>
          <div className="m-10 mt-15 center-flex">
            <input type="checkbox" id="Latest Tasks" />
            <label className="flex1 ml-5" htmlFor="Latest Tasks">
              Latest Tasks
            </label>
          </div>
          <div className="m-10 mt-15 center-flex">
            <input defaultChecked="" type="checkbox" id="Top Search Items" />
            <label className="flex1 ml-5" htmlFor="Top Search Items">
              Top Search Items
            </label>
          </div>
        </div>
        <div className="bg-white p-20 rad-10">
          <h2 className="m-0">Backup Manager</h2>
          <p className="fs-14 c-grey mt-20">Control Backup Time And Location</p>
          <div className="m-10 mt-15 center-flex">
            <input type="radio" name="option" id="Daily" />
            <label className="flex1 ml-5" htmlFor="Daily">
              Daily
            </label>
          </div>
          <div className="m-10 mt-15 center-flex">
            <input defaultChecked="" type="radio" name="option" id="Weekly" />
            <label className="flex1 ml-5" htmlFor="Weekly">
              Weekly
            </label>
          </div>
          <div className="m-10 mt-15 center-flex">
            <input type="radio" name="option" id="Monthly" />
            <label className="flex1 ml-5" htmlFor="Monthly">
              Monthly
            </label>
          </div>
          {/* dd */}
          <div className="backup between-flex gap-20 mt-20">
            <input type="radio" name="backup" id="the1" />
            <label
              className="w-full p-20 border-ccc rad-6 txt-c"
              htmlFor="the1"
            >
              <div>
                <i className="fa-solid fa-server d-block mb-10" />
                Megaman
              </div>
            </label>
            <input type="radio" defaultChecked="" name="backup" id="the2" />
            <label
              className="w-full p-20 border-ccc rad-6 txt-c"
              htmlFor="the2"
            >
              <div>
                <i className="fa-solid fa-server d-block mb-10" />
                Jafar
              </div>
            </label>
            <input type="radio" name="backup" id="the3" />
            <label
              className="w-full p-20 border-ccc rad-6 txt-c"
              htmlFor="the3"
            >
              <div>
                <i className="fa-solid fa-server d-block mb-10" />
                Sigma
              </div>
            </label>
          </div>
        </div>
      </div>
    </Slid>
  );
};
export default Settings;
