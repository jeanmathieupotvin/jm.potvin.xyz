/**
 * =============================================================================
 * Methods
 * =============================================================================
 */

// Function to toggle cool mode on and off.
Main.prototype.toggleCoolMode = () => {
    // Get HTML elements.
    const img    = document.getElementById("jm-img");
    const input  = document.getElementById("sw-cool-mode");
    const labels = document.getElementsByClassName("sw-label");
    // Toggle active/inactive classes of labels.
    labels[0].classList.toggle("sw-label-active");
    labels[1].classList.toggle("sw-label-active");
    // Update value attribute of input.
    input.value = (input.value === "off") ? "on" : "off";
    // Update src attribute of img.
    img.src = (input.value === "on") ? "/images/me-cool-375x375.jpg" : "/images/me-375x375.jpg";
}

/**
 * =============================================================================
 * Events
 * =============================================================================
 */

// Listen for changes on cool mode's switch. Toggle mode on and off.
document.getElementById("sw-cool-mode")
    .addEventListener("change", () => main.toggleCoolMode());
