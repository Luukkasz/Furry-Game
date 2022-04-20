!function(t){var r={};function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(n,i,function(r){return t[r]}.bind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r,e){"use strict";e.r(r);e(1);function n(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function o(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,r,e){return r&&o(t.prototype,r),e&&o(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}var s=document.querySelectorAll("#board div"),a=document.querySelector("#score"),l=document.querySelector("#final-score"),f=u((function t(){c(this,t),this.x=0,this.y=0,this.direction="right"})),y=u((function t(){c(this,t),this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())})),h=new(function(){function t(){c(this,t),this.board=s,this.furry=new f,this.coin=new y,this.score=0}return u(t,[{key:"index",value:function(t,r){return t+10*r}},{key:"showFurry",value:function(){this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry")}},{key:"hideVisibleFurry",value:function(){document.querySelector(".furry")&&document.querySelector(".furry").classList.remove("furry")}},{key:"showCoin",value:function(){this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin")}},{key:"startGame",value:function(){var t=this;this.idSetInterval=setInterval((function(){return t.moveFurry()}),250)}},{key:"moveFurry",value:function(){"right"===this.furry.direction?this.furry.x=this.furry.x+1:"left"===this.furry.direction?this.furry.x=this.furry.x-1:"up"===this.furry.direction?this.furry.y=this.furry.y-1:"down"===this.furry.direction&&(this.furry.y=this.furry.y+1),this.checkWallCollision(),this.hideVisibleFurry(),this.checkWallCollision()&&this.showFurry(),this.checkCoinCollision()}},{key:"changeDirection",value:function(t){switch(t.which){case 37:this.furry.direction="left";break;case 38:this.furry.direction="up";break;case 39:this.furry.direction="right";break;case 40:this.furry.direction="down"}}},{key:"checkCoinCollision",value:function(){n(this.board).filter((function(t){return t.classList.length>=2})).length>0&&(document.querySelector(".coin").classList.remove("coin"),a.textContent=(Number(a.textContent)+1).toString(),this.coin=new y,this.showCoin())}},{key:"checkWallCollision",value:function(){return!(this.furry.y>9||this.furry.y<0||this.furry.x>9||this.furry.x<0)||(clearInterval(this.idSetInterval),this.hideVisibleFurry(),l.textContent=a.textContent,document.querySelector(".game-over").classList.remove("hide"),!1)}}]),t}());h.showFurry(),h.showCoin(),h.startGame(),document.addEventListener("keydown",(function(t){h.changeDirection(t)}))},function(t,r,e){}]);