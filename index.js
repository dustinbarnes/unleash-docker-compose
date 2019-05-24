const unleash = require('unleash-server');
const basicAuth = require('./basic-auth-hook.js');

unleash
  .start({
    port: 4242,
    adminAuthentication: 'custom',
    enableLegacyRoutes: false,
    preRouterHook: basicAuth
  })
  .then(unleash => {
    console.log(
      `Unleash started on http://localhost:${unleash.app.get('port')}`,
    );
  });
