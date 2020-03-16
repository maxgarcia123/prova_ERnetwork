import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <body className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Prova ERnetwork 2020</h1>
        <div className="col-4">
        <Link to="/Cidades">
        <button type="button" className="btn btn-info col">Cadastro de cidades</button>
        </Link>
        <Link to="/Pessoas">
        <button type="button" className="btn btn-info col my-2">Cadastro de pessos</button>
        </Link>
        </div>
      </body>
    </div>
  );
}

export default Home;