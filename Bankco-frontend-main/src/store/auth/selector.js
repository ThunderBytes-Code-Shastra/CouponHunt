export const authUsernameSelector = (state) => state.auth.username;

export const authNameSelector = (state) => state.auth.name;

export const authAvatarSelector = (state) => state.auth.avatar;

export const authEmailSelector = (state) => state.auth.email;

export const authPhoneSelector = (state) => state.auth.phone;

export const authAccessTokenSelector = (state) => state.auth.accessToken;

export const authIsAuthenticatedSelector = (state) =>
  state.auth.isAuthenticated;

export const authLoadingSelector = (state) => state.auth.authLoading;

export const authErrorSelector = (state) => state.auth.error;
