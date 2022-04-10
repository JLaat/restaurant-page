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
    const headerKaneliPulla = document.createElement("h2");
    headerKaneliPulla.textContent = "Kanelipulla";
    const txtKaneliPulla = document.createElement("h3");
    txtKaneliPulla.textContent = "$3";
    kaneliPulla.appendChild(headerKaneliPulla);
    kaneliPulla.appendChild(txtKaneliPulla);


    const voiSilmaPulla = document.createElement("div");
    const headerVoisilmapulla = document.createElement("h2");
    headerVoisilmapulla.textContent = "Voisilmäpulla";
    const txtVoisilmapulla = document.createElement("h3");
    txtVoisilmapulla.textContent = "$3.5";
    voiSilmaPulla.appendChild(headerVoisilmapulla);
    voiSilmaPulla.appendChild(txtVoisilmapulla);

    const korvapuusti = document.createElement("div");
    const headerKorvapuusti = document.createElement("h2");
    headerKorvapuusti.textContent = "Korvapuusti";
    const txtKorvapuusti = document.createElement("h3");
    txtKorvapuusti.textContent = "$3.5";
    korvapuusti.appendChild(headerKorvapuusti);
    korvapuusti.appendChild(txtKorvapuusti);

    const karjalanPiirakka = document.createElement("div");
    const headerKarjalanpiirakka = document.createElement("h2");
    headerKarjalanpiirakka.textContent = "Karjalanpiirakka";
    const txtKarjalanpiirakka = document.createElement("h3");
    txtKarjalanpiirakka.textContent = "$2.5";
    karjalanPiirakka.appendChild(headerKarjalanpiirakka);
    karjalanPiirakka.appendChild(txtKarjalanpiirakka);


    menuTab.appendChild(kaneliPulla);
    menuTab.appendChild(voiSilmaPulla);
    menuTab.appendChild(korvapuusti);
    menuTab.appendChild(karjalanPiirakka);

    mainContainer.appendChild(menuTab);

}