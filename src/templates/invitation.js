import React from 'react';

export default function Template({data}) {
  return (
    <div className="container">
      <h1>{data.invitation.name}</h1>
      <iframe src={data.invitation.video}
              width="560" height="315" frameBorder="0" allowFullScreen></iframe>
      <p>{data.invitation.text}</p>
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
