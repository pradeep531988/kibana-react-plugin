import moment from 'moment';
import { uiModules } from 'ui/modules';
import uiRoutes from 'ui/routes';

import 'ui/autoload/styles';
import './less/main.less';
import template from './templates/index.html';

uiRoutes.enable();
uiRoutes
  .when('/', {
    template,
    resolve: {
      currentTime($http) {
        return $http.get('../api/flip-plugin/example').then(function (resp) {
          return resp.data.time;
        });
      }
    }
  });

uiModules
  .get('app/flip-plugin', [])
  .controller('flipPluginHelloWorld', function ($scope, $route, $interval) {
    $scope.title = 'Flip Plugin';
    $scope.description = 'This plugin is used to enhance the Kibana application with the option to display the projects based on roles and filter the dashboard with the roles';

    const currentTime = moment($route.current.locals.currentTime);
    $scope.currentTime = currentTime.format('HH:mm:ss');
    const unsubscribe = $interval(function () {
      $scope.currentTime = currentTime.add(1, 'second').format('HH:mm:ss');
    }, 1000);
    $scope.$watch('$destroy', unsubscribe);
  });
