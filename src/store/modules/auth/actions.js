export function singRequest(email, password) {
  return {
    type: '@auth/SING_IN_REQUEST',
    payload: { email, password },
  };
}

export function singInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
