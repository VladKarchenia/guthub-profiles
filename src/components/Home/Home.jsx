import React from "react";
import SearchForm from "../SearchForm/SearchForm.jsx";
import { SearchResultsState } from "../../context/searchResultsState.js";

function Home() {
  return (
    <SearchResultsState>
      <div className='app_container'>
        <SearchForm />
      </div>
    </SearchResultsState>
  );
}

export default Home;

