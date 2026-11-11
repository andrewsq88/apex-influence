/** Live production host. apexinfluence.com is not owned by this site, so nothing should point there. */
export const SITE_URL = 'https://apex-influence.vercel.app';

export const ADSENSE_CLIENT = 'ca-pub-2857342591276131';
export const ADSENSE_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;

/** Browser-only record of the visitor's cookie choice ("accepted" or "declined"). */
export const CONSENT_STORAGE_KEY = 'apex_cookie_consent_v1';

/**
 * Plain inline script for <head>. If the visitor already accepted, it adds the
 * AdSense tag as an ordinary <script async> before hydration. It also exposes
 * window.__apexLoadAds so the cookie banner can do the same after Accept.
 * No next/script, so there is no data-nscript attribute on the tag.
 */
export const ADSENSE_BOOTSTRAP = `(function(){
  var SRC=${JSON.stringify(ADSENSE_SRC)};
  function load(){
    if(document.querySelector('script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))return;
    var s=document.createElement('script');s.async=true;s.src=SRC;s.crossOrigin='anonymous';
    document.head.appendChild(s);
  }
  window.__apexLoadAds=load;
  try{if(localStorage.getItem(${JSON.stringify(CONSENT_STORAGE_KEY)})==='accepted')load();}catch(e){}
})();`;
