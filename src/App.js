import React from 'react';
import './App.css';
import ResidentsList from './components/ResidentsList';
import Search from './components/Search';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search />
        <Error />
        <ResidentsList />
      </div>
    </div>
  );
}

export default App;
