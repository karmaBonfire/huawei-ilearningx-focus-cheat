// ==UserScript==
// @name         Keep Focus
// @namespace    none.serjio.huawei.keepfocus
// @version      0.2
// @description  Prevents iLearningX system from detecting focus loss. Switch them tabs!
// @author       You
// @include      https://*huawei.com*
// @icon         https://www.google.com/s2/favicons?domain=huawei.com
// @run-at document-start
// @grant unsafeWindow
// @require     https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    'use strict';

    let deny_event = function(event) { event.stopImmediatePropagation(); event.stopPropagation(); event.preventDefault(); return false; }

    let conditional_deny_event = function(condition) {
        return function(event) {
            if (condition(event)) {
                event.stopImmediatePropagation(); event.stopPropagation(); event.preventDefault(); return false;
            } else {
                return true;
            }
        }
    }

    let mouse_not_inside = function(event) {
        return (event.pageX < 12 || event.pageY < 12 || event.pageX > (window.width - 12) || event.pageY > (window.height - 12))
    }

    document.onblur = deny_event;
    window.onblur = deny_event;

    document.onmousemove = conditional_deny_event(mouse_not_inside);
    window.onmousemove = conditional_deny_event(mouse_not_inside);

    document.onmouseout = deny_event;
    document.onmouseleave = deny_event;
    window.onmouseout = deny_event;
    window.onmouseleave = deny_event;

    document.hasFocus = function() {
        return true;
    }

    document.onvisibilitychange = deny_event;
    $(document).on('visibilitychange', deny_event);


    $(document).ready( function() {
        // document.visibilityState = "visible";
        
        // mouse hack?
        document.onblur = deny_event;
        window.onblur = deny_event;

        document.onmousemove = conditional_deny_event(mouse_not_inside);
        window.onmousemove = conditional_deny_event(mouse_not_inside);

        document.onmouseout = deny_event;
        document.onmouseleave = deny_event;
        window.onmouseout = deny_event;
        window.onmouseleave = deny_event;

    })
    
})();
