// ==UserScript==
// @name         Github Disable Publish
// @namespace    https://chevdor.com/
// @version      0.1
// @description  Disable the publish button until you **really** need it
// @author       Chevdor
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js

// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

waitForKeyElements(".js-publish-release", changeFontColor);

function changeFontColor(btn) {
  if (btn) {
    console.info("Publish button found");
    btn.prop("disabled", true);
    btn.html("Publish Disabled by Script");
  } else {
    console.info("Publish button not found");
  }
}
