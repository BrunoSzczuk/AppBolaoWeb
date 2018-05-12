import { URL_API } from "./base";

export function consultarEquipes() {
    return  fetch(`${URL_API}/equipeList`)
        .then(result => { return result.json() });
}

export function consultarEquipe(callback, codigo) {
    fetch(`${URL_API}/equipe/` + codigo)
        .then(resultado => resultado.json().then(callback)).then(result => {
            console.log(result);
        });
}