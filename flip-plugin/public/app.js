import { uiModules } from 'ui/modules';
import uiRoutes from 'ui/routes';

import 'ui/autoload/styles';
import './less/main.less';
import React from 'react';
import chrome from 'ui/chrome';
import { render, unmountComponentAtNode } from 'react-dom';
import { Main } from './components/main';

uiRoutes.enable();
const app = uiModules.get('apps/flip-plugin', []);
app.directive('homeApp', function (reactDirective) {
  return reactDirective(Main);
});

app.config($locationProvider => {
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false,
    rewriteLinks: false,
  });
});
app.config(stateManagementConfigProvider =>
  stateManagementConfigProvider.disable()
);

function RootController($scope, $element, $http) {
  console.log($element);
  const domNode = document.getElementsByClassName("app-wrapper-panel")[0];

  // render react to DOM
  render(<Main title="flip-react-plugin" httpClient={$http} />, domNode);

  // unmount react on controller destroy
  $scope.$on('$destroy', () => {
    unmountComponentAtNode(domNode);
  });
}

chrome.setRootController('flipReactPlugin', RootController);
