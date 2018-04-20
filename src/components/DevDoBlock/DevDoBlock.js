import React, { Component, PropTypes as toBe } from 'react';
import './devdo-block.scss';
// import LazyLoad from 'react-lazyload';
import FitToRhythm from '../FitToRhythm/FitToRhythm';

export default class DevDoBlock extends Component {
  static propTypes = {
    data: toBe.object,
  };

  static defaultProps = {
    data: {}
  };

  render() {
    const {
      title,
      description,
      youtubeID
    } = this.props.data;

    const className = 'devdo-block container container-fluid';
    // const smallClass = this.props.isSmall ? '-small-blocks' : '';

    return (
      <FitToRhythm className={`${className}`}>
        <div className="devdo-block-cols">
          <div className="devdo-block-video">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeID}?rel=0&amp;showinfo=0`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
          <div className="devdo-block-text">
            <h3>{title}</h3>
            <p dangerouslySetInnerHTML={{__html: description}} />
          </div>
        </div>
      </FitToRhythm>
    );
  }
}

// <a href="" name={anchor} className="-no-outline anchor" />
//           <div className="person-block-img">
//             <img
//               src={`${imageSrc}.jpg`}
//               className="-drop-shadow"
//               alt={`${firstName} ${lastName}`}
//             />
//             <SocialIcons data={social} />
//           </div>
//           <div className="person-block-text">
//             <h3>
//               <span className="person-first-name">{firstName}</span>{' '}
//               <span className="person-last-name">{lastName}</span>
//               {
//                 dogName && (
//                   <span className="person-dog-name">& {dogName}</span>
//                 )
//               }
//             </h3>
//             <p>
//               { position && <span className="person-position">{position}</span> }
//               { company && <span className="person-company">{company}</span> }
//             </p>
//             <p dangerouslySetInnerHTML={{__html: description}} />
//           </div>
