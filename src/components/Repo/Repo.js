import React from 'react';

function Repo({ repo }) {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
}

export default Repo;
