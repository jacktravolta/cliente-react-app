/*
npm install -g create-react-app
aclearnsi-colors
caller-callsite
*/
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import RepoList from './Components/RepoList';
//import EstatictisPage from './Components/EstatictisPage';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      repos: [],
      loading: true
    };
  } 
  componentDidMount() {
    
    this.performSearch();
    this.performSearch2();
    
  }
  performSearch2 = (query) => {

    console.log("ini2");
    const url = "http://localhost:3001/statistics";
    let estaHtml;
    axios.get(url)
    .then(response => {
        this.setState({
          reposEsta: response.data,
        });
        
         estaHtml =  `<div style='display: none' id='repo-list-estadisticasdiv' name='repo-list-estadisticasdiv'>`;
         response.data.forEach(el => 
          estaHtml = estaHtml + `
          <ul className="repo-list-estadisticas">
            <A name="estadisticasDiv"></A>
            <h1>Palabras buscadas : `+ el.tabs +`</h1><p></p>
            <p></p>
            <p></p>
            <b>Cantidad de busquedas : `+ el.contador +`</b>
            <hr></hr>
            <p></p><p></p><p></p>
          </ul> 
          `
        );
        estaHtml = estaHtml + `</div>`;
        document.getElementById("estadisticas").innerHTML = estaHtml;

      })
      .catch(error => {
        console.log('Error al obtener datos', error);
      });
   }
  performSearch = (query) => {

    console.log("ini");
    const url = "http://localhost:3001/search";
    let vsearch = document.getElementById("search").value;
    console.log(vsearch);
    const data = { 'keyword' : vsearch }
    const headers = {"Content-Type": "application/json"}
    axios.post(url, data, headers)
    .then(response => {
        this.setState({
          query: query,
          repos: response.data,
          loading: false,
        });

      })
      .catch(error => {
        console.log('Error al obtener datos', error);
      });
   }
  
  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Buscador de Productos</h1>
            <SearchForm onSearch={this.performSearch} />  
            
          </div>   
        </div>
        
        
         
        
        
        <div className="main-content">
        <div id='estadisticas'></div> 
          {
            (this.state.loading)
             ? <p>Cargando...</p>
             : <div><h2>Resultados para : {this.state.query}</h2><RepoList data={this.state.repos} /></div>
          }
        
        </div>
      </div>
    );
  }
}
