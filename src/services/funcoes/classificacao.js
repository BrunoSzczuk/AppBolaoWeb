import { URL_API } from "./base";

export function consultarClassificacao() {
    return  fetch(`${URL_API}/classificacao`)
        .then(result => { return result.json() });
}