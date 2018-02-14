import React, { PropTypes as toBe } from 'react';

const RYTHM = 45;

export default class FitToRythm extends React.Component {
  static propTypes = {
    chidren: toBe.oneOfType([toBe.element]), // add more types
    className: toBe.string,
  };

  static defaultProps = {
    className: '',
  };

  constructor() {
    super();
    this.resize = this.resize.bind(this);
  }


  resize() {
    this.elToFit.removeAttribute('style');
    const height = this.elToFit.offsetHeight;
    const calcHeight = Math.ceil(height / RYTHM) * RYTHM;
    this.elToFit.style.height = `${calcHeight}px`;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.resize();

    window.addEventListener('resize', this.resize);
  }

  render() {
    const { children, className } = this.props;

    return (
      <div className={`fit-to-rythm ${className}`} ref={(el) => { this.elToFit = el; }}>
        { children }
      </div>
    );
  }
}
