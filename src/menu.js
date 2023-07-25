import bazookaDoner from "./assets/images/bazuka-doner.jpeg";
import classicDoner from "./assets/images/classic-doner.jpeg";
import donerBurger from "./assets/images/doner-burger.jpeg";

export default function renderMenu() {
    const element = document.getElementById("content");
    content.innerHTML = "";
    
    const items = [
        {
            img: bazookaDoner,
            name: "Bazuka Doner",
            description: "A delicious doner with a bazuka",
            price: "$10.99"
        },
        {
            img: classicDoner,
            name: "Classic Doner",
            description: "A delicious doner with a classic",
            price: "$9.99"
        },
        {
            img: donerBurger,
            name: "Doner Burger",
            description: "A delicious doner burger",
            price: "$8.99"
        }
    ];
    for (let i = 0; i < items.length; i++) {
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
            <h3>${items[i].name}</h3>
            <div class="item-image-container">
            <img src="${items[i].img}" alt="${items[i].name}" class="item-image">
            </div>
            <p>${items[i].description}</p>
            <p>${items[i].price}</p>
        `;
        content.appendChild(item);
    };
};
