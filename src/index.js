import './style.css';
import renderMenu from './menu.js';
import renderHome from './home.js';
import renderContact from './contact.js';

document.addEventListener("DOMContentLoaded", function () {

    const header = document.createElement("div");
    header.classList.add("header");

    const btnHome = document.createElement('div');
    const btnMenu = document.createElement('div');
    const btnContact = document.createElement('div');

    btnHome.innerHTML = 'Check home';
    btnMenu.innerHTML = 'Check menu';
    btnContact.innerHTML = 'Check contact';

    btnHome.onclick = () => {
        renderHome();
        activeHome();
    };
    btnMenu.onclick = () => {
        renderMenu();
        activeMenu();
    };
    btnContact.onclick = () => {
        renderContact();
        activeContact();
    };

    header.appendChild(btnHome);
    header.appendChild(btnMenu);
    header.appendChild(btnContact);

    document.body.appendChild(header);

    const content = document.createElement("div");
    content.id = "content";
    document.body.appendChild(content);


    const activeHome = () => {
        btnHome.classList.add("active");
        btnMenu.classList.remove("active");
        btnContact.classList.remove("active");
    };

    const activeMenu = () => {
        btnHome.classList.remove("active");
        btnMenu.classList.add("active");
        btnContact.classList.remove("active");
    };

    const activeContact = () => {
        btnHome.classList.remove("active");
        btnMenu.classList.remove("active");
        btnContact.classList.add("active");
    };

    renderHome();
    activeHome();
    
});