import React, { Component } from 'react';

export default class SearchForm extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    document.getElementById("repo-list-estadisticasdiv").style.display = "none";
    //e.currentTarget.reset();
  }
  
  ocultarMostrar = e => {
    let ee = document.getElementById("repo-list-estadisticasdiv");
    if (ee.style.display === "none") {
        ee.style.display = "block";
    } else {
        ee.style.display = "none";
        window.location.reload();
    }
    
  }  


  render() {  
      return (
      
      <form className="search-form" onSubmit={this.handleSubmit} >
        
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               id="search"
               ref={(input) => this.query = input}
               placeholder="Buscar..." />
         <button type='button' onClick={this.handleSubmit} >Ok!</button> 
         <button type='button' onClick={this.ocultarMostrar} >Estadisticas</button> 
 

      </form>      
    );
  }
}