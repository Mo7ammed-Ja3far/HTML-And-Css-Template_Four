const remove = document.querySelectorAll("#remove");
const bell = document.querySelector("#bell");
const head = document.querySelector(".head");
const mainImg = document.querySelector(".notification img");
remove.forEach((ele) => {
  ele.style.userSelector = "none";
  ele.addEventListener("click", () => {
    ele.parentElement.parentElement.remove();
  });
});
bell.onclick = function () {
  this.classList.remove("active");
  if (document.getElementById("test") != null) {
    document.getElementById("test").remove();
  } else {
    let div = document.createElement("div");
    div.id = "test";

    div.style.cssText =
      "position: absolute; height: 200px; width: 50% ; background-color: #ccc;top: 100%;right: 0; z-index:1000";

    head.append(div);
  }
};
mainImg.onclick = function () {
  if (document.getElementById("overlay") != null) {
    document.getElementById("overlay").remove();
  } else {
    let overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.cssText =
      " position: fixed;width: 100%;z-index:100000 ;background-color: rgba(0, 0, 0, 0.508);top: 0;left: 0;height: 100%;";
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = this.src;
    img.style.width = "95%";
    div.innerHTML = "<b><i>Name:</i> </b>Mohamed Jafar";
    div.prepend(img);

    div.style.cssText =
      "position: absolute;width: 50%;background-color: rgba(255, 255, 255, 0.8999);top: 50%;left: 50%;transform: translate(-50%, -50%);padding: 20px;";
    overlay.append(div);
    document.body.prepend(overlay);
    overlay.onclick = function () {
      overlay.remove();
    };
  }
};
