import React from 'react';
import { Home } from '../home/home';
import '../../less/main.less';
import PropTypes from 'prop-types';
import { FlipConstants } from '../../const/flip_constants';
import '../../const/feature_registry';
import debounce from 'lodash/debounce';
import $ from 'jquery';

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
    };

  }

  hideHome() {
    $('.active').css('display', 'none');
  }

  componentDidMount() {
    /*
       FOR EXAMPLE PURPOSES ONLY.  There are much better ways to
       manage state and update your UI than this.

    const { httpClient } = this.props;
    httpClient.get("../api/flip-plugin/example").then((resp) => {
      this.setState({ time: resp.data.time });
    });  */

    // Select the node that will be observed for mutations
    const targetNode = document.querySelector('.ng-isolate-scope');

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    let isFlipLinkDisabled;
    // Callback function to execute when mutations are observed
    const callback = function (mutationsList) {
      for(const mutation of mutationsList) {
        const element = mutation.target;
        if(element.className === 'global-nav-link  active' && $('.global-nav-link.active a[href$="flip-plugin"]')) {
          $(element).css("display","none");
          isFlipLinkDisabled = true;
        }
      }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    if (isFlipLinkDisabled) {
    // Later, you can stop observing
    observer.disconnect();
    }
    /*
    $(window).on('load', function () {
      alert('componentMounted');
      console.log($('.active'));

      console.log('LOADED');
      $.ready.then(function () {
        alert('Loaded');
      });
    });*/
  }

  render() {
    const directories = this.props.directories;

    return (

      <Router>
        <Switch>
          <Route path="/">
            <Home
              title="Welcome To Kaliedioscope"
              projects={directories}  //Replace with project details
              quickLinks={directories}   //Add the quick links append based on project
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
  })),
  quickLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }))
};

