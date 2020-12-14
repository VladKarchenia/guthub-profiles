import React, { Fragment } from 'react'
import styles from './Results.module.scss'
import Link from '@material-ui/core/Link';
import { styled } from '@material-ui/core/styles';

const MyLink = styled(Link)({
    width: '100%',
    height: 42,
    background: '#146aec',
    borderRadius: '0 0 10px 10px',
    color: 'white',
    fontSize: 15,
    fontWeight: 600,
    lineHeight: '42px',
    boxShadow: '0 1px 1px rgba(20, 106, 236, 0.15)',
    textDecoration: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    '&:hover, &:active': {
        background: '#0047b1',
        textDecoration: 'none'
    }
});

export const Results = ({ users }) => (
    <Fragment>
        <div className={styles.found_number}>
            {users.length > 0
                ? `We found ${users.length} users for your request`
                : 'You can find any GitHub user you want'}
        </div>
        <div className={styles.results}>
            {users.map((user) => {
                return (
                    <div key={user.id} className={styles.results_item}>
                        <img
                            className={styles.results_item_avatar}
                            src={user.avatar_url}
                            alt={user.login + ' avatar photo'}
                        />
                        <div className={styles.results_item_login}>
                            {user.login}
                        </div>
                        <MyLink href={user.html_url}>
                            Follow
                        </MyLink>
                    </div>
                )
            })}
        </div>
    </Fragment>
)
