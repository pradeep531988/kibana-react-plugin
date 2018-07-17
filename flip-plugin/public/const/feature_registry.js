
import { FeatureCatalogueRegistryProvider, FeatureCatalogueCategory } from 'ui/registry/feature_catalogue';
import { FlipConstants, DashboardConstants, VisualizeConstants } from '../const/flip_constants';


FeatureCatalogueRegistryProvider.register(() => {
  return {
    id: 'discover',
    title: 'Discover',
    description: 'Interactively explore your data by querying and filtering raw documents.',
    icon: '/plugins/kibana/assets/app_discover.svg',
    path: '/app/kibana#/discover',
    showOnHomePage: true,
    category: FeatureCatalogueCategory.DATA,
    showAsQuickLinks: true
  };
});

FeatureCatalogueRegistryProvider.register(() => {
  return {
    id: 'visualize',
    title: 'Visualize',
    description: 'Create visualizations and aggregate data stores in your Elasticsearch indices.',
    icon: '/plugins/kibana/assets/app_visualize.svg',
    path: `/app/kibana#${VisualizeConstants.LANDING_PAGE_PATH}`,
    showOnHomePage: true,
    category: FeatureCatalogueCategory.DATA,
    showAsQuickLinks: true
  };
});


FeatureCatalogueRegistryProvider.register(() => {
  return {
    id: 'dashboard',
    title: 'Dashboard',
    description: 'Display and share a collection of visualizations and saved searches.',
    icon: '/plugins/kibana/assets/app_dashboard.svg',
    path: `/app/kibana#${DashboardConstants.LANDING_PAGE_PATH}`,
    showOnHomePage: true,
    category: FeatureCatalogueCategory.DATA,
    showAsQuickLinks: true
  };
});



FeatureCatalogueRegistryProvider.register(() => {
  return {
    id: 'flipMonitoring',
    title: 'Monitoring',
    description: 'Monitor the watchers triggered, watcher configuration and create new watchers for specific project.',
    icon: '/plugins/kibana/assets/app_index_pattern.svg',
    path: '/app/flip-plugin#/',
    showOnHomePage: true,
    category: FeatureCatalogueCategory.ADMIN,
    showAsQuickLinks: true
  };
});

FeatureCatalogueRegistryProvider.register(() => {
  return {
    id: 'IAAS',
    title: 'IAAS',
    description: 'Display and share a collection of visualizations and saved searches.',
    icon: '/plugins/kibana/assets/app_dashboard.svg',
    path: `/app/kibana#${DashboardConstants.LANDING_PAGE_PATH}`,
    showOnHomePage: false,
    category: FeatureCatalogueCategory.DATA
  };
});

FeatureCatalogueRegistryProvider.register(() => {
  return {
    id: 'discover',
    title: 'E2E',
    description: 'Interactively explore your data by querying and filtering raw documents.',
    icon: '/plugins/kibana/assets/app_discover.svg',
    path: '/app/kibana#/discover',
    showOnHomePage: false,
    category: FeatureCatalogueCategory.DATA
  };
});

FeatureCatalogueRegistryProvider.register(() => {
  return {
    id: 'visualize',
    title: 'PAAS',
    description: 'Create visualizations and aggregate data stores in your Elasticsearch indices.',
    icon: '/plugins/kibana/assets/app_visualize.svg',
    path: `/app/kibana#${VisualizeConstants.LANDING_PAGE_PATH}`,
    showOnHomePage: false,
    category: FeatureCatalogueCategory.DATA
  };
});


FeatureCatalogueRegistryProvider.register(() => {
  return {
    id: 'flipMonitoring',
    title: 'TAAS',
    description: 'Monitor the watchers triggered, watcher configuration and create new watchers.',
    icon: '/plugins/kibana/assets/app_index_pattern.svg',
    path: '/app/flip-plugin#/',
    showOnHomePage: false,
    category: FeatureCatalogueCategory.ADMIN
  };
});
FeatureCatalogueRegistryProvider.register(() => {
  return {
    id: 'IAAS',
    title: 'IAAS1',
    description: 'Display and share a collection of visualizations and saved searches.',
    icon: '/plugins/kibana/assets/app_dashboard.svg',
    path: `/app/kibana#${DashboardConstants.LANDING_PAGE_PATH}`,
    showOnHomePage: false,
    category: FeatureCatalogueCategory.DATA
  };
});

FeatureCatalogueRegistryProvider.register(() => {
  return {
    id: 'discover',
    title: 'E2E1',
    description: 'Interactively explore your data by querying and filtering raw documents.',
    icon: '/plugins/kibana/assets/app_discover.svg',
    path: '/app/kibana#/discover',
    showOnHomePage: false,
    category: FeatureCatalogueCategory.DATA
  };
});

FeatureCatalogueRegistryProvider.register(() => {
  return {
    id: 'visualize',
    title: 'PAAS1',
    description: 'Create visualizations and aggregate data stores in your Elasticsearch indices.',
    icon: '/plugins/kibana/assets/app_visualize.svg',
    path: `/app/kibana#${VisualizeConstants.LANDING_PAGE_PATH}`,
    showOnHomePage: false,
    category: FeatureCatalogueCategory.DATA
  };
});


FeatureCatalogueRegistryProvider.register(() => {
  return {
    id: 'flipMonitoring',
    title: 'TAAS1',
    description: 'Monitor the watchers triggered, watcher configuration and create new watchers.',
    icon: '/plugins/kibana/assets/app_index_pattern.svg',
    path: '/app/flip-plugin#/',
    showOnHomePage: false,
    category: FeatureCatalogueCategory.ADMIN
  };
});

FeatureCatalogueRegistryProvider.register(() => {
  return {
    id: 'console',
    title: 'Console',
    description: 'Skip cURL and use this JSON interface to work with your data directly.',
    icon: '/plugins/kibana/assets/app_console.svg',
    path: '/app/kibana#/dev_tools/console',
    showOnHomePage: true,
    category: FeatureCatalogueCategory.ADMIN
  };
});

FeatureCatalogueRegistryProvider.register(() => {
  return {
    id: 'saved_objects',
    title: 'Saved Objects',
    description: 'Import, export, and manage your saved searches, visualizations, and dashboards.',
    icon: '/plugins/kibana/assets/app_saved_objects.svg',
    path: '/app/kibana#/management/kibana/objects',
    showOnHomePage: true,
    category: FeatureCatalogueCategory.ADMIN
  };
});

FeatureCatalogueRegistryProvider.register(() => {
  return {
    id: 'index_patterns',
    title: 'Index Patterns',
    description: 'Manage the index patterns that help retrieve your data from Elasticsearch.',
    icon: '/plugins/kibana/assets/app_index_pattern.svg',
    path: '/app/kibana#/management/kibana/indices',
    showOnHomePage: true,
    category: FeatureCatalogueCategory.ADMIN
  };
});