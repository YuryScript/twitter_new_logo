// ==UserScript==
// @name         Twitter new logo
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Change twitter logo & name
// @author       YuryScript
// @match        *://*.twitter.com/*
// @match        *://x.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @updateURL        https://github.com/YuryScript/twitter_new_logo/blob/master/main.user.js
// @downloadURL      https://github.com/YuryScript/twitter_new_logo/blob/master/main.user.js
// @supportURL       https://github.com/YuryScript/twitter_new_logo/issues
// @homepageURL      https://github.com/YuryScript/twitter_new_logo
// @grant            GM_getResourceText
// @grant            GM_addStyle
// ==/UserScript==

const yourTwitterName = "ерня";

(function () {
  "use strict";
  requestAnimationFrame(changeLogo);
})();

function changeLogo() {
  const wrapper = document.querySelector(
    "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-dnmrzs.r-1vvnge1 > h1 > a"
  );

  if (wrapper === null) requestAnimationFrame(changeLogo);

  const name = document.createElement("div");
  name.innerText = yourTwitterName;

  wrapper.style["flex-flow"] = "row";

  name.style["color"] = "white";
  name.style["font-size"] = "40px";
  name.style["line-height"] = "50px";
  name.style["font-family"] =
    '"TwitterChirp",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif';
  name.style["margin-left"] = "-7px";

  const logo = document.querySelector(
    "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-dnmrzs.r-1vvnge1 > h1 > a > div"
  );
  logo.style["min-hight"] = "52px";
  logo.style["min-width"] = "52px";

  wrapper.append(name);
}
