import React, { useState, useEffect, useContext, Fragment } from 'react'
import { Results } from '../Results/Results.jsx'
import { ResultsContext } from '../../context/resultsContext.js'
import { Loader } from '../Loader/Loader.jsx'
import styles from './Search.module.scss'

export const Search = () => {
    const [value, setValue] = useState('')
    const [cashedUsers, setCashedUsers] = useState('')
    const { loading, users, fetchUsers } = useContext(ResultsContext)

    useEffect(() => {
        const cashedUsers = JSON.parse(localStorage.getItem('cashedUsers'))
        if (cashedUsers) {
            setCashedUsers(cashedUsers)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (value.trim()) {
            fetchUsers(value)
            setValue('')
        }
    }

    return (
        <Fragment>
            <form className={styles.search} onSubmit={handleSubmit}>
                <input
                    className={styles.search_input}
                    type="text"
                    placeholder="Find a user..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button className={styles.search_btn} type="submit">
                    Search
                </button>
            </form>
            {loading ? (
                <Loader />
            ) : (
                <Results
                    users={
                        users.length > 0
                            ? users
                            : cashedUsers
                            ? cashedUsers
                            : []
                    }
                />
            )}
        </Fragment>
    )
}
