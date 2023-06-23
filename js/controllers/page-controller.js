import * as modalController from '../controllers/modal-controller.js';


export function init() {

    console.log("Page controller init");

    const contactLink = document.querySelector(".contact-link");
    contactLink.addEventListener('click', handleContactLink);


}

function handleContactLink(event) {
    event.preventDefault();
    modalController.showModal();

}