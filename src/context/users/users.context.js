import React from 'react';

import UsersActionTypes from './users.types';
import * as github from '../../api/github';

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  alert: null,
};

const UsersStateContext = React.createContext();
const UsersDispatchContext = React.createContext();

function usersReducer(state, action) {
  switch (action.type) {
    case UsersActionTypes.START_FETCHING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case UsersActionTypes.FETCH_USERS_END: {
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    }
    case UsersActionTypes.FAIL_FETCHING: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case UsersActionTypes.CLEAR_USERS: {
      return {
        ...state,
        users: [],
      };
    }
    case UsersActionTypes.SET_ALERT: {
      return {
        ...state,
        alert: action.payload,
      };
    }
    case UsersActionTypes.REMOVE_ALERT: {
      return {
        ...state,
        alert: null,
      };
    }
    default: {
      throw new Error(`Unhadled action type: ${action.type}`);
    }
  }
}

function UsersProvider({ children }) {
  const [state, dispatch] = React.useReducer(usersReducer, INITIAL_STATE);

  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
}

function useUsersState() {
  const context = React.useContext(UsersStateContext);

  if (context === undefined) {
    throw new Error('useUsersState must be used within a UsersProvider');
  }

  return context;
}

function useUsersDispatch() {
  const context = React.useContext(UsersDispatchContext);

  if (context === undefined) {
    throw new Error('useUsersDispatch must be used within a UsersProvider');
  }

  return context;
}

/* Actions */

async function searchUser(dispatch, user) {
  dispatch({ type: UsersActionTypes.START_FETCHING });
  try {
    const users = await github.searchUsers(user);
    dispatch({ type: UsersActionTypes.FETCH_USERS_END, payload: users });
  } catch (error) {
    dispatch({ type: UsersActionTypes.FAIL_FETCHING });
  }
}

function clearUsersState(dispatch) {
  dispatch({ type: UsersActionTypes.CLEAR_USERS });
}

function setAlert(dispatch, message, status) {
  dispatch({ type: UsersActionTypes.SET_ALERT, payload: { message, status } });
}

function removeAlert(dispatch) {
  dispatch({ type: UsersActionTypes.REMOVE_ALERT });
}

export {
  UsersProvider,
  useUsersState,
  useUsersDispatch,
  searchUser,
  clearUsersState,
  setAlert,
  removeAlert,
};
