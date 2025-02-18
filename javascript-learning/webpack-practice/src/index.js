import "./styles.css";
import { greeting } from "./greeting.js";
import madeMe from "./pfp.jpg";

const image = document.createElement("img");
image.src = madeMe;
   
document.body.appendChild(image);

console.log(greeting);