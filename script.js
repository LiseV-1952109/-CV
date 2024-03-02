
class Card extends HTMLElement {
    constructor() {
        super();    // Always call super first
    }
    
    connectedCallback() {
        // Shadow DOM to attach elements to
        const shadow = this.attachShadow({ mode: "open" });
        
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("style", "width: 18rem;");
        
        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        
        const cardTitle = document.createElement("h5");
        cardTitle.setAttribute("class", "card-title");
        const title = this.getAttribute("title");   // Get attribute from component
        cardTitle.textContent = title;
        
        const cardText = document.createElement("p");
        cardText.setAttribute("class", "card-text");
        const text = this.getAttribute("text");     // Get attribute form component
        cardText.textContent = text;
        
        const cardLink = document.createElement("a");
        cardLink.setAttribute("class", "card-link");
        cardLink.innerText = "See info";
        const link = this.getAttribute("href");     // Get attribute from component
        cardLink.setAttribute("href", link);
        
        // Bootstrap needed for all components
        const bootstrap = document.createElement("link");
        bootstrap.setAttribute("rel", "stylesheet");
        bootstrap.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");
        bootstrap.setAttribute("integrity", "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH");
        bootstrap.setAttribute("crossorigin", "anonymous");

        shadow.appendChild(bootstrap);
        shadow.appendChild(card);
        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardLink);
    }
}

customElements.define("my-card", Card);


const cards = document.getElementById("cards");
info["classes"].forEach((classInfo) => {
    const card = document.createElement("my-card");
    card.setAttribute("title", classInfo["title"]);
    card.setAttribute("text", classInfo["text"]);
    card.setAttribute("href", classInfo["url"]);
    cards.appendChild(card);
})