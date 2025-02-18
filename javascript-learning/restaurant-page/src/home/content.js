import logo from "/assets/logo.jpg"
import "./styles.css"

const h1Home = document.createElement("h1");
h1Home.innerHTML = "Hello and welcome to my new restaurant!!!! This restaurant is top tier amazing my friend!!"

const imageDiv = document.createElement("div");
imageDiv.id = "div-image";

const image = document.createElement("img");
image.id = "main-logo"
image.src = logo;
imageDiv.appendChild(image);

export { imageDiv, h1Home };