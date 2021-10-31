export const environment = {
  production: true,
  apiServerUrl: 'https://auth0-coffee-app.herokuapp.com/', // the running FLASK api server url
  auth0: {
    url: 'udacity-coffee-full-stack.us', // the auth0 domain prefix
    audience: 'https://localhost5000', // the audience set for the auth0 app
    clientId: '7SPGYBVrDhypVAaD5GebWZTeoSKuEL80', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
