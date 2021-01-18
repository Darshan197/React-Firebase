export const signUp = (user) => {
    return {
        type: 'SIGNUP',
        payload: user
    };
};

export const signIn = (user) => {
  return {
      type: 'SIGNIN',
      payload: user
  };
};

export const signUpSuccess = (token) => {
    return {
      type: 'SIGNUP_SUCCESS',
      token
    };
  };

export const signOut = () => {
  return {
    type: 'SIGNOUT'
  }
}

export const signOutSuccess = () => {
  return {
    type: 'SIGNOUT_SUCCESS'
  }
}

export const showAuthMessage = (message) => {
    return {
        type: 'SHOW_AUTH_MESSAGE',
        message
    };
};

export const hideAuthMessage = () => {
    return {
        type: 'HIDE_AUTH_MESSAGE',
    };
};

export const showLoading = () => {
    return {
      type: 'SHOW_LOADING',
    };
  };