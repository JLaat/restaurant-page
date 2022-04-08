export {createContactTab};
const createContactTab = () => {
const mainContainer = document.getElementById('content');

// Create contact tab
const contactTab = document.createElement("div");
contactTab.id = "Contact";
contactTab.className = "tab";

contactTab.style.gridTemplateColumns = "1fr";
contactTab.style.gridTemplateRows = "repeat(2, 1fr) 0.2fr";

// Address section
const addressContainer = document.createElement("div");

const addressHeader = document.createElement("h1");
addressHeader.textContent = "Visit us";

const addressParagraph = document.createElement("h3");
addressParagraph.textContent = "Karjalankatu 103 Joensuu";

addressContainer.appendChild(addressHeader);
addressContainer.appendChild(addressParagraph);


// Contact section
const contactContainer = document.createElement("div");

const contactHeader = document.createElement("h1");
contactHeader.textContent = "Contact";

const email = document.createElement("h3");
email.textContent = "Email: contact@pullaboys.com";

const phone = document.createElement("h3");
phone.textContent = "Phone: +3584466771";

contactContainer.appendChild(contactHeader);
contactContainer.appendChild(email);
contactContainer.appendChild(phone);


// Append into DOM
contactTab.appendChild(addressContainer);
contactTab.appendChild(contactContainer);
mainContainer.appendChild(contactTab);

};