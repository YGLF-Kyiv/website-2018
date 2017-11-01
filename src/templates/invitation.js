import React from 'react';
import InvitationBlock from '../components/InvitationBlock/InvitationBlock';

import { gaTrack } from '../utils/ga';
import { isInBrowser } from '../utils/common';

export default class InvitationTemplate extends React.Component {

  componentWillMount() {
    const shouldTrack = this.props.pathContext.track;
    const { data } = this.props;
    if(shouldTrack) {
      gaTrack({
        eventCategory: 'invitation',
        eventAction: 'open',
        eventLabel: data.invitation.name,
      });
    }
    this.loadYoutubeApi();
  }

  loadYoutubeApi() {
    if (isInBrowser()) {
      const tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }

  render() {
    const { data, pathContext } = this.props;
    return (
      <div className="lines-bg">
        <InvitationBlock data={data} shouldTrack={pathContext.track} />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query InvitiationByPath($path: String!) {
  invitation(path: { eq: $path } ) {
      id
      path
      video
      name
      text
    }
  }`;
