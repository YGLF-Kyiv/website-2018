import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IntroStage from './IntroStage';
import IntroMovieClip from './IntroMovieClip';

import './Intro.css';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.canvas = null;
    this.isMobile = window.innerWidth < 768;

    this.resizeTimeout = null;
  }

  componentDidMount() {
    this.initIntro();
  }

  initIntro() {
    if (!window.createjs) {
      setTimeout(this.initIntro.bind(this), 1000);
      return;
    }
    this.canvas = ReactDOM.findDOMNode(this.refs.canvas);

    this.introStage = new IntroStage(this.canvas);

    this.resize();

    window.addEventListener('resize', this.resize.bind(this));
    window.addEventListener('orientationchange', this.resize.bind(this));
    this.initIntroMovie();
  }

  initIntroMovie() {
    setTimeout(() => {
      this.introMovieClip = new IntroMovieClip(this.introStage.stage, () => {
        this.introStage.bind();
        this.introMovieClip.remove();
      });
    }, 0);
  }

  resize() {
    this.setCanvasSize(window.innerWidth, this.isMobile ? 224 : 674);
  }

  setCanvasSize(width, height) {
    this.canvas.setAttribute(
      'style',
      'width:' + width + 'px; height:' + height + 'px;'
    );
    this.canvas.setAttribute('width', width * 2);
    this.canvas.setAttribute('height', height * 2);
  }

  render() {
    return (
      <div className="intro">
        <canvas ref="canvas" />
      </div>
    );
  }
}

export default Intro;
