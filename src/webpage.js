export {pageStartup};
import { createHomeTab } from "./home";
const pageStartup = () => {
  const mainContainer = document.getElementById("content");

  // Create header for page
  const header = document.createElement("div");
  header.className = "header";

  const companyName = document.createElement("h1");
  companyName.textContent = "Pulla Boys";
    // Create tab buttons 
    const tabContainer = document.createElement("div");
    tabContainer.style.display = "flex";
    tabContainer.style.justifyContent = "center";

    const btnHome = document.createElement("button");
    btnHome.textContent = "Home";
    const btnMenu = document.createElement("button");
    btnMenu.textContent = "Menu";
    const btnContact = document.createElement("button");
    btnContact.textContent = "Contact";

    tabContainer.appendChild(btnHome);
    tabContainer.appendChild(btnMenu);
    tabContainer.appendChild(btnContact);

    header.appendChild(companyName);
    header.appendChild(tabContainer);
    mainContainer.appendChild(header);
    


  createHomeTab();

  // Main container styling
  mainContainer.style.display = "grid";
  mainContainer.style.textAlign = "center";
  mainContainer.style.justifyContent = "center";
}




