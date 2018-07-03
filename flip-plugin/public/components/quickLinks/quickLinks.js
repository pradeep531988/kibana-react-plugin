import React from 'react';
import PropTypes from 'prop-types';
import './quickLinks.less';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiTitle
} from '@elastic/eui';

 export default function QuickLinks({ iconUrl, title, url, wrapInPanel }) {
  const optionalImg = (
    <img
      className="projectIcon"
      src={iconUrl}
      alt=""
    />
  );


  const content = (
     
      <EuiFlexItem grow={true} className="quickLinkFlexItem">
        <EuiTitle size="s">
          <h4>
            {optionalImg} {title}
          </h4>
        </EuiTitle>
      </EuiFlexItem>
  );

  let quickLinksDisplay = content;
  if (wrapInPanel) {
    quickLinksDisplay = (
      <EuiPanel className="">
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
