(()=>{"use strict";var t={67:(t,n,r)=>{t.exports=r.p+"assets/images/9c4faee7513f87e9b3b3.png"},149:(t,n,r)=>{t.exports=r.p+"assets/images/8932205d8701217166c9.png"},20:(t,n,r)=>{t.exports=r.p+"assets/images/a4a49dfe20c4a1a2c681.png"}},n={};function r(e){var s=n[e];if(void 0!==s)return s.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var n=r.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var e=n.getElementsByTagName("script");e.length&&(t=e[e.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{const t="https://randomuser.me/api/",n=async n=>{const r=n?`${t}${n}`:t;try{const t=await fetch(r);return(await t.json()).results[0]}catch(t){console.log("Fetch Error",t)}};var e=r(67),s=r(20),a=r(149);const c=async()=>{const t=await n();return`\n    <div class="About">\n      <div class="card">\n        <div class="card_details">\n          <div class="card_photo center circle">\n            <img src="${t.picture.large}" alt="${t.name.first}">\n            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;"\n              xml:space="preserve">\n              <circle cx="50" cy="50" r="40" />\n            </svg>\n          </div>\n          <p class="card_title">Hi, My name is</p>\n          <p class="card_value">${t.name.first} ${t.name.last}</p>\n        </div>\n        <div class="card_userdata">\n          <ul>\n            <li>${t.email}</li>\n            <li>${t.location.country}</li>\n          </ul>\n        </div>\n        <div class="card_social">\n          <a href="https://twitter.com/gndx">\n            <img src="${s}" />\n          </a>\n          <a href="https://github.com/gndx">\n            <img src="${e}" />\n          </a>\n          <a href="https://instagram.com/gndx">\n            <img src="${a}" />\n          </a>\n        </div>\n      </div>\n    </div>\n  `};!async function(){document.getElementById("main").innerHTML=await c()}()})()})();