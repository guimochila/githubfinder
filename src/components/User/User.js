import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../Spinner';

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_AUTHORIZATION = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

export class User extends Component {
  state = {
    user: {},
    loading: true,
    userNotFound: false,
  };

  componentDidMount() {
    const { username } = this.props.match.params;
    this.getUser(username);
  }

  getUser = async username => {
    const res = await fetch(
      `${GITHUB_API_URL}/users/${username}?${GITHUB_AUTHORIZATION}`,
    );

    if (res.status >= 404) {
      this.setState({ userNotFound: true, loading: false });
      return;
    }

    const data = await res.json();

    this.setState({ user: data, loading: false });
  };

  render() {
    const { user, loading, userNotFound } = this.state;

    if (loading) {
      return <Spinner />;
    }

    if (userNotFound) {
      return <h1>Sorry, user not found.</h1>;
    }

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
}

export default User;
