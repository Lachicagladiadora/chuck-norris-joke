const bodyElement = document.getElementById("body");
const containElement = document.getElementById("contain");
const textElement = document.getElementById("phrase");
const imgElement = document.getElementById("chuck-norris");
const dialogElement = document.getElementById("dialog");

const chuckNorrisUrl = "https://api.chucknorris.io/jokes/random";

//solicitud GET utilizando la API fetch
textElement.remove;
const charge = "...";
textElement.innerText = charge;

const joke = () => {
  fetch(chuckNorrisUrl)
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      console.log(json.value);
      return !json.value
        ? (textElement.innerText = charge)
        : (textElement.innerText = json.value);
    });
};
joke();

const reload = () => {
  // joke();
  location.reload();
};

const messageEnter = (event) => {
  if (event.keyCode == 13 || event.key === "Enter") {
    event.preventDefault();
    imgElement.click() && dialogElement.click();
  }
  // joke();
  reload();
};

const messageSpace = (e) => {
  if (e.keyCode == 32 || e.key === "Space") {
    e.preventDefault();
    imgElement.click() && dialogElement.click();
  }
  // joke();
  reload();
};

imgElement.addEventListener("click", reload);
dialogElement.addEventListener("click", reload);
window.addEventListener("keyup", messageEnter);
window.addEventListener("keyup", messageSpace);
