import React, { useState, useEffect, useContext, Fragment } from 'react'
import { Results } from './Results.jsx'
import { ResultsContext } from '../context/resultsContext.js';
import { Loader } from './Loader.jsx';

export const Search = () => {
  const [value, setValue] = useState('')
  const [cashedUsers, setCashedUsers] = useState('')
  const { loading, users, fetchUsers } = useContext(ResultsContext)

  useEffect(() => {
    const cashedUsers = JSON.parse(localStorage.getItem('cashedUsers'));
    if (cashedUsers) {
      setCashedUsers(cashedUsers);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (value.trim()) {
      fetchUsers(value)
      setValue('')
    }
  }

  return (
    <Fragment>
      <form className='search' onSubmit={handleSubmit}>
        <input className='search_input' type='text' placeholder='Find a user...' value={value} onChange={e => setValue(e.target.value)} />
        <button className='search_btn' type='submit'>Search</button>
      </form>
      {loading
        ? <Loader />
        : <Results users={users.length > 0 ? users : cashedUsers ? cashedUsers : []} />
      }
    </Fragment>
  )
}