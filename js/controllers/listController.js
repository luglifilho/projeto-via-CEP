
function State(){

    this.listSection = null;
}

const state = new State();

export function init(){
    state.listSection = document.querySelector("#list-section");
}

export function addcard(adress) {
     const card = createCard(adress);
     state.listSection.appendChild(card);
}

function createCard(address){
    const div = document.createElement("div");
    div.classList.add("card-list-item");

    const h3 = document.createElement("h3");
    h3.innerHTML = address.city;

    const line = document.createElement("p");
    line.classList.add("adress-line");
    line.innerHTML = `${address.street}, ${address.number}`;

    const cep = document.createElement("p");
    cep.classList.add("adress-cep");
    cep.innerHTML = address.cep;

    div.appendChild(h3);
    div.appendChild(line);
    div.appendChild(cep);

    return div;

}


