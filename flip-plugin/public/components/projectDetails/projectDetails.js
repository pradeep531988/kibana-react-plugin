import './projectDetails.less';
import projectLogo from '../../icons/projectLogo.png';
import QuickLinks from  '../quickLinks/quickLinks';
import React from 'react';
import PropTypes from 'prop-types';
import chrome from 'ui/chrome';

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

  renderQuickLinks = (quickLinks) => {

    const addBasePath  = chrome.addBasePath;
    const kbnBaseUrl = chrome.getInjected('kbnBaseUrl');

    return this.state.quickLinks
      .filter((directory) => {
        return (directory.showOnHomePage && directory.showAsQuickLinks);
      })
      .map((quickLink) => {
        return (
          <EuiFlexItem className="" >
            <QuickLinks
              iconUrl={addBasePath(quickLink.icon)}
              title={quickLink.title}
              url={addBasePath(quickLink.path)}
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
      <EuiFlexGroup responsive={true}>
        <EuiFlexItem className="projectContent" grow={true}>
          <a href={this.props.defaultNaviagationLink} className="projectLink">
            <EuiTitle size="s" className="projectTitle">
              <EuiFlexGrid gutterSize="s">
                <EuiFlexItem>
                  { optionalImg }
                </EuiFlexItem>
                <EuiFlexItem className="projectTitlePosition">
                  {this.props.title}
                </EuiFlexItem>
              </EuiFlexGrid>
            </EuiTitle>
            <EuiSpacer size="l" />
            <EuiText className="projectBody">
              <p>
                <EuiTextColor color="subdued">
                  {this.props.description}
                </EuiTextColor>
              </p>
            </EuiText>
            <EuiSpacer size="m" />
          </a>
          <EuiFlexGrid columns={4} gutterSize="s" className="quickLinks">
            { this.renderQuickLinks(this.state.QuickLinks) }
          </EuiFlexGrid>
          <EuiSpacer size="s" />
        </EuiFlexItem>
      </EuiFlexGroup>
    );


    return (
      <div>
        { content }
      </div>
    );
  }
}

ProjectDetails.propTypes = {
  description: PropTypes.string.isRequired,
  iconUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
};
