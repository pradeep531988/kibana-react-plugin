import React from 'react';
import PropTypes from 'prop-types';
import { Synopsis } from '../synopsis/synopsis';
import {
  EuiTabs,
  EuiTab,
  EuiFlexItem,
  EuiFlexGrid,
  EuiPage,
  EuiTitle,
  EuiSpacer,
} from '@elastic/eui';

import { FeatureCatalogueCategory } from 'ui/registry/feature_catalogue';

const ALL_TAB_ID = 'all';
const OTHERS_TAB_ID = 'others';

const isOtherCategory = (directory) => {
  return directory.category !== FeatureCatalogueCategory.DATA && directory.category !== FeatureCatalogueCategory.ADMIN;
};

export class Roles extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
    };
  }


  renderDirectories = () => {
    return this.props.directories
     .map((directory) => {
        return (
          <EuiFlexItem key={directory.id}>
            <Synopsis
              description={directory.description}
              iconUrl={this.props.addBasePath(directory.icon)}
              title={directory.title}
              url={this.props.addBasePath(directory.path)}
              wrapInPanel
            />
          </EuiFlexItem>
        );
      });
  };

  render() {
    return (
      <EuiPage className="home">
        <EuiTitle size="l">
          <h1>
            Roles
          </h1>
        </EuiTitle>
        <EuiFlexGrid columns={4}>
          { this.renderDirectories() }
        </EuiFlexGrid>
      </EuiPage>
    );
  }
}

Roles.propTypes = {
  addBasePath: PropTypes.func.isRequired,
  directories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    showOnHomePage: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired
  }))
};
