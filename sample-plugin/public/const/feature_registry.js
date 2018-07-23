
import { FeatureCatalogueRegistryProvider, FeatureCatalogueCategory } from 'ui/registry/feature_catalogue';
import { DashboardConstants, VisualizeConstants } from '../const/flip_constants';


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
    id: 'Aleting',
    title: 'Aleting',
    description: 'Monitor the watchers triggered, watcher configuration and create new watchers for specific project.',
    icon: '/plugins/kibana/assets/app_index_pattern.svg',
    path: '/app/flip-plugin#/',
    showOnHomePage: true,
    category: FeatureCatalogueCategory.ADMIN,
    showAsQuickLinks: true
  };
});