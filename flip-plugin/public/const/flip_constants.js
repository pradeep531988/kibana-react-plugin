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
