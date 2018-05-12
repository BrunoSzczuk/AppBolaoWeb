import React, { Component } from "react";
import { consultarEquipes } from "../../services/funcoes/equipes";
class Equipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipes: []
        };
    }
    componentDidMount() {

        consultarEquipes().then(result => {
            this.setState({ equipes: result });
        });

    }
    render() {
        return (
            <div>
                <h2 className="mt-2">Equipes</h2>

                <div className="row">
                    <div className="col">
                        <div className="card mt-1">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th />
                                        <th>Sigla</th>
                                        <th>Nome Completo</th>
                                        <th>Últimas notícias</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.equipes.map((item, indice) => {
                                            return (
                                                <tr key={item.cdEquipe}>
                                                    <td><img src={item.brEquipe} alt="logo"/></td>
                                                    <td>{item.sgEquipe}</td>
                                                    <td>{item.nmEquipe}</td>
                                                    <td><a target="_blank" href={item.uriEquipe}>UOL</a></td>
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

export default Equipes;