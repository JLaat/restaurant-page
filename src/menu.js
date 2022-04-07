export {createMenuTab};
const createMenuTab = () => {
    const mainContainer = document.getElementById('content');

    // Create container for menu tab
    const menuTab = document.createElement('div');
    menuTab.id = "Menu";
    menuTab.className = "tab";
    
    menuTab.style.gridTemplateRows = "repeat(4, 1fr)";

    // Menu items
    const kaneliPulla = document.createElement("div");
    const imgKaneliPulla = document.createElement("img");
    imgKaneliPulla.src = "/pictures/kanelipulla.jpg";
    const txtKaneliPulla = document.createElement("p");
    txtKaneliPulla.textContent = "Kanelipulla";
    kaneliPulla.appendChild(imgKaneliPulla);
    kaneliPulla.appendChild(txtKaneliPulla);


    const voiSilmaPulla = document.createElement("div");
    const imgVoiSilmaPulla = document.createElement("img");
    imgVoiSilmaPulla.src = "/pictures/voipulla.jpg";
    const txtVoisilmapulla = document.createElement("p");
    txtVoisilmapulla.textContent = "Voisilmäpulla";
    voiSilmaPulla.appendChild(imgVoiSilmaPulla);
    voiSilmaPulla.appendChild(txtVoisilmapulla);

    const korvapuusti = document.createElement("div");
    const imgKorvaPuusti = document.createElement("img");
    imgKorvaPuusti.src = "/pictures/korvapuusti.jpg";
    const txtKorvapuusti = document.createElement("p");
    txtKorvapuusti.textContent = "Korvapuusti";
    korvapuusti.appendChild(imgKorvaPuusti);
    korvapuusti.appendChild(txtKorvapuusti);

    const karjalanPiirakka = document.createElement("div");
    const imgKarjalanPiirakka = document.createElement("img");
    imgKarjalanPiirakka.src = "/pictures/karjalanpiirakka11.jpg";
    const txtKarjalanpiirakka = document.createElement("p");
    txtKarjalanpiirakka.textContent = "Karjalanpiirakka";
    karjalanPiirakka.appendChild(imgKarjalanPiirakka);
    karjalanPiirakka.appendChild(txtKarjalanpiirakka);


    menuTab.appendChild(kaneliPulla);
    menuTab.appendChild(voiSilmaPulla);
    menuTab.appendChild(korvapuusti);
    menuTab.appendChild(karjalanPiirakka);

    mainContainer.appendChild(menuTab);

}