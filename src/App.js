import React, { useState } from 'react';
import './App.css';
import ResidentsList from './components/ResidentsList';
import Search from './components/Search';
import Error from './components/Error';

function App() {
  const [studentNames, setStudentNames] = useState([]);
  const [errorObj, setErrorObj] = useState({
    isError: false,
    message: '',
  });

  return (
    <div className="App">
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search setStudentNames={setStudentNames} setErrorObj={setErrorObj} />
        {errorObj.isError && <Error errorMessage={errorObj.message} />}
        <ResidentsList studentNames={studentNames} />
      </div>
    </div>
  );
}

export default App;
