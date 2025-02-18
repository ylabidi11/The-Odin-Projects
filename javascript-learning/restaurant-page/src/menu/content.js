import pizza from '/assets/pizza.png';

const h1Menu = document.createElement("h1");
h1Menu.innerText = "Here is our brilliant menu: ";

const divMenu = document.createElement("div");

const generateElement = (div) => {
    div.innerHTML = "";

    for (let i = 0; i < 8; i++) {
        let element = document.createElement("div");

        let icon = document.createElement("img");
        icon.src = pizza;

        let h3 = document.createElement("h3");
        h3.innerText = `Iconic Pizza #${i + 1}`;

        let description = document.createElement("p");
        description.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi";

        element.appendChild(icon);
        element.appendChild(h3);
        element.appendChild(description);

        div.appendChild(element);
    }
}

export { divMenu, generateElement };