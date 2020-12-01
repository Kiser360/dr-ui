(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{OVoB:function(e,t,n){var o=n("x7NB");o=o.default||o,e.exports={component:o,props:{frontMatter:{title:"Introduction to split pages",description:"An introduction to use split pages.",order:1,splitPage:!0,hideFeedback:!0,products:["Documentation"],contentType:"guide"}}}},x7NB:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=(n("yr+R"),n("cQZ0"),a(n("C5U3")));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=d(e);if(t){var r=d(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m={title:"Introduction to split pages",description:"An introduction to use split pages.",order:1,splitPage:!0,hideFeedback:!0,products:["Documentation"],contentType:"guide",headings:[]},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(f,e);var t,n,a,i=s(f);function f(){return u(this,f),i.apply(this,arguments)}return t=f,(n=[{key:"render",value:function(){var e=this.props;return o.default.createElement(r.default,l({},e,{frontMatter:m}),o.default.createElement("div",null,o.default.createElement("p",null,"This page demonstrates the split page pattern and provides steps on how to implement it on a site."),o.default.createElement("p",null,"To improve internal developer experience, the pattern splits a longer page into multiple markdown files (also known as markdown partial files) and then imports the markdown files into a single page (also known as the main page)."),o.default.createElement("p",null,"This split page pattern is used by the following pages:"),o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement("a",{href:"https://docs.mapbox.com/api/maps/"},"API documentation")),o.default.createElement("li",null,o.default.createElement("a",{href:"https://docs.mapbox.com/studio-manual/reference/"},"Studio manual reference")),o.default.createElement("li",null,o.default.createElement("a",{href:"https://docs.mapbox.com/accounts/overview/pricing/"},"Accounts pricing page")),o.default.createElement("li",null,o.default.createElement("a",{href:"https://docs.mapbox.com/vector-tiles/specification/"},"Vector Tiles Specification")))))}}])&&c(t.prototype,n),a&&c(t,a),f}(o.default.PureComponent);t.default=y}}]);