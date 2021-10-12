// ==UserScript==
// @name         code editable
// @namespace    csdnCode
// @version      0.1
// @description  try to take over the world!
// @author       xinyou
// @include       https://*csdn*/*
// @grant        none
// @updateURL https://github.com/weiwoxinyou/codeEditabel/blob/master/codeEditable.js
// ==/UserScript==

(function() {
    'use strict';
    window.onload = ()=>{
        let code = document.querySelectorAll('code')
        for (let i=0; i<code.length; ++i){
            code[i].setAttribute('contenteditable', true)
        }
    }
})();