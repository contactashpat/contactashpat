import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {MyComponent} from "./MyComponent";

function App() {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery') || '';
    setSearch(lastQuery);
  }, [search]);

  function handleOnChange(e: any) {
     setSearch(e.target.value);
     localStorage.setItem('lastQuery', e.target.value);
  }

  return (
    <div className="App">
      <input type="text" onChange={handleOnChange} aria-placeholder={'Search'}
             placeholder={'Search'}/>
      <MyComponent q={search}/>
    </div>
  );
}

export default App;
