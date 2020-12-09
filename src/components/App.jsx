import React from 'react';
import { Search } from './Search.jsx'
import { ResultsState } from '../context/resultsState.js';

function App() {
  return (
    <ResultsState>
      <div className='app_container'>
        <Search key='Search' />
      </div>
    </ResultsState>
  )
}

export default App;