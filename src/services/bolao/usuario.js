import { URL_API } from "./base";

export function consultarUsuario(codigo) {
    return  fetch(`${URL_API}/usuario/`+codigo)
        .then(result => { return result.json() });
}