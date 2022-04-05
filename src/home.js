export {createHomeTab};
const createHomeTab = () => {
    const mainContainer = document.getElementById('content');

    // Create container for home-tab content
    const homeTab = document.createElement("div");
    homeTab.className = "tab";
    homeTab.style.display = "grid";


    // Create restaurant image and description
    const restaurantImage = document.createElement("img");
    restaurantImage.src = "/pictures/buns.jpg";

    const restaurantDescription = document.createElement("p");
    restaurantDescription.textContent = "Bun's that will melt in your tongue";

    // Append elements into DOM
    homeTab.appendChild(restaurantImage);
    homeTab.appendChild(restaurantDescription);
    mainContainer.appendChild(homeTab);
}


