// ORDER PAGE -button click part
const openModuleButton = document.querySelectorAll("[data-model-target]");
const closeModuleButton = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModuleButton.forEach((button) => {
  button.addEventListener("click", () => {
    const model = document.querySelector(button.dataset.modelTarget);
    openModule(model);
  });
});
//for closing overlay

overlay.addEventListener("click", () => {
  const models = document.querySelectorAll(".model.active");
  models.forEach((model) => {
    closeModule(model);
  });
});

closeModuleButton.forEach((button) => {
  button.addEventListener("click", () => {
    const model = button.closest(".model");
    closeModule(model);
  });
});
function openModule(model) {
  if (model == null) return;
  model.classList.add("active");
  overlay.classList.add("active");
}

function closeModule(model) {
  if (model == null) return;
  model.classList.remove("active");
  overlay.classList.remove("active");
}
//ORDER  PAGE CREATE
const bug = document.querySelector("#bug");

function rightClick() {
  bug.style.left = "0";
  const to = document.querySelector(".toggle-btn1");
  const tog = document.querySelector(".toggle-btn2");

  to.style.color = "white";
  tog.style.color = "black";
}
function leftClick() {
  bug.style.left = "46%";

  const to = document.querySelector(".toggle-btn1");
  const tog = document.querySelector(".toggle-btn2");

  to.style.color = "black";
  tog.style.color = "white";
}

// location part starts

const location_name = document.getElementById("location_name");
const geolocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position, error);
  } else {
    location_name.innerHTML = "Geolocation is not supported by this browser";
  }
};

function position(success) {
  const lat = success.coords.latitude;
  const long = success.coords.longitude;
  // location_name.innerHTML = "Latitude: " + lat + ", Longitude: " + long;

  jQuery.get(
    "https://ipinfo.io/json?token=ae463c3aa396cf",
    function (e) {
      console.log(e);
      console.log(e.country);
      console.log(e.city);
      location_name.innerHTML = e.city + e.postal + "," + e.country;
    },
    "jsonp"
  );
}
function error() {
  location_name.innerHTML = "Unable to retrieve your location";
}

// location part ends

//location picker part starts

//location picker part ends
