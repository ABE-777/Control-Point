export const environment = {
  production: true
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'h53Hc5lqA0Oa8cVI3733zFziFmW9TuyZ',
  CLIENT_DOMAIN: 'control-point-dev.auth0.com',
  AUDIENCE: 'cp_auth_api',
  REDIRECT: 'http://localhost:4200/signedIn',
  SCOPE: 'openid profile email',
  API_URL: 'http://localhost:4200/api/'
};
