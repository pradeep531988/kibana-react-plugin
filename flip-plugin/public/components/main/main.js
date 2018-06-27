import React from 'react';
import { Home } from '../home/home';
import '../../less/main.less';
import PropTypes from 'prop-types';
import { FlipConstants } from '../../const/flip_constants';
import '../../const/feature_registry';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {
  EuiPage
} from '@elastic/eui';

import { FeatureCatalogueRegistryProvider, FeatureCatalogueCategory } from 'ui/registry/feature_catalogue';


export class Main extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.directories);
    this.state = {

      directories: [{ id: 1,
        title: 'Dashboard',
        description: 'Test',
        icon: 'Test',
        path: 'kibana#/dashboard',
        showOnHomePage: true,
        category: 'Test' }, { id: 2,
        title: 'Discover',
        description: 'Test',
        icon: 'Test',
        path: 'kibana#/discover',
        showOnHomePage: true,
        category: 'Test' }, { id: 3,
        title: 'Visualize',
        description: 'Test',
        icon: 'Test',
        path: 'kibana#/visualize',
        showOnHomePage: true,
        category: 'Test' }, { id: 4,
        title: 'Monitoring',
        description: 'Test',
        icon: 'Test',
        path: 'flip-plugin',
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
    
    const directories = this.props.directories;

    return (

      <Router>
        <Switch>
          <Route path="/">
            <Home
              title="Kaliedioscope - An Introduction"
              directories={directories} 
            />
          </Route>
        </Switch>
      </Router>
    /*
      <EuiPage>
        <Roles
          addBasePath={addBasePath}
          directories={directories}
        />
      </EuiPage>*/
    );
  }
}

Main.propTypes = {
  title: PropTypes.string.isRequired,
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

