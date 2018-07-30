import './project_details.less';
import projectLogo from '../../icons/projectLogo.png';
import QuickLinks from  '../quick_links/quick_links';
import React from 'react';
import PropTypes from 'prop-types';
import chrome from 'ui/chrome';
import $ from 'jquery';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiTitle,
  EuiText,
  EuiTextColor,
  EuiFlexGrid,
  EuiSpacer
} from '@elastic/eui';

export class ProjectDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.projects,
      quickLinks: this.props.quickLinks
    };
  }

  componentDidMount() {
    // $('.projectContent a').attr('href', '#'); //TODO: Remove in next Sprint
  }

  onProjectSelection = (projectName) => {
    localStorage.setItem('app', projectName);
  }



  renderQuickLinks = (quickLinks, projectName) => {

    const addBasePath  = chrome.addBasePath;
    const kbnBaseUrl = chrome.getInjected('kbnBaseUrl');

    return this.state.quickLinks
      .filter((directory) => {
        return (directory.showOnHomePage && directory.showAsQuickLinks);
      })
      .map((quickLink, index) => {
        return (
          <EuiFlexItem className="quickLinkGrid" key={index + 'quickLinkItem'} >
            <QuickLinks
              iconUrl={addBasePath(quickLink.icon)}
              title={quickLink.title}
              url={addBasePath(quickLink.path)}
              projectName={projectName}
              wrapInPanel={false}
            />
          </EuiFlexItem>
        );
      });
  };




  render() {

    let optionalImg;
    if (this.props.iconUrl) {
      optionalImg = (
        <img
          className="projectIcon"
          src={projectLogo}
          alt=""
        />
      );
    }
    const content = (
      <EuiFlexItem className="projectContent" grow={true} >
        <a href={this.props.defaultNaviagationLink} className="projectLink" id={this.props.title} onClick={this.onProjectSelection.bind(this, this.props.title)}>
          <EuiTitle size="s" className="projectTitle">
            <EuiFlexGrid gutterSize="s">
              <EuiFlexItem className="projectTitleImage">
                { optionalImg }
              </EuiFlexItem>
              <EuiFlexItem className="projectTitlePosition">
                {this.props.title}
              </EuiFlexItem>
            </EuiFlexGrid>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiText className="projectBody">
            <EuiTextColor color="subdued">
              {this.props.description}
            </EuiTextColor>
          </EuiText>
          <EuiSpacer size="s" />
        </a>
        <EuiFlexGrid columns={4} gutterSize="s" className="quickLinks">
          { this.renderQuickLinks(this.state.QuickLinks, this.props.title) }
        </EuiFlexGrid>
        <EuiSpacer size="s" />
      </EuiFlexItem>
    );


    return (
      <EuiFlexGroup responsive={true}>
        { content }
      </EuiFlexGroup>

    );
  }
}

ProjectDetails.propTypes = {
  description: PropTypes.string.isRequired,
  iconUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
};
