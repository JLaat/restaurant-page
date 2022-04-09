import { pageStartup } from "./webpage";
pageStartup();


const changeActiveTab = (tabId) => {
    const tabs = document.getElementsByClassName("tab");

    // Set every tabs display to none
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    // Set selected tab display to grid
    document.getElementById(tabId).style.display = "grid";
}

const setButtonBorders = () => {
    
}


// Set event listeners
const tabButtons = document.getElementsByClassName("button");
for(let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", () => {
        changeActiveTab(tabButtons[i].textContent);
       
    })
}