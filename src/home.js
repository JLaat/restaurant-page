export {createHomeTab};
const createHomeTab = () => {
    const mainContainer = document.getElementById('content');

    // Create container for home-tab content
    const homeTab = document.createElement("div");
    homeTab.className = "tab";
    homeTab.id = "Home";

    homeTab.style.display = "grid"; 
    

    const homeContainer = document.createElement("div");
    // Create restaurant image and description
    const restaurantImage = document.createElement("img");
    restaurantImage.src = "/pictures/buns.jpg";
    homeContainer.appendChild(restaurantImage);

    const restaurantDescription = document.createElement("p");
    restaurantDescription.textContent = "Bun's that will melt in your tongue, with a little Finnish twist";
    homeContainer.appendChild(restaurantDescription);

    // Append elements into DOM
    homeTab.appendChild(homeContainer);
    mainContainer.appendChild(homeTab);
}


