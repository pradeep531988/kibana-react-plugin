import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ProjectDetails } from '../project_details/project_details';
import chrome from 'ui/chrome';
import './home.less';
import Info from '../info/info';
import { PROJECT_NO_APP_AVAILABLE_MESSAGE_TITLE, PROJECT_NO_APP_AVAILABLE_MESSAGE_DESC1,
  PROJECT_NO_APP_AVAILABLE_MESSAGE_DESC2 } from '../../const/flip_constants';
import { RecentlyAccessed, recentlyAccessedShape } from '../recently_accessed/recently_accessed';
import { recentlyAccessed } from 'ui/persisted_log';

import $ from 'jquery';

import {
  EuiPageHeader,
  EuiTitle,
  EuiPage,
  EuiFlexItem,
  EuiFlexGrid,
  EuiSpacer,
  EuiFlexGroup,
  EuiPanel,
  EuiTextColor
} from '@elastic/eui';

export class Home extends React.Component {


  constructor(props) {
    super(props);
    console.log(props);
    this.state = {

      /* recentlyAccessed: recentlyAccessed.get().map(item => {
        item.link = chrome.addBasePath(item.link);
        return item;
      })*/
    };
  }
  componentDidMount() {
    //$('.global-nav-link a[href$="flip-plugin"]').css('display', 'none');
    try {
      if (localStorage.getItem('app')) {
        $('#' + localStorage.getItem('app')).addClass('activeApplication');
      }
    }catch(e) {
      console.log('unable to set style for application selected');
    }

    console.log(this.state.recentlyAccessed);

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
          <EuiFlexItem style={{ minHeight: 210, width: 190, minWidth: 190 }}  className="euiPanel" key={project.id} id={project.id}>
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
    const recentlyAccessed = [
      {
        label: 'my vis',
        link: 'link_to_my_vis',
        id: '1'
      }
    ]; //TODO: To make this dynamic

    let recentlyAccessedPanel;
    if (recentlyAccessed.length > 0) {
      recentlyAccessedPanel = (
        <Fragment>
          <RecentlyAccessed
            recentlyAccessed={recentlyAccessed}
          />
          <EuiSpacer size="l" />
        </Fragment>
      );
    }

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

        <EuiPageHeader>
          <EuiTitle size="l" className="appMainTitleHeader">
            <h1>{title}</h1>
          </EuiTitle>
        </EuiPageHeader>

        { project.length > 0 ? (
          <div>
            <EuiFlexGroup gutterSize="s" className="applicationMain euiPanel euiPanel--paddingMedium">

              <div >
                <EuiTitle  size="s" className="subdued">
                  <h4>
                    <EuiTextColor color="subdued">
                      {this.props.projectTitle}
                    </EuiTextColor>
                  </h4>
                </EuiTitle>
                <EuiSpacer size="s"/>
                <EuiFlexGrid columns={4}>
                  { this.renderProjects(project) }
                </EuiFlexGrid>
              </div>
            </EuiFlexGroup>
            <EuiSpacer size="m"/>
            <EuiFlexGroup gutterSize="s" className="applicationMain euiPanel euiPanel--paddingMedium">
              { recentlyAccessedPanel }
            </EuiFlexGroup>
          </div>
        ) : (
          <Info title={PROJECT_NO_APP_AVAILABLE_MESSAGE_TITLE} description1={PROJECT_NO_APP_AVAILABLE_MESSAGE_DESC1} description2={PROJECT_NO_APP_AVAILABLE_MESSAGE_DESC2}/>)}
      </EuiPage>
    );
  }
}

