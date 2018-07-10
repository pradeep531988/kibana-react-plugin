
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
    category: FeatureCatalogueCategory.DATA
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
    category: FeatureCatalogueCategory.DATA
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
    category: FeatureCatalogueCategory.DATA
  };
});



FeatureCatalogueRegistryProvider.register(() => {
  return {
    id: 'flipMonitoring',
    title: 'Monitoring',
    description: 'Monitor the watchers triggered, watcher configuration and create new watchers.',
    icon: '/plugins/kibana/assets/app_index_pattern.svg',
    path: '/app/flip-plugin#/',
    showOnHomePage: true,
    category: FeatureCatalogueCategory.ADMIN
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
