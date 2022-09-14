import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovie from '/SearchMovie'

function Main(){
    return (
      <div className="container">
        <h1 className="title">Pesquisa de Filme REACT!!</h1>
        <SearchMovie />
      </div>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));