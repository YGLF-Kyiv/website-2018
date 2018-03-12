import React, { PropTypes as toBe } from 'react';
import './fit-to-rythm.scss';

const RYTHM = 45;
const VISIBLE_CLASSNAME = '-visible';

export default class FitToRhythm extends React.Component {
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
    this.makeVisible = this.makeVisible.bind(this);
  }

  makeVisible() {
    const currentClassName = this.elToFit.className;
    if (!currentClassName.includes(VISIBLE_CLASSNAME)) {
      this.elToFit.className = `${currentClassName} ${VISIBLE_CLASSNAME}`;
    }
  }

  resize() {
    this.elToFit.removeAttribute('style');
    const height = this.elToFit.offsetHeight;
    const calcHeight = Math.ceil(height / RYTHM) * RYTHM;
    this.elToFit.style.height = `${calcHeight}px`;
    setTimeout(this.makeVisible, 200);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  componentDidMount() {
    setTimeout(this.resize, 250);
    setTimeout(this.resize, 500);

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
