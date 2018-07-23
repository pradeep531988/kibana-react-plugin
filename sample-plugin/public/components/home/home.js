import React from 'react';
import PropTypes from 'prop-types';
import { ProjectDetails } from '../projectDetails/projectDetails';
import chrome from 'ui/chrome';
import './home.less';
import Info from '../info/info';
import { PROJECT_NO_APP_AVAILABLE_MESSAGE_TITLE, PROJECT_NO_APP_AVAILABLE_MESSAGE_DESC1,
  PROJECT_NO_APP_AVAILABLE_MESSAGE_DESC2 } from '../../const/flip_constants';
//import $ from 'jquery';

import {
  EuiPageHeader,
  EuiTitle,
  EuiPage,
  EuiFlexItem,
  EuiFlexGrid,
  EuiSpacer,
  EuiFlexGroup,
  EuiPanel
} from '@elastic/eui';

export class Home extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {

    };
  }
  componentDidMount() {
    //$('.global-nav-link a[href$="flip-plugin"]').css('display', 'none');
    if (localStorage.getItem('app')) {
      $('#'+localStorage.getItem('app')).addClass('activeApplication');
    }
  }



  renderProjects = (projects) => {

    const addBasePath  = chrome.addBasePath;
    const quickLinks = this.props.quickLinks;
    if (projects === undefined) {
      return;
    }
    return projects
      .map((project) => {
        const projectDetailWithLinks = (
          <EuiFlexItem style={{ minHeight: 220 }}  className="euiPanel" key={project.id} id={project.id}>
            <ProjectDetails
              key={project.id + 'projectId'}
              description={project.description}
              iconUrl={addBasePath(project.icon)}
              title={project.title}
              quickLinks={this.props.quickLinks}
              defaultNaviagationLink={addBasePath('/app/kibana#/discover')}
            />
          </EuiFlexItem>
        );
        return projectDetailWithLinks;
      });
  };

  render() {
    // const cardStyle = {
    //   width: '250px',
    //   'minWidth': '200px'
    // };

    const project = this.props.projects;
    const title = this.props.title;
    return (
      <EuiPage className="home">
        { /* <EuiSpacer size="s" />
        <EuiFlexGroup
          justifyContent="flexEnd"
        >
          <EuiFlexItem grow={false}>
            <select className="kuiSelect">
              <option>FireFly</option>
              <option>PAAS</option>
              <option>TAAS</option>
              <option>DATA APPLICATION</option>
            </select>
          </EuiFlexItem>
    </EuiFlexGroup> */}

        <EuiSpacer size="s" />

        <EuiPageHeader>
          <EuiTitle size="l" className="appMainTitleHeader">
            <h1>{title}</h1>
          </EuiTitle>
        </EuiPageHeader>

        { project.length > 0 ? (
          <EuiFlexGroup gutterSize="s" className="applicationMain euiPanel euiPanel--paddingMedium">

            <div paddingSize="s" >
              <EuiTitle>
                <h3>
                  {this.props.projectTitle}
                </h3>
              </EuiTitle>
              <EuiSpacer size="m"/>
              <EuiFlexGrid columns={4}>
                { this.renderProjects(project) }
              </EuiFlexGrid>
            </div>
          </EuiFlexGroup>
        ) : (<Info title={PROJECT_NO_APP_AVAILABLE_MESSAGE_TITLE} description1={PROJECT_NO_APP_AVAILABLE_MESSAGE_DESC1} description2={PROJECT_NO_APP_AVAILABLE_MESSAGE_DESC2}/>)}
      </EuiPage>
    );
  }
}

