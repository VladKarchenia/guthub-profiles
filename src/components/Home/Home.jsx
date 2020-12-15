import React from 'react'
import Search from '../Search/Search.jsx'
import { ResultsState } from '../../context/resultsState.js'

function Home() {
  return (
    <ResultsState>
      <div className="app_container">
          <Search />
      </div>
    </ResultsState>
  )
}

export default Home

