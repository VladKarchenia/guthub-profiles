import React, { useState, useEffect, useContext, Fragment } from 'react'
import { Results } from '../Results/Results.jsx'
import { ResultsContext } from '../../context/resultsContext.js'
import { Loader } from '../Loader/Loader.jsx'
import styles from './Search.module.scss'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const MyButton = styled(Button)({
    background: '#e21e35',
    width: '15%',
    height: 54,
    minWidth: 110,
    borderRadius: '0 5px 5px 0',
    fontSize: 15,
    fontWeight: 600,
    letterSpacing: '0.005em',
    padding: '2px 0 0',
    boxShadow: '0 2px 1px #c20017',
    '&:hover, &:active': {
        background: '#bf0016',
        boxShadow: '0 2px 1px #9e0012'
    },
    '& .MuiButton-label': {
        fontWeight: 600
    }
});

const MyInput = withStyles({
    root: {
        fontSize: 17,
        color: '#333',
        fontWeight: 600,
        borderRadius: '5px 0 0 5px',
        '& .MuiOutlinedInput-root': {
            borderRadius: '5px 0 0 5px',
        }
    }
})(TextField);

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
            <form className={styles.search} onSubmit={handleSubmit} noValidate autoComplete="off">
                <MyInput id="outlined-search" label="Find a user" type="search" variant="outlined" value={value} onChange={(e) => setValue(e.target.value)} fullWidth/>
                <MyButton variant="contained" color="secondary" type="submit">
                    <Icon>search</Icon>
                    Search
                </MyButton>
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
