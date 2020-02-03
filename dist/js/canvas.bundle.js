/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bball_fireworks.js":
/*!***********************************!*\
  !*** ./src/js/bball_fireworks.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firework */ "./src/js/firework.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// class that runs our fireworks show


var random = function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var BballFireworks =
/*#__PURE__*/
function () {
  function BballFireworks(_ref) {
    var canvas = _ref.canvas,
        ctx = _ref.ctx;

    _classCallCheck(this, BballFireworks);

    this.canvas = canvas;
    this.ctx = ctx;
    this.timerTick = 0;
    this.timerTotal = 100;
    this.fireworks = []; // this.ctx.globalCompositeOperation = 'destination-out';
    // this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    // lighter creates bright highlight points as fireworks and stars overlap
    // this.ctx.globalCompositeOperation = 'lighter';

    console.log('Bballfireworks!');
    this.loop = this.loop.bind(this);
    this.addFirework = this.addFirework.bind(this);
    this.launchFirework = this.launchFirework.bind(this);
  }

  _createClass(BballFireworks, [{
    key: "addFirework",
    value: function addFirework() {
      if (this.timerTick >= this.timerTotal) {
        this.fireworks.push(new _firework__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas.width / 2, this.canvas.height, random(0, this.canvas.width), random(0, this.canvas.height / 2), this.ctx));
        this.timerTick = 0;
      } else {
        this.timerTick++;
      }
    }
  }, {
    key: "launchFirework",
    value: function launchFirework() {
      var i = this.fireworks.length;

      while (i--) {
        this.fireworks[i].draw();
        this.fireworks[i].update(i);
      }
    }
  }, {
    key: "loop",
    value: function loop() {
      this.addFirework();
      this.launchFirework();
      requestAnimationFrame(this.loop);
    }
  }]);

  return BballFireworks;
}(); // window.onload = loop();


/* harmony default export */ __webpack_exports__["default"] = (BballFireworks);

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bball_fireworks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bball_fireworks */ "./src/js/bball_fireworks.js");
 // const loop = () => (requestAnimationFrame(loop));
// const random = (min, max) => (Math.random() * (max - min) + min);

var getCanvas = function getCanvas() {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth / 2;
  canvas.height = window.innerHeight / 2;
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = '/.';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'lighter';
  return {
    canvas: canvas,
    ctx: ctx
  };
}; // event listener for when DOM content is loaded
// callback will grab canvas el


window.addEventListener('DOMContentLoaded', function (e) {
  console.log('DOM content loaded');
  var show = new _bball_fireworks__WEBPACK_IMPORTED_MODULE_0__["default"](getCanvas());
  show.loop();
});

/***/ }),

/***/ "./src/js/firework.js":
/*!****************************!*\
  !*** ./src/js/firework.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _star__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./star */ "./src/js/star.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var random = function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var colors = ['#00B2A9', '#EF426F', '#FF8200', '#8A8D8F'];

var calculateDistance = function calculateDistance(x1, x2, y1, y2) {
  var xDistance = x1 - x2;
  var yDistance = y1 - y2;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}; // the single firework object that is shot into the sky


var Firework =
/*#__PURE__*/
function () {
  function Firework(x1, y1, x2, y2, ctx) {
    _classCallCheck(this, Firework);

    this.x = x1;
    this.y = y1; // initial coordinates

    this.x1 = x1;
    this.y1 = y1; // end coordinates

    this.x2 = x2;
    this.y2 = y2;
    this.ctx = ctx;
    this.dToEndPoint = 0;
    this.dTraveled = 0;
    this.coordinates = [];
    this.coordLength = 2;

    while (this.coordLength--) {
      this.coordinates.push([this.x, this.y]);
    }

    this.angle = Math.atan2(y2 - y1, x2 - x1);
    this.speed = 9;
    this.gravity = 0.97;
    this.brightness = random(50, 70);
    this.targetRadius = 1;
    this.hue = colors[random(0, colors.length)];
    this.stars = []; // this.calculateDistance = this.calculateDistance.bind(this);

    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
  }

  _createClass(Firework, [{
    key: "update",
    value: function update(index) {
      this.dToEndPoint = calculateDistance(this.x1, this.x2, this.y1, this.y2);
      this.coordinates.pop();
      this.coordinates.unshift([this.x, this.y]);

      if (this.targetRadius < 8) {
        this.targetRadius += 0.3;
      } else {
        this.targetRadius = 1;
      }

      this.speed *= this.gravity;
      var vx = Math.cos(this.angle) * this.speed;
      var vy = Math.sin(this.angle) * this.speed;
      this.dTraveled = calculateDistance(this.x1, this.x + vx, this.y1, this.y + vy);

      if (this.dTraveled >= this.dToEndpoint) {
        createStars(this.x2, this.y2);
        fireworks.splice(index, 1);
      } else {
        this.x += vx;
        this.y += vy;
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.beginPath();
      this.ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
      this.ctx.lineTo(this.x, this.y);
      this.ctx.strokeStyle = this.hue; // this.ctx.strokeStyle = 'rgb(' + this.hue + ', 100% ' + this.brightness + '%)';

      this.ctx.stroke();
    }
  }, {
    key: "createStars",
    value: function createStars(x, y) {
      var addStar = 10;

      while (addStar--) {
        this.stars.push(new _star__WEBPACK_IMPORTED_MODULE_0__["default"](this.x, this.y));
      }

      var starCount = this.stars.length;

      while (starCount--) {
        stars[starCount].draw();
        stars[starCount].update(starCount);
      }
    }
  }]);

  return Firework;
}();

/* harmony default export */ __webpack_exports__["default"] = (Firework);

/***/ }),

/***/ "./src/js/star.js":
/*!************************!*\
  !*** ./src/js/star.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// const canvas = document.querySelector('canvas')
// const ctx = canvas.getContext('2d')
var random = function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var colors = ['#00B2A9', '#EF426F', '#FF8200', '#8A8D8F']; // canvas.width = innerWidth
// canvas.height = innerHeight
// when a firework explodes, it breaks into stars

var Star =
/*#__PURE__*/
function () {
  function Star(x, y) {
    _classCallCheck(this, Star);

    console.log('Star constructed');
    this.x = x;
    this.y = y;
    this.coordinates = [];
    this.coordinateCount = 5;

    while (this.coordinateCount--) {
      this.coordinates.push([this.x, this.y]);
    }

    this.angle = random(0, Math.PI * 2);
    this.speed = random(1, 10);
    this.ceFriction = 0.95;
    this.gravity = 1;
    this.hue = colors[random(0, colors.length)];
    this.brightness = random(50, 80);
    this.alpha = 1;
    this.decay = random(0.015, 0.03);
  }

  _createClass(Star, [{
    key: "update",
    value: function update(index) {
      this.coordinates.pop();
      this.coordinates.unshift([this.x, this.y]);
      this.speed *= this.ceFriction;
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed + this.gravity;
      this.alpha -= this.decay;

      if (this.alpha <= this.decay) {
        particles.splice(index, 1);
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.moveTo(this.coordinates[this.coordinates.length][0], this.coordinates[this.coordinates.length][1]);
      ctx.lineTo(this.x, this.y);
      ctx.strokeStyle = 'rgb(' + this.hue + ', 100% ' + this.brightness + '%, ' + this.alpha + ')';
      ctx.stroke();
    }
  }]);

  return Star;
}();

/* harmony default export */ __webpack_exports__["default"] = (Star);

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map