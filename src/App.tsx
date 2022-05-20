import React from 'react';
import './App.css';
import { cities } from './data/cities'
import { books } from './data/books'
import SearchWidget from './components/SearchCard';


function App() {

  return (
    <div className="App">
      <h2>Cities Search</h2>
      <SearchWidget data={cities}/>
      <hr/>
      <h2>Book Search</h2>
      <SearchWidget data={books} filterByKey="title"/>
    </div>
  );
}

export default App;
