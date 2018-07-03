import './projectDetails.less';
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
  EuiFlexGrid
} from '@elastic/eui';

export class ProjectDetails extends React.Component {
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
    console.log('quickLinks' + this.state.quickLinks);

    return this.state.quickLinks
      .filter((directory) => {
       return directory.showOnHomePage;
      })
      .map((quickLink) => {
        return (
          <EuiFlexItem>
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
          src={this.props.iconUrl}
          alt=""
        />
      );
    }
    const content = (
      <EuiFlexGroup responsive={true}>
        <EuiFlexItem className="projectContent" grow={true}>

          <EuiTitle size="s" className="projectTitle">
            <h4>
              { optionalImg } {this.props.title}
            </h4>
          </EuiTitle>
          <EuiText className="projectBody">
            <p>
              <EuiTextColor color="subdued">
                {this.props.description}
              </EuiTextColor>
            </p>
          </EuiText>
          <EuiFlexGrid columns={2} gutterSize="s" className="quickLinks">
            { this.renderQuickLinks(this.state.QuickLinks) }
          </EuiFlexGrid>
        </EuiFlexItem>
        
      </EuiFlexGroup>
    );

    let synopsisDisplay = content;
    if (this.props.wrapInPanel) {
      synopsisDisplay = (
        <EuiPanel>
          {content}
        </EuiPanel>
      );
    }

    return (
      <div>
        { synopsisDisplay }
      </div>
    );
  }
}

ProjectDetails.propTypes = {
  description: PropTypes.string.isRequired,
  iconUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
};
