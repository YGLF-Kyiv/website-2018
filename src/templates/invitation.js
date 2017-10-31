import React from 'react';
import InvitationBlock from '../components/InvitationBlock/InvitationBlock';

export default function Template({data}) {
  return (
    <div className="lines-bg">
      <InvitationBlock data={data} />
    </div>
  );
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
