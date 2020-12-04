import React from 'react';
import Repo from './Repo';
import NoRepos from './NoRepos';

const RepoList = props => { 
  
  const results = props.data;
  const regex = /(<([^>]+)>)/ig;
  let repos;
  if (results.length) {
    repos = results.map(repo => <Repo titulo={repo.titulo} precio={repo.precio}  url={repo.imagen} description={repo.descripcion.replace(regex, '')} key={repo.id} />);    
  } else {
    repos = <NoRepos />
  }

  return(
    <div name="list">
      <ul className="repo-list">
        {repos}
      </ul> 
    </div>    
  );
}

export default RepoList;
