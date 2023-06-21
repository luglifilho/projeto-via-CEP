import RequestException from "./exceptions/request-exception.js";


export async function getJson(url) {
    try {
            const responde = await fetch(url);
            const jsonbody = await responde.json();
            return jsonbody;
    }
    catch (e) {
        throw new RequestException("Erro ao realizar requisição");
    }
}