import React from 'react';
import { Home } from '../home/home';
import './main.less';
import PropTypes from 'prop-types';
import { PROJECT_TITLE } from '../../const/flip_constants';
import '../../const/feature_registry';
import $ from 'jquery';


import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    //localStorage.set('app', '');
    $('.global-nav__links .active').css('display', 'none');
  }

 
  render() {

    const directories = this.props.directories;
    const projects = this.props.projectList;
    const projectTitle = this.props.projectTitle;

    return (

      <Router>
        <Switch>
          <Route path="/">
            <Home
              title={PROJECT_TITLE}
              projects={projects}  //Replace with project details
              quickLinks={directories}   //Add the quick links append based on project
              projectTitle={projectTitle}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

Main.propTypes = {
  //title: PropTypes.string.isRequired,
  quickLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })),
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }))
};

