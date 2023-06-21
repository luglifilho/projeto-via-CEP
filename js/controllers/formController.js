import Address from "../models/Address.js";
import * as addressService from '../services/address-service.js';

function State(){

    this.address = new Address;
    
    this.btnSave = null;
    this.btnClear = null;

    this.inputCep = null;
    this.inputStreet = null;
    this.inputNumber = null;
    this.inputCity = null;

    this.errorCep = null;
    this.errorNumber = null;
}

const state = new State();


export function init() {

   state.inputCep = document.forms.newAdress.cep;
   state.inputStreet = document.forms.newAdress.street;
   state.inputNumber = document.forms.newAdress.number;
   state.inputCity = document.forms.newAdress.city;

   state.btnSave = document.forms.newAdress.btnSave;
   state.btnClear = document.forms.newAdress.btnClear;

   state.errorCep = document.querySelector('[data-error="cep"]');
   state.errorNumber = document.querySelector('[data-error="number"]');

   state.inputNumber.addEventListener('change', handleInputNumber);
   state.inputNumber.addEventListener('keyup', handleInputNumberKeyup);

   state.btnClear.addEventListener('click', handleBtnClear);
   state.btnSave.addEventListener('click', handleBtnSave); 

   state.inputCep.addEventListener('change', handleinputCep);

   

     //   setFormError("cep", "ERRO CEP");
     //   setFormError("number", "ERRO NUMBER");

      //  console.log(state);
}

function handleInputNumberKeyup(event) {
    state.address.number = event.target.value;    
}

async function handleinputCep(event){
    const cep = event.target.value;

    try {
        const address = await addressService.findByCep(cep);

            state.inputCity.value = address.city;
            state.inputStreet.value = address.street;
            state.address =address;

            setFormError("cep", "");
            state.inputNumber.focus();
        
    } catch (e) {
        setFormError("cep", "Infome um CEP válido");        
    }            
   // console.log(address);
}

async function handleBtnSave(event){
    event.preventDefault();
    //const result = await requestService.getJson('https://viacep.com.br/ws/01001000/json/');
    console.log(state.address);
}

function handleInputNumber(event) {
    if (event.target.value == "") {
        setFormError("number", "Campo Obrigatório");        
    }
    else {
        setFormError("number", " ");
    }
}

function setFormError(key, value) {
    const element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML = value;
}

function handleBtnClear(event) {
    event.preventDefault();
    clearForm();
}
function clearForm (){
    state.inputCep.value = "";
    state.inputCity.value = "";
    state.inputNumber.value = "";
    state.inputStreet.value = "";

    setFormError("cep", "");
    setFormError("number", "");

    state.inputCep.focus();
}