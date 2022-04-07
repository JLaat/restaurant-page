import { pageStartup } from "./webpage";
pageStartup();


const changeActiveTab = (tabId) => {
    const tabs = document.getElementsByClassName("tab");

    for(let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    document.getElementById(tabId).style.display = "grid";
}

const tabButtons = document.getElementsByClassName("button");

for(let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", () => {
        changeActiveTab(tabButtons[i].textContent);
    })
}