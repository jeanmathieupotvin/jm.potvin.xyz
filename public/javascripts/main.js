/**
 * =============================================================================
 * Instantiation
 * =============================================================================
 */

const main = Main();

/**
 * =============================================================================
 * Class Main
 * =============================================================================
 */

// Constructor function for class Main. All features are attached
// to its prototype.
function Main() {
    return Object.create(Main.prototype);
}

// Update full and mobile nav menus with current active route. 
Main.prototype.updateMenus = () => {
    // Get standard route safely.
    const route = document.querySelector("meta[name='route']").content;
    // Select / color menu items.
    if (route !== undefined) {
        // Get menu elements.
        const elems = document.getElementsByClassName(route);
        // Make buttons active in header and mobile nav menus.
        elems[0].classList.add("active");
        elems[1].classList.add("active");
    }
}

// Toggle mobile menu.
Main.prototype.toggleMobileMenu = () => {
    // Get elements.
    const nav     = document.getElementsByClassName("mobile-menu")[0];
    const btnIcon = document.getElementById("mobile-nav-btn").childNodes[1];
    // Special effect for index page. We add a background to its header
    // when menu opens, just like we would on other standard pages.
    if (document.querySelector("meta[name='route']").content === "home") {
        document.getElementsByTagName("header")[0].classList.toggle("head-bg");
    }
    // Toggle button's contents.
    // If menu is opened, then a close icon is showed.
    // Else, a regular hamburger menu icon is showed.
    btnIcon.classList.toggle("fa-bars");
    btnIcon.classList.toggle("fa-times");
    // Toggle display of menu.
    nav.style.width = (nav.style.width === "") ? "250px" : "";
    // Toggle overflow on body. Hidden when menu is opened.
    document.documentElement.classList.toggle("noflow");
}

// Add bg to header bar when route is not index.
Main.prototype.updateHeader = () => {
    const route = document.querySelector("meta[name='route']").content;
    if (route !== "home") {
        // Add background to header.
        document.getElementsByTagName("header")[0].classList.add("head-bg");
    }
}

/**
 * =============================================================================
 * Events
 * =============================================================================
 */

// Listen for DOM parsing.
document.addEventListener("DOMContentLoaded", () => {
    main.updateMenus();
    main.updateHeader();
});

// Listen for clicks on button that opens and closes mobile menu.
document.getElementById("mobile-nav-btn").addEventListener("click", () => {
    main.toggleMobileMenu()
});
