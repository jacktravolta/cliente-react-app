import React from 'react';

const Repo = props => (
  
  
  <div name='img'>
	<h1>{props.titulo}</h1><p></p>
	<img src={props.url} alt='{props.titulo}' width='200' height='141'></img>
	<p></p>
    <span>{props.description}</span>
    <p></p>
    <b>Precio : $ {props.precio}</b>
    <hr></hr>

  </div>
);

export default Repo;