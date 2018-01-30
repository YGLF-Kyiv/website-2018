import { isInBrowser } from './common';

export function gaTrack(options) {
  const { hitType = 'event', eventCategory, eventAction, eventLabel } = options;
  if (isInBrowser() && window.ga) {
    console.log('Tracking QA event', options);
    window.ga('send', { hitType, eventCategory, eventAction, eventLabel });
  }
}
