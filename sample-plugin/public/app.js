import { uiModules } from 'ui/modules';
import uiRoutes from 'ui/routes';

import 'ui/autoload/styles';
import '../public/components/main/main.less';
import React from 'react';
import chrome from 'ui/chrome';
import { render, unmountComponentAtNode } from 'react-dom';
import { Main } from './components/main';
import 'ui/private';
import { FeatureCatalogueRegistryProvider } from 'ui/registry/feature_catalogue';
import { PROJECT_SUCCESS_MESSAGE, PROJECT_FAILURE_MESSAGE } from './const/flip_constants';

uiRoutes.enable();
const app = uiModules.get('apps/flip-plugin', []);
app.directive('flipApp', function (reactDirective) {
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

function RootController($scope, $element, $http, Private) {

  let envConfig;
  let projectList = {};

  const renderUi = function ($http, projectList, projectTitle) {

    const domNode = document.getElementsByClassName('app-wrapper-panel')[0];
    // render react to DOM
    render(<Main
      httpClient={$http}
      projectList={projectList}
      projectTitle={projectTitle}
      directories={Private(FeatureCatalogueRegistryProvider)}
    />, domNode);

    // unmount react on controller destroy
    $scope.$on('$destroy', () => {
      unmountComponentAtNode(domNode);
    });
  };

  const getProjectAndRender = function (projectDataURL) {

    $http.get(projectDataURL).then((resp) => {
      projectList = resp.data;
      if(projectList) {
        return renderUi($http, projectList, PROJECT_SUCCESS_MESSAGE);
      }
      return renderUi($http, projectList, '');
    }).catch((error)=> {
      console.error('Exception while retriving project :' + error);
      return renderUi($http, projectList, PROJECT_FAILURE_MESSAGE);
    });
  };

  $http.get('../api/flip-plugin/config').then((resp) => {
    envConfig = resp.data.envConfig;
    if (envConfig === undefined) {
      console.error('Unable to load flip configuation');
      return false;
    }
    getProjectAndRender(envConfig.projectDataURL);
  }).catch(function (e) {
    console.error('error' + e);
  });
}

chrome.setRootController('flipReactPlugin', RootController);
