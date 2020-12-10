import React, { Fragment } from 'react'
import styles from './Results.module.scss'

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
                        <a
                            className={styles.results_item_link}
                            href={user.html_url}
                        >
                            Follow
                        </a>
                    </div>
                )
            })}
        </div>
    </Fragment>
)
