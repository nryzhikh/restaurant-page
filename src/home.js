import restaurantImg from './assets/images/restaurant-exterior.jpg';

export default function renderHome() {
    const element = document.getElementById("content");
    content.innerHTML = "";
    
    const items = [
        {
            img: restaurantImg,
            name: "EXPLOSIVE DONER",
            description: `At Explosive Doner, we believe in serving not just food but a wonderful experience. 
            Our chefs are dedicated to preparing dishes that delight your taste buds and leave you wanting more. 
            The warm and inviting ambiance of our restaurant sets the perfect mood for a memorable dining experience. 
            Whether you're celebrating a special occasion or just looking for a great meal, we have something for everyone. 
            Come and join us for an unforgettable culinary journey!`
        }
    ];
    for (let i = 0; i < items.length; i++) {
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
            <h3>${items[i].name}</h3>
            <div class="item-image-container">
            <img src="${items[i].img}" alt="${items[i].name}" class="item-image">
            </div
            <p>${items[i].description}</p>
        `;
        content.appendChild(item);
    };
};
