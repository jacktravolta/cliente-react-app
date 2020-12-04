import React from 'react';
import RepoEstatictisPage from './RepoEstatictisPage';
import NoRepos from './NoRepos';

const EstatictisPage = props => { 
  
  const results = props.data;  
  let RepoEstatictisPage;
  if (results.length) {
    RepoEstatictisPage = results.map(repo => <EstatictisPage titulo={repo.id} precio={repo.id}  url={repo.imagen} description={repo.id} key={repo.id} />);    
  } else {
    RepoEstatictisPage = <NoRepos />
  }

  return(
    
    <div name="list-EstatictisPage">
      <ul className="repo-EstatictisPage">
        {RepoEstatictisPage}
      </ul> 
    </div> 



  );
}

export default EstatictisPage;