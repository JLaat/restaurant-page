export {pageStartup};
import { createHomeTab } from "./home";
import { createMenuTab } from "./menu";
import { createContactTab } from "./contact";
const pageStartup = () => {
  const headerContainer = document.getElementById("header");

  // Create header for page
  
    // Create tab buttons 
    const tabContainer = document.createElement("div");
    tabContainer.className = "tabContainer";

    const btnHome = document.createElement("button");
    btnHome.textContent = "Home";
    btnHome.className = "button";

    const btnMenu = document.createElement("button");
    btnMenu.textContent = "Menu";
    btnMenu.className = "button";

    const btnContact = document.createElement("button");
    btnContact.textContent = "Contact";
    btnContact.className = "button";

    tabContainer.appendChild(btnHome);
    tabContainer.appendChild(btnMenu);
    tabContainer.appendChild(btnContact);

    headerContainer.appendChild(tabContainer);
    

  createHomeTab();
  createMenuTab();
  createContactTab();
  

  // Main container styling
  headerContainer.style.display = "grid";
  headerContainer.style.textAlign = "center";
  headerContainer.style.justifyContent = "flex-end";

}




