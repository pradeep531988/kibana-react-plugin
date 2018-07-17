import React from 'react';
import PropTypes from 'prop-types';
import { ProjectDetails } from '../projectDetails/projectDetails';
import chrome from 'ui/chrome';
import './home.less';

import {
  EuiPageHeader,
  EuiTitle,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentBody,
  EuiText,
  EuiTabs,
  EuiPage,
  EuiTab,
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

    };
  }


  renderProjects = (projects) => {

    const addBasePath  = chrome.addBasePath;
    const quickLinks = this.props.quickLinks;
    if (projects === undefined) {
      return  `Loading Projects`;
    }
    return projects 
      .map((project) => {
        const projectDetailWithLinks = (
          <EuiFlexItem style={{ minHeight: 190 }}  className="euiPanel" key={project.id}>
            <ProjectDetails
              description={project.description}
              iconUrl={addBasePath(project.icon)}
              title={project.title}
              quickLinks={this.props.quickLinks}
              defaultNaviagationLink={addBasePath('/app/kibana#/discover')}
            />
          </EuiFlexItem>
        );
        console.log('quick Links' + quickLinks);
        return projectDetailWithLinks;
      });
  };

  render() {
    const cardStyle = {
      width: '250px',
      'minWidth': '200px'
    };


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

        <EuiFlexGroup gutterSize="s" className="applicationMain euiPanel euiPanel--paddingMedium">
          <EuiPanel paddingSize="s" style={{ border: 0 }}>
            <EuiTitle>
              <h3>
                    Please Select one of the Application
              </h3>
            </EuiTitle>
            <EuiSpacer size="m"/>
            <EuiFlexGrid columns={4}>
              { this.renderProjects(this.props.projects) }
            </EuiFlexGrid>
          </EuiPanel>
        </EuiFlexGroup>
        <EuiSpacer size="s" />
      </EuiPage>
    );
  }
}

