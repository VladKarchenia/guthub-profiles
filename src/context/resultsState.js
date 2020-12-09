import React, { useReducer } from 'react'
import { ResultsContext } from './resultsContext'
import { resultsReducer } from './resultsReducer'
import { SHOW_LOADER, FETCH_USERS } from './types'

export const ResultsState = ({ children }) => {
  const initialState = {
    users: [],
    loading: false
  }

  const [state, dispatch] = useReducer(resultsReducer, initialState)
  const showLoader = () => dispatch({ type: SHOW_LOADER })
  const fetchUsers = async (value) => {
    showLoader()
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${value}`);
      const json = await response.json();
      const payload = json.items.map(item => {
        return {
          ...item
        }
      })
      localStorage.setItem('cashedUsers', JSON.stringify(payload));
      dispatch({ type: FETCH_USERS, payload })
    } catch (error) {
      throw new Error('Oops, something went wrong')
    }
  }

  return (
    <ResultsContext.Provider value={{
      showLoader,
      fetchUsers,
      loading: state.loading,
      users: state.users
    }}>
      {children}
    </ResultsContext.Provider>
  )
}