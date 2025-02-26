import { imageDiv, h1Home } from "./home/content.js";
import { h1About, pAbout } from "./about/content.js";
import { divMenu, generateElement } from "./menu/content.js";
import './styles.css';

const homePage = () => {
    mainDiv.innerHTML = "";
    mainDiv.appendChild(h1Home);
    mainDiv.appendChild(imageDiv);
}

const aboutPage = () => {
    mainDiv.innerHTML = "";
    mainDiv.appendChild(h1About);
    mainDiv.appendChild(pAbout);
}
mainDiv.delete
const menuPage = () => {
    mainDiv.innerHTML = "";
    generateElement(divMenu);
    mainDiv.appendChild(divMenu);
}

const mainDiv = document.getElementById("content");

const homeButton = document.getElementById("home");
homeButton.addEventListener("click", homePage);

const menuButton = document.getElementById("menu");
menuButton.addEventListener("click", menuPage);

const aboutButton = document.getElementById("about");
aboutButton.addEventListener("click", aboutPage);

homeButton.click();