import React from 'react';
import PropTypes from 'prop-types';
import './quick_links.less';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiTitle,
  EuiTextColor
} from '@elastic/eui';

export default function QuickLinks({ iconUrl, title, url, projectName, wrapInPanel }) {
  const optionalImg = (
    <img
      className="projectQuickLinkIcon"
      src={iconUrl}
      alt=""
    />
  );

  function onProjectSelection(projectName, ele) {debugger;
    localStorage.setItem('app', projectName);
  }

  const content = (

    <EuiFlexItem grow={true} className="quickLinkFlexItem">
      {optionalImg}
      <p>
        {title}
      </p>
    </EuiFlexItem>
  );

  let quickLinksDisplay = content;
  if (wrapInPanel) {
    quickLinksDisplay = (
      <EuiPanel>
        {content}
      </EuiPanel>
    );
  }



  return (
    <a
      href={url}
      className="euiLink synopsis"
      data-test-subj={`homeSynopsisLink${title.toLowerCase()}`}
      onClick={onProjectSelection.bind(this, projectName)}
    >
      { quickLinksDisplay }
    </a>
  );
}

QuickLinks.propTypes = {
  iconUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
