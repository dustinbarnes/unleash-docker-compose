const unleash = require('unleash-server');
const basicAuth = require('./basic-auth-hook.js');

unleash
  .start({
    databaseUrl: 'postgres://postgres:unleash@localhost:5432/unleash',
    port: 4242,
    secret: 'yhoRgMU@ru!Q6Wl*',
    adminAuthentication: 'custom',
    enableLegacyRoutes: false,
    preRouterHook: basicAuth
  })
  .then(unleash => {
    console.log(
      `Unleash started on http://localhost:${unleash.app.get('port')}`,
    );
  });
