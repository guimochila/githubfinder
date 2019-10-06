import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Profile({ user }) {
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    company,
    hireable,
  } = user;

  return (
    <div>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hirable:{' '}
      <i
        className={`fas ${
          hireable ? 'fa-check text-success' : ' fa-times-circle text-danger'
        }`}
      />
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt={name}
            className="round-img"
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            className="btn btn-dark my-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Github profile
          </a>
          <ul>
            <li>
              <strong>Username: </strong> {login}
            </li>
            <li>
              <strong>Company :</strong>
              {company}
            </li>
            <li>
              <strong>Website :</strong>
              {blog}
            </li>
            <li>
              <strong>Company :</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public gists: {public_gists}</div>
      </div>
    </div>
  );
}

export default Profile;
