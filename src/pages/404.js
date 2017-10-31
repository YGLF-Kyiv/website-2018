import React from 'react'
import Intro from '../components/Intro/Intro';

const NotFoundPage = () => (
  <div className="not-found">
    <Intro />
    <div className="container-fluid">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </div>
)

export default NotFoundPage
