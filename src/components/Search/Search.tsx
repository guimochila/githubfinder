import React, { useState } from 'react'

import {
  useUsersDispatch,
  clearUsersState,
  searchUser,
  setAlert,
  removeAlert,
} from '../../context/users/users.context'

function Search({ shouldShowClearBtn }) {
  const [text, setText] = useState('')
  const dispatch = useUsersDispatch()

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!text) {
      setAlert(dispatch, 'Please enter a text', 'light')

      setTimeout(() => {
        removeAlert(dispatch)
      }, 4000)

      return
    }

    await searchUser(dispatch, text)
    setText('')
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {shouldShowClearBtn && (
        <button
          className="btn btn-light btn-block"
          onClick={() => clearUsersState(dispatch)}
        >
          Clear
        </button>
      )}
    </div>
  )
}

export default Search
