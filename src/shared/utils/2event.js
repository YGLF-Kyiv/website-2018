import { isInBrowser } from '../../shared/utils/common';

export function ticketsWidget() {
  if (!isInBrowser()) return;

  window.widgetOptions = { bg_color: 'fcfcfc', id: 1037785, lang: 'en', tickets_type: '' };
  (function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = "https://2event.com/js/widget-tickets.js";
    document.getElementsByTagName('head')[0].appendChild(script);
  })();
}
