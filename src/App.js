import React, { Component } from 'react';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';
import Consultas from './components/Consultas/Consultas';
import Faturamento from './components/Faturamento/Faturamento';
import { Switch, Route } from 'react-router-dom';
import Equipes from './components/Equipes/Equipes';
import Classificacao from './components/Classificacao/Classificacao';

class App extends Component {
  render() {
    return (
      <div> 
        <MenuSuperior/>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Switch>
                <Route path="/" exact component={Equipes} />                              
                <Route path="/classificacao" component={Classificacao} />
                <Route path="/consultas" component={Consultas} />
                <Route path="/faturamento" component={Faturamento} />
                <Route path="/resumo" component={Resumo} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
