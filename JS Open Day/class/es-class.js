/*! (C) Andrea Giammarchi - MIT Style License */
var Class=Class||function(e){"use strict";function N(e,t,n){for(var r,s=[],o=0;o<e.length;o++)r=D(e[o]),p.call(r,i)&&s.push(r[i]),C(r,t,n,!1,!1);return s}function C(e,t,n,r,i){for(var s,o=typeof e!="function",u=y(e),a=0;a<u.length;a++)s=u[a],(o||S.call(E,s)<0)&&M(s,i)&&(p.call(t,s)&&B("duplicated: "+s),P(n,t,s,g(e,s),r))}function k(e,t){var n=function(){};return e&&""+t!=""+n?function(){return t.apply(this,arguments)}:n}function L(e,t,n,r){var i=O(t,r);m(e,t,{enumerable:!1,configurable:i,writable:i,value:n})}function A(e){return e?(e<65||90<e)&&(e<97||122<e)&&e!==95:!0}function O(e,t){return t?!_(e):!0}function M(e,f){return e!==t&&e!==n&&e!==r&&e!==s&&e!==o&&e!==u&&e!==a&&(f||e!==i)}function _(e){for(var t,n=0;n<e.length;n++){t=e.charCodeAt(n);if((t<65||90<t)&&t!==95)return!1}return!0}function D(t){if(typeof t=="object")return t;t.length&&B((t.name||"Class")+" should not expect arguments");for(var n,r,i,s={init:t},o=t.prototype;o&&o!==e.prototype;o=w(o))for(n=0,i=y(o);n<i.length;n++)r=i[n],M(r,!1)&&!p.call(s,r)&&m(s,r,g(o,r));return s}function P(e,t,n,r,i){var s=p.call(r,"value"),o,u;if(i){if(p.call(t,n))return}else s?(u=r.value,typeof u=="function"&&x(u)&&(r.value=j(e,n,u,i))):(F(e,n,r,"get"),F(e,n,r,"set"));o=O(n,i),r.enumerable=!1,r.configurable=o,s&&(r.writable=o),m(t,n,r)}function H(e,t){for(var n,r,i=0;i<e.length;i++){n=e[i];for(r in n)p.call(n,r)&&!p.call(t,r)&&B(r+" is not implemented")}}function B(e){try{console.warn(e)}catch(t){}}function j(e,t,n,r){return function(){p.call(this,u)||L(this,u,null,r);var i=this[u],s=this[u]=e[t],o=n.apply(this,arguments);return this[u]=i,o}}function F(e,t,n,r,i){p.call(n,r)&&x(n[r])&&(n[r]=j(g(e,t),r,n[r],i))}var t="constructor",n="extends",r="implements",i="init",s="prototype",o="static",u="super",a="with",f="__proto__",l=["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],c={}[l[2]]||function(e){for(var t in this)if(e===t)return this.hasOwnProperty(e);return!1},h=!c.call({valueOf:0},l[5]),p=e[l[0]],d=e.create||function(e){var t=this instanceof d;return d[s]=t?v:e,t?this:new d},v=d[s],m=e.defineProperty,g=e.getOwnPropertyDescriptor,y=e.getOwnPropertyNames||function(e){var t=[],n,r;for(r in e)p.call(e,r)&&t.push(r);if(h)for(n=0;n<l.length;n++)r=l[n],p.call(e,r)&&t.push(r);return t},b=e.getPrototypeOf,w=b||function(e){return e[f]||null},E=y(function(){}),S=E.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},x=(""+function(){this["super"]()}).indexOf(u)<0?function(){return!0}:function(e){var t=""+e,n=t.indexOf(u);return n<0?!1:A(t.charCodeAt(n-1))&&A(t.charCodeAt(n+5))};try{m({},"{}",{})}catch(T){"__defineGetter__"in{}?(m=function(e,t,n){return p.call(n,"value")?e[t]=n.value:(p.call(n,"get")&&e.__defineGetter__(t,n.get),p.call(n,"set")&&e.__defineSetter__(t,n.set)),e},g=function(e,t){var n=e.__lookupGetter__(t),r=e.__lookupSetter__(t),i={};return n||r?(n&&(i.get=n),r&&(i.set=r)):i.value=e[t],i}):(m=function(e,t,n){return e[t]=n.value,e},g=function(e,t){return{value:e[t]}})}return function(e){var i=p.call(e,t),u=p.call(e,n),l=u&&e[n],c=u&&typeof l=="function",h=c?l[s]:l,v=i?e[t]:k(c,l),m=u&&i&&x(v),g=u?d(h):v[s],y,w;return m&&(v=j(h,t,v,!1)),p.call(e,a)&&(y=N([].concat(e[a]),g,h),w=y.length,w&&(v=function(e){return function(){var t=0;while(t<w)y[t++].call(this);return e.apply(this,arguments)}}(v),v[s]=g)),p.call(e,o)&&C(e[o],v,h,!0,!0),u&&(l!==h&&C(l,v,h,!0,!0),v[s]=g),g[t]!==v&&L(g,t,v,!1),C(e,g,h,!1,!0),p.call(e,r)&&H([].concat(e[r]),g),u&&!b&&L(g,f,h,!1),v}}(Object);