import React from 'react';
import PropTypes from 'prop-types';
import './quickLinks.less';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiTitle,
  EuiTextColor
} from '@elastic/eui';

 export default function QuickLinks({ iconUrl, title, url, wrapInPanel }) {
  const optionalImg = (
    <img
      className="projectQuickLinkIcon"
      src={iconUrl}
      alt=""
    />
  );


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
