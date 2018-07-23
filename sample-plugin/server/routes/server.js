const readYaml = require('read-yaml');
import PropTypes from 'prop-types';

export default function (server) {

  let envConfig;
  readYaml(__dirname + '/env_config.yml', function (err, data) {//Loaded only once
    if (err) throw err;
    console.log(data);
    envConfig = data;
    return data;
  });


  server.route({
    path: '/api/flip-plugin/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

  server.route({
    path: '/api/flip-plugin/config',
    method: 'GET',
    handler(req, reply) {
      reply(
        { envConfig }
      );
    }
  });

}


