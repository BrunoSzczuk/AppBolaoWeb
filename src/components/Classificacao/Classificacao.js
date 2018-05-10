import React, { Component } from "react";
import { consultarClassificacao } from "../../services/classificacao";

class Classificacao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classificacao: []
        };
    }
    componentDidMount() {

        consultarClassificacao().then(result => {
            this.setState({ classificacao: result });
        });

    }
    render() {
        return (
            <div>
                <h2 className="mt-2">Classificacao</h2>

                <div className="row">
                    <div className="col">
                        <div className="card mt-1">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Posicao </th>
                                        <th/>
                                        <th>Pontos</th>
                                        <th>GP</th>
                                        <th>Sigla</th>

                                        <th>Nome</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.classificacao.map((item, indice) => {
                                            return (
                                                <tr key={item.equipe.cdEquipe}>
                                                    <td>{item.pos}</td>
                                                    <td><img src={item.equipe.brEquipe} alt="logo"/></td>
                                                    <td>{item.pontosGols.qtTotal}</td>
                                                    <td>{item.golsPro}</td>
                                                    <td>{item.equipe.sgEquipe}</td>
                                                    <td class="text-uppercase">{item.equipe.nmSlug}</td>
                                                    
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Classificacao;