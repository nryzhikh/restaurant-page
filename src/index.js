document.addEventListener("DOMContentLoaded", function () {
    const restaurantImage = "restaurant-image.jpg";
    const restaurantName = "Our Restaurant";
    const restaurantDescription = `At ${restaurantName}, we believe in serving not just food but a wonderful experience. 
        Our chefs are dedicated to preparing dishes that delight your taste buds and leave you wanting more. 
        The warm and inviting ambiance of our restaurant sets the perfect mood for a memorable dining experience. 
        Whether you're celebrating a special occasion or just looking for a great meal, we have something for everyone. 
        Come and join us for an unforgettable culinary journey!`;

    const header = document.createElement("header");
    header.innerHTML = `<h1>Welcome to ${restaurantName}</h1>`;
    document.body.appendChild(header);

    const main = document.createElement("main");
    main.innerHTML = `
        <img src="${restaurantImage}" alt="Restaurant Interior" width ="400" height = "500">
        <p>${restaurantDescription}</p>
    `;
    document.body.appendChild(main);
});
