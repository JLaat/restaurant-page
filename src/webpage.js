export {pageStartup};
import { createHomeTab } from "./home";
import { createMenuTab } from "./menu";
import { createContactTab } from "./contact";
const pageStartup = () => {
  const mainContainer = document.getElementById("content");

  // Create header for page
  const header = document.createElement("div");
  header.className = "header";

  const companyName = document.createElement("h1");
  companyName.textContent = "Pulla Boys";
    // Create tab buttons 
    const tabContainer = document.createElement("div");
    tabContainer.className = "tabContainer";
    tabContainer.style.display = "flex";
    tabContainer.style.justifyContent = "center";

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

    header.appendChild(companyName);
    header.appendChild(tabContainer);
    mainContainer.appendChild(header);
    

  createHomeTab();
  createMenuTab();
  createContactTab();
  

  // Main container styling
  mainContainer.style.display = "grid";
  mainContainer.style.textAlign = "center";
  mainContainer.style.justifyContent = "center";
}




