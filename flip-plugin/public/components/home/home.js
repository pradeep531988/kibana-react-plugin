import React from 'react';
import PropTypes from 'prop-types';
import { Synopsis } from '../synopsis/synopsis';
import chrome from 'ui/chrome';

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


  renderDirectories = (category) => {

    const addBasePath  = chrome.addBasePath;
    const kbnBaseUrl = chrome.getInjected('kbnBaseUrl');

    console.log("kbanBaseURl"+kbnBaseUrl);
    console.log('basepath :'+addBasePath(`#/home/tutorial/1`));

    return this.props.directories
      .map((directory) => {
        return (
          <EuiFlexItem style={{ minHeight: 150 }} key={directory.id}>
            <Synopsis
              description={directory.description}
              iconUrl={addBasePath(directory.icon)}
              title={directory.title}
              url={addBasePath(directory.path)}
            />
          </EuiFlexItem>
        );
      });
  };

  render() {
    const title = this.props.title;
    return (
      <EuiPage className="home">
        <EuiSpacer size="s" />
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
        </EuiFlexGroup>

        <EuiSpacer size="s" />

        {/* <EuiPageHeader>
          <EuiTitle size="l">
            <h1>{title}</h1>
          </EuiTitle>
         </EuiPageHeader>  */}

        <EuiPageBody className="homeIntroductionContainer">
          <EuiPageContent>
            <EuiPageContentHeader>
              <EuiTitle size="l">
                <h1>{title}</h1>
              </EuiTitle>
            </EuiPageContentHeader>
            <EuiPageContentBody>
              <EuiText>
                <h3>Flip Application Rendered as plugin using REACT</h3>
              </EuiText>
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
        <EuiSpacer size="l" />
        <EuiFlexGroup className="kuiVerticalRhythm homeOptionsContainer">
          <EuiFlexItem>
            <EuiPanel paddingSize="l">
              <EuiTitle>
                <h3>
                Visualize and Explore Data
                </h3>
              </EuiTitle>
              <EuiSpacer size="m"/>
              <EuiFlexGrid columns={4}>
                { this.renderDirectories(this.props.directories) }
              </EuiFlexGrid>
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPage>
    );
  }
}

