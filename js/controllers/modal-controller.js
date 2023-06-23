function state(){
    this.container = null;
    this.btnClose = null;
}
export function init() {

    state.container = document.querySelector("#modal-contact");
    state.btnClose = document.querySelector("#modal-contact-btn")
    state.btnClose.addEventListener('click', handlebtnClose);
    state.container.addEventListener('click', handleContainerClick);


    console.log("Modal controller init");
}

export function showModal(){

    state.container.classList.add("active");

}

export function closeModal(){

    state.container.classList.remove("active");

}

function handlebtnClose(event){
    event.preventDefault();
    closeModal();
}

function handleContainerClick(event){
    if (event.target == this) {

        closeModal();
    }
    console.log(event.target);
}