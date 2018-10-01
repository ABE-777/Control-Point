// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'h53Hc5lqA0Oa8cVI3733zFziFmW9TuyZ',
  CLIENT_DOMAIN: 'control-point-dev.auth0.com',
  AUDIENCE: 'cp_auth_api',
  REDIRECT: 'http://localhost:4200/signedIn',
  SCOPE: 'openid profile email',
  API_URL: 'http://localhost:4200/api/'
};
