// ==UserScript==
// @name         fc-ab-root blocker
// @namespace    http://tampermonkey.net/
// @version      2024-07-11
// @description  Blocks fc-ab-root disable adblock popup on all websites and enables scrolling
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant        none
// @updateURL    https://raw.githubusercontent.com/ultronstudio/ultronstudio/main/Tampermonkey/fc-ab-blocker.js
// ==/UserScript==

(function() {
    'use strict';

    function enableScrolling() {
        document.body.style.overflow = 'auto';
    }

    function hideElements() {
        // Select all elements with class 'fc-ab-root'
        let fcAbRootElements = document.querySelectorAll('.fc-ab-root');
        fcAbRootElements.forEach(element => {
            element.style.display = 'none';
        });

        // Select all elements with class that starts with 'fc-ab-'
        let fcAbElements = document.querySelectorAll('[class^="fc-ab-"]');
        fcAbElements.forEach(element => {
            element.style.display = 'none';
        });

        // Enable scrolling on body
        enableScrolling();
    }

    // Initial hide and enable scrolling
    hideElements();

    // MutationObserver to hide elements that are dynamically added to the DOM and enable scrolling
    let observer = new MutationObserver(hideElements);
    observer.observe(document.body, { childList: true, subtree: true });
})();