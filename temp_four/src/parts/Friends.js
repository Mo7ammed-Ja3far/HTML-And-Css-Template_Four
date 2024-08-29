import Slid from "../comp/Slid";
import { Helmet } from "react-helmet-async";
const Friends = () => {
  return (
    <Slid>
      <Helmet>
        <title>Friends</title>
        <meta name="description" content="This is Your Friends" />
      </Helmet>
      <>
        <h1 className="p-relative m-20">Friends</h1>
        <div className="friends-page d-grid gap-20 m-20">
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Alice Johnson</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">Backend Developer</p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                63 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                19 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 34
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 12/04/2020</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Bob Smith</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">Frontend Developer</p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                78 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                14 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 21
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 03/08/2019</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Carol White</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">
                Full Stack Developer
              </p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                52 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                23 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 19
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 07/11/2022</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">David Brown</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">DevOps Engineer</p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                95 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                12 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 37
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 01/03/2018</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Eve Green</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">Mobile Developer</p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                61 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                18 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 29
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 10/12/2021</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Frank Black</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">System Architect</p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                89 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                21 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 16
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 05/06/2019</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Grace Hill</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">Data Scientist</p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                76 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                15 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 27
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 09/09/2020</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Henry Clark</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">
                Machine Learning Engineer
              </p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                54 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                13 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 23
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 08/07/2017</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Isla King</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">Security Analyst</p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                87 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                22 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 35
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 11/05/2022</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Jack Lee</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">Software Tester</p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                65 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                11 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 20
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 04/12/2020</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Alice Johnson</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">Backend Developer</p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                63 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                19 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 34
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 12/04/2020</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Bob Smith</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">Frontend Developer</p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                78 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                14 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 21
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 03/08/2019</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Carol White</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">
                Full Stack Developer
              </p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                52 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                23 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 19
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 07/11/2022</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">David Brown</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">DevOps Engineer</p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                95 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                12 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 37
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 01/03/2018</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Eve Green</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">Mobile Developer</p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                61 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                18 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 29
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 10/12/2021</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Frank Black</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">System Architect</p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                67 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                20 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 25
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 06/09/2017</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Grace Hill</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">Data Scientist</p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                76 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                15 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 27
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 09/09/2020</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Henry Clark</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">
                Machine Learning Engineer
              </p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                54 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                13 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 23
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 08/07/2017</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Isla King</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">Security Analyst</p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                87 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                22 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 35
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 11/05/2022</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">Jack Lee</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">Software Tester</p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                65 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                11 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 20
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 04/12/2020</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          <div className="p-relative p-20 bg-white rad-10">
            <div className="txt-c p-10 p-relative">
              <img
                src="media/friends/friend-01.jpg"
                className="img rad-half w-100 h-100"
                alt=""
              />
              <h4 className="m-0 m-10">John Doe</h4>
              <p className="c-grey m-0 mt-5 mb-10 fs-14">Software Engineer</p>
              <div className="contact d-flex">
                <i className="fa-solid fa-phone" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
            <div className="more p-relative">
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-face-smile fa-fw mr-10" />
                55 Friend
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-solid fa-code-commit fa-fw mr-10" />
                17 Projects
              </div>
              <div className="mt-10 fs-14">
                <i className="fa-regular fa-newspaper fa-fw mr-10" /> 28
                Articles
              </div>
              <div className="vip fw-bold">VIP</div>
            </div>
            <div className="mt-15 between-flex">
              <span className="c-grey fs-14 flex1">Joined 15/02/2023</span>
              <span className="btn-shape bg-blue fs-15 c-white">Profile</span>
              <span id="remove" className="btn-shape bg-red ml-5 fs-15 c-white">
                Remove
              </span>
            </div>
          </div>
          {/* Repeat similar blocks 20 more times with varying names, job titles, friend counts, project counts, article counts, and join dates */}
        </div>
      </>
    </Slid>
  );
};
export default Friends;
