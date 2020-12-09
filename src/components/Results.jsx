import React, { Fragment } from 'react'

export const Results = ({ users }) => (
  <Fragment>
    <div className='found_number'>{users.length > 0 ? `We found ${users.length} users for your request` : 'You can find any GitHub user you want'}</div>
    <div className='results'>
      {users.map(user => {
        return <div key={user.id} className='results_item'>
          <img className='results_item_avatar' src={user.avatar_url} alt={user.login + ' avatar photo'} />
          <div className='results_item_login'>{user.login}</div>
          <a className='results_item_link' href={user.html_url}>Follow</a>
        </div>;
      })}
    </div>
  </Fragment>
)