export {createHomeTab};
const createHomeTab = () => {
    const mainContainer = document.getElementById('content');

    // Create container for home-tab content
    const homeTab = document.createElement("div");
    homeTab.className = "tab";
    homeTab.id = "Home";

    homeTab.style.display = "grid"; 
    
    // Create restaurant image and description
const restaurantName = document.createElement("h1");
restaurantName.textContent = "Pullaboys";


    const restaurantDescription = document.createElement("h2");
    restaurantDescription.className = "restaurantDescription";
    restaurantDescription.textContent = "Les bunny boys ont les meilleurs brioches du monde, venez sur place ! Brioches à la cannelle, bâtonnets d'oreille ou simplement café, vous décidez.";
    

    // Append elements into DOM
    homeTab.appendChild(restaurantName);
    homeTab.appendChild(restaurantDescription);
    mainContainer.appendChild(homeTab);
}


