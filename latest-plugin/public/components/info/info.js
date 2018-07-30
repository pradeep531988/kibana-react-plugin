import React from 'react';
import genericLogo from '../../icons/genericLogo.png';
import './info.less';

import {

  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiSpacer
} from '@elastic/eui';

export default function Info({ title, description1, description2 }) {
  localStorage.removeItem('app');
  return (
    <div>

      <EuiSpacer size="l" />

      <EuiFlexGroup
        gutterSize="s"
        justifyContent="center"
      >
        <EuiFlexItem grow={false}>

          <img
            className="projectIcon"
            src={genericLogo}
            alt=""
          />
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFlexGroup
        gutterSize="m"
        justifyContent="center"
      >
        <EuiText>
          <h1 className="infoText">
            {title}
          </h1>
        </EuiText>
      </EuiFlexGroup>
      <EuiSpacer size="l" />

      <EuiFlexGroup
        gutterSize="m"
        justifyContent="center"
      >
        <EuiText >
          <h2  className="infoText">
            {description1}
          </h2>
        </EuiText>
      </EuiFlexGroup>
      <EuiSpacer size="m" />

      <EuiFlexGroup
        gutterSize="m"
        justifyContent="center"
      >
        <EuiText >
          <h2  className="infoText">
            {description2}
          </h2>
        </EuiText>
        <EuiSpacer size="s" />
      </EuiFlexGroup>
      <EuiSpacer size="l" />
    </div>
  );
}
