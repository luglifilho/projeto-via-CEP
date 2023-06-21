import * as requestService from '../services/request-service.js';
import Address from '../models/Address.js';

export async function findByCep(cep){

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const result = await requestService.getJson(url);

    const address = new Address(result.cep, result.logradouro, null, result.localidade);
    return address;

}

export function getErrors(address) {
    const errors = {};

    if (!address.cep || address.cep == "") {
        errors.cep = "Campo Requerido";
    }
    if (!address.number || address.number == ""){
        errors.number = "Campo Requerido";
    }

    return errors;
}