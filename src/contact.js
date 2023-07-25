import joshImg from "./assets/images/josh.jpeg";
import fredImg  from "./assets/images/fred.jpeg";
import mandyImg from "./assets/images/mandy.jpeg";

export default function renderContact() {
    const element = document.getElementById("content");
    content.innerHTML = "";
    
    const items = [
        {
            img: fredImg,
            name: "Fred Flintstone",
            title: "Founder",
            phone: "555-555-5555",
        },
        {
            img: mandyImg,
            name: "Mandy Flintstone",
            title: "Commander in chief",
            phone: "555-555-5551",
        },
        {
            img: joshImg,
            name: "Alfred Flintstone",
            title: "Creative director amd CEO",
            phone: "555-555-5550",
        },
    ];
    for (let i = 0; i < items.length; i++) {
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
            <h3>${items[i].name}</h3>
            <div class="item-image-container">
            <img src="${items[i].img}" alt="${items[i].name}" class="item-image">
            </div>
            <p>${items[i].title}</p>
            <p>${items[i].phone}</p>
        `;
        content.appendChild(item);
    };
};
