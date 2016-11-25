!function(){"use strict";function t(t){return("0"+t).slice(-2)}function e(r,a){var n=r.getDay(),i=r.getDate(),o=r.getMonth(),u=r.getFullYear(),d=r.getHours(),m=r.getMinutes(),l=r.getSeconds();return a.replace(/%([%aAbBcdeHIlmMpPSwyYZz])/g,function(a){var h,g=a[1];switch(g){case"%":return"%";case"a":return s[n].slice(0,3);case"A":return s[n];case"b":return c[o].slice(0,3);case"B":return c[o];case"c":return r.toString();case"d":return t(i);case"e":return i;case"H":return t(d);case"I":return t(e(r,"%l"));case"l":return 0===d||12===d?12:(d+12)%12;case"m":return t(o+1);case"M":return t(m);case"p":return d>11?"PM":"AM";case"P":return d>11?"pm":"am";case"S":return t(l);case"w":return n;case"y":return t(u%100);case"Y":return u;case"Z":return h=r.toString().match(/\((\w+)\)$/),h?h[1]:"";case"z":return h=r.toString().match(/\w([+-]\d\d\d\d) /),h?h[1]:""}})}function r(t){this.date=t}function a(){if(null!==m)return m;if(!("Intl"in window))return!1;var t={day:"numeric",month:"short"},e=new window.Intl.DateTimeFormat((void 0),t),r=e.format(new Date(0));return m=!!r.match(/^\d/)}function n(){if(null!==l)return l;if(!("Intl"in window))return!0;var t={day:"numeric",month:"short",year:"numeric"},e=new window.Intl.DateTimeFormat((void 0),t),r=e.format(new Date(0));return l=!!r.match(/\d,/)}function i(t){var e=new Date;return e.getUTCFullYear()===t.getUTCFullYear()}function o(){var t,e,r;for(e=0,r=w.length;e<r;e++)t=w[e],t.textContent=t.getFormattedDate()}function u(t){var r={weekday:{short:"%a",long:"%A"},day:{numeric:"%e","2-digit":"%d"},month:{short:"%b",long:"%B"},year:{numeric:"%Y","2-digit":"%y"}},n=a()?"weekday day month year":"weekday month day, year";for(var i in r){var o=r[i][t.getAttribute(i)];n=n.replace(i,o||"")}return n=n.replace(/(\s,)|(,\s$)/,""),e(t._date,n).replace(/\s+/," ").trim()}function d(t){var r={hour:t.getAttribute("hour"),minute:t.getAttribute("minute"),second:t.getAttribute("second")};for(var a in r)r[a]||delete r[a];if(0!==Object.keys(r).length){if("Intl"in window){var n=new window.Intl.DateTimeFormat((void 0),r);return n.format(t._date)}var i=r.second?"%H:%M:%S":"%H:%M";return e(t._date,i)}}var s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["January","February","March","April","May","June","July","August","September","October","November","December"];r.prototype.toString=function(){var t=this.timeElapsed();return t?t:"on "+this.formatDate()},r.prototype.timeElapsed=function(){var t=(new Date).getTime()-this.date.getTime(),e=Math.round(t/1e3),r=Math.round(e/60),a=Math.round(r/60),n=Math.round(a/24);return t<0?"just now":e<10?"just now":e<45?e+" seconds ago":e<90?"a minute ago":r<45?r+" minutes ago":r<90?"an hour ago":a<24?a+" hours ago":a<36?"a day ago":n<30?n+" days ago":null},r.prototype.timeAgo=function(){var t=(new Date).getTime()-this.date.getTime(),e=Math.round(t/1e3),r=Math.round(e/60),a=Math.round(r/60),n=Math.round(a/24),i=Math.round(n/30),o=Math.round(i/12);return t<0?"just now":e<10?"just now":e<45?e+" seconds ago":e<90?"a minute ago":r<45?r+" minutes ago":r<90?"an hour ago":a<24?a+" hours ago":a<36?"a day ago":n<30?n+" days ago":n<45?"a month ago":i<12?i+" months ago":i<18?"a year ago":o+" years ago"},r.prototype.microTimeAgo=function(){var t=(new Date).getTime()-this.date.getTime(),e=t/1e3,r=e/60,a=r/60,n=a/24,i=n/30,o=i/12;return r<1?"1m":r<60?Math.round(r)+"m":a<24?Math.round(a)+"h":n<365?Math.round(n)+"d":Math.round(o)+"y"};var m=null,l=null;r.prototype.formatDate=function(){var t=a()?"%e %b":"%b %e";return i(this.date)||(t+=n()?", %Y":" %Y"),e(this.date,t)},r.prototype.formatTime=function(){if("Intl"in window){var t=new window.Intl.DateTimeFormat((void 0),{hour:"numeric",minute:"2-digit"});return t.format(this.date)}return e(this.date,"%l:%M%P")};var h,g,w=[];g="HTMLTimeElement"in window?Object.create(window.HTMLTimeElement.prototype):Object.create(window.HTMLElement.prototype),g.attributeChangedCallback=function(t,e,r){if("datetime"===t){var a=Date.parse(r);this._date=isNaN(a)?null:new Date(a)}var n=this.getFormattedTitle();n&&this.setAttribute("title",n);var i=this.getFormattedDate();i&&(this.textContent=i)},g.getFormattedTitle=function(){if(this._date){if(this.hasAttribute("title"))return this.getAttribute("title");if("Intl"in window){var t={day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"},e=new window.Intl.DateTimeFormat((void 0),t);return e.format(this._date)}return this._date.toLocaleString()}};var f=Object.create(g);f.createdCallback=function(){var t=this.getAttribute("datetime");t&&this.attributeChangedCallback("datetime",null,t)},f.getFormattedDate=function(){if(this._date)return new r(this._date).toString()},f.attachedCallback=function(){w.push(this),h||(o(),h=setInterval(o,6e4))},f.detachedCallback=function(){var t=w.indexOf(this);t!==-1&&w.splice(t,1),w.length||h&&(clearInterval(h),h=null)};var y=Object.create(f);y.getFormattedDate=function(){if(this._date){var t=this.getAttribute("format");return"micro"===t?new r(this._date).microTimeAgo():new r(this._date).timeAgo()}};var v=Object.create(g);v.createdCallback=function(){var t;(t=this.getAttribute("datetime"))&&this.attributeChangedCallback("datetime",null,t),(t=this.getAttribute("format"))&&this.attributeChangedCallback("format",null,t)},v.getFormattedDate=function(){if(this._date){var t=u(this)||"",e=d(this)||"";return(t+" "+e).trim()}},window.RelativeTimeElement=document.registerElement("relative-time",{prototype:f,extends:"time"}),window.TimeAgoElement=document.registerElement("time-ago",{prototype:y,extends:"time"}),window.LocalTimeElement=document.registerElement("local-time",{prototype:v,extends:"time"})}();