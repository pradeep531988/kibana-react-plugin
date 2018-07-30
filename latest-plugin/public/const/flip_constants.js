export const FlipConstants = {
  LANDING_PAGE_PATH: '/'
};

export const DashboardConstants = {
  ADD_VISUALIZATION_TO_DASHBOARD_MODE_PARAM: 'addToDashboard',
  NEW_VISUALIZATION_ID_PARAM: 'addVisualization',
  LANDING_PAGE_PATH: '/dashboards',
  CREATE_NEW_DASHBOARD_URL: '/dashboard',
};

export const VisualizeConstants = {
  LANDING_PAGE_PATH: '/visualize',
  WIZARD_STEP_1_PAGE_PATH: '/visualize/new',
  WIZARD_STEP_2_PAGE_PATH: '/visualize/new/configure',
  CREATE_PATH: '/visualize/create',
  EDIT_PATH: '/visualize/edit',
};


export const DEFAULT_PANEL_WIDTH = 6;
export const DEFAULT_PANEL_HEIGHT = 3;
export const DASHBOARD_GRID_COLUMN_COUNT = 12;

export function createDashboardEditUrl(id) {
  return `/dashboard/${id}`;
}

export const PROJECT_NAME = 'FLIP PLUGIN';
export const PROJECT_TITLE = 'Welcome To Kaledioscope';
export const PROJECT_SUCCESS_MESSAGE = 'Please select one of the application below';
export const PROJECT_FAILURE_MESSAGE = 'Opps!!! Looks like something went wrong, Please Retry Loading the page again';
export const PROJECT_NO_APP_AVAILABLE_MESSAGE_TITLE = 'No Application Available !';
export const PROJECT_NO_APP_AVAILABLE_MESSAGE_DESC1 = 'You are not having access to any application.';
export const PROJECT_NO_APP_AVAILABLE_MESSAGE_DESC2 = 'To know more, please contact your Admin Team.';

