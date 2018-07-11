import { resolve } from 'path';
import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch', 'kibana' ],
    name: 'flip-plugin',
    uiExports: {
      
      app: {
        title: 'Home',
        description: 'This plugin is used to enhance the Kibana application with the option to display the projects based on roles and filter the dashboard with the roles',
        main: 'plugins/flip-plugin/app',
      },
      
      
      translations: [
        resolve(__dirname, './translations/es.json')
      ],
      
      
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    
    init(server, options) {
      // Add server routes and initialize the plugin here
      exampleRoute(server);
    }
    

  });
};
