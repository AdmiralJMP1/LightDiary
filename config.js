module.exports = function() {  
  try {
    var config = require('./server_config');
      // do stuff
  } catch (ex) {
    var config = {
      DATABASE_HOST: null,
      DATABASE_NAME: null,
      DATABASE_PASSWORD: null,
      DATABASE_URL: null,
      DATABASE_USER: null,
      GITHUB_CLIENT_ID: null,
      GITHUB_CLIENT_SECRET: null,
      SESSION_SECRET: null,
      PORT: null
    }
  }
  return config;
}