import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ shouldShowClearBtn, clearUsers, searchUsers, setAlert }) {
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (!text) {
      return setAlert('Please enter a text', 'light');
    }

    searchUsers(text);
    setText('');
  };

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
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  shouldShowClearBtn: PropTypes.bool.isRequired,
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
