import React from 'react';
import { Roles } from '../role/roles';
import PropTypes from 'prop-types';
import { FeatureCatalogueRegistryProvider } from 'ui/registry/feature_catalogue';
import chrome from 'ui/chrome';

import {
  EuiPage,
  EuiPageHeader,
  EuiTitle,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentBody,
  EuiText,
  EuiTabs,
  EuiTab,
  EuiFlexItem,
  EuiFlexGrid,
  EuiSpacer
} from '@elastic/eui';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      directories: [ { id: 1,
        title: 'Test',
        description: 'Test',
        icon: 'Test',
        path: 'Test',
        showOnHomePage: true,
        category: 'Test' }]

    };
  }

  componentDidMount() {
    /*
       FOR EXAMPLE PURPOSES ONLY.  There are much better ways to
       manage state and update your UI than this.

    const { httpClient } = this.props;
    httpClient.get("../api/flip-plugin/example").then((resp) => {
      this.setState({ time: resp.data.time });
    });  */
  }

  render() {
    const { title } = this.props;
    let addBasePath  = chrome.addBasePath;
    let directories = [ { id: 1,
      title: 'Test',
      description: 'Test',
      icon: 'Test',
      path: 'Test',
      showOnHomePage: true,
      category: 'Test' }, { id: 2,
        title: 'Test2',
        description: 'Test',
        icon: 'Test',
        path: 'Test',
        showOnHomePage: true,
        category: 'Test' }, { id: 3,
          title: 'Test3',
          description: 'Test',
          icon: 'Test',
          path: 'Test',
          showOnHomePage: true,
          category: 'Test' },{ id: 4,
            title: 'Test4',
            description: 'Test',
            icon: 'Test',
            path: 'Test',
            showOnHomePage: true,
            category: 'Test' }, { id: 5,
              title: 'Test5',
              description: 'Test',
              icon: 'Test',
              path: 'Test',
              showOnHomePage: true,
              category: 'Test' }];

    return (
      <EuiPage>
        <EuiPageHeader>
          <EuiTitle size="l">
            <h1>{title} Hello World! Pradeep</h1>
          </EuiTitle>
        </EuiPageHeader>
        <EuiPageBody>
          <EuiPageContent>
            <EuiPageContentHeader>
              <EuiTitle>
                <h2>Congratulations</h2>
              </EuiTitle>
            </EuiPageContentHeader>
            <EuiPageContentBody>
              <EuiText>
                <h3>You've successfully created your first Kibana Plugin!</h3>
                <p>The server time (via API call) is {this.state.time || 'NO API CALL YET'}</p>
              </EuiText>
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
        <Roles
          addBasePath={addBasePath}
          directories={directories}
        />
      </EuiPage>
    );
  }
}

Main.propTypes = {
  addBasePath: true,
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
