const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_AUTHORIZATION = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

export const getUsers = async () => {
  const res = await fetch(`${GITHUB_API_URL}/users?${GITHUB_AUTHORIZATION}`);
  const data = await res.json();

  return data;
};

export const getUser = async username => {
  const res = await fetch(
    `${GITHUB_API_URL}/users/${username}?${GITHUB_AUTHORIZATION}`,
  );

  if (res.status >= 404) {
    return Promise.reject();
  }

  const data = await res.json();

  return data;
};

export const searchUsers = async (searchTerm = '') => {
  const res = await fetch(
    `${GITHUB_API_URL}/search/users?q=${searchTerm}&${GITHUB_AUTHORIZATION}`,
  );
  const data = await res.json();

  return data.items;
};
