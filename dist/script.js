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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_popularItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/popularItems */ "./src/js/modules/popularItems.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/social */ "./src/js/modules/social.js");
/* harmony import */ var _modules_learnMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/learnMore */ "./src/js/modules/learnMore.js");
/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cart */ "./src/js/modules/cart.js");





window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_popularItems__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.slider__item', 'button[data-next]', 'button[data-prev]');
  Object(_modules_social__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_learnMore__WEBPACK_IMPORTED_MODULE_3__["default"])('.btn_mt', '.subtitle_dn');
  Object(_modules_cart__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

/***/ }),

/***/ "./src/js/modules/cart.js":
/*!********************************!*\
  !*** ./src/js/modules/cart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cart = () => {
  const elem = document.querySelector('.element-cart'),
        cart = document.querySelector('.cart'),
        close = cart.querySelector('.cart__close');
  elem.addEventListener('click', () => {
    cart.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
  close.addEventListener('click', () => {
    cart.style.display = 'none';
    document.body.style.overflow = '';
  });
};

/* harmony default export */ __webpack_exports__["default"] = (cart);

/***/ }),

/***/ "./src/js/modules/learnMore.js":
/*!*************************************!*\
  !*** ./src/js/modules/learnMore.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const learnMore = (btnSelector, textSelector) => {
  const btn = document.querySelector(btnSelector),
        text = document.querySelector(textSelector);
  btn.addEventListener('click', e => {
    e.target.remove();
    text.style.display = 'block';
  });
};

/* harmony default export */ __webpack_exports__["default"] = (learnMore);

/***/ }),

/***/ "./src/js/modules/popularItems.js":
/*!****************************************!*\
  !*** ./src/js/modules/popularItems.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const popularItems = () => {
  const getResource = async path => {
    const res = await fetch(path);

    if (!res.ok) {
      throw new Error(`Could not fetch ${path}, status: ${res.status}`);
    }

    return await res.json();
  };

  const createCards = response => {
    // console.log(response);
    // console.log(response.items);
    let items = response.items;
    items.forEach(_ref => {
      let {
        src,
        alt,
        subtitle,
        grade,
        price
      } = _ref;
      const elem = document.createElement('div');
      elem.classList.add('popular__item');
      elem.innerHTML = `
                <div class="popular__img">
                    <img src=${src} alt=${alt}>
                </div>
                <div class="popular__descr">
                    <div class="popular__subtitle">${subtitle}</div>
                    <div class="popular__grade"><span>&#9733;</span>${grade}</div>
                    <button class="btn btn_popular">Add To Cart</button>
                    <div class="popular__price">${price}</div>
                </div>
            `;
      document.querySelector('.popular__items').append(elem);
    });
  };

  let counter = 0;
  getResource('assets/db.json').then(res => {
    // console.log(res);
    createCards(res);
    addToCart();
  });
  document.querySelector('.btn_more').addEventListener('click', event => {
    getResource('assets/db.json').then(res => {
      // console.log(res);
      createCards(res);
      addToCart();
    });
  });

  const addToCart = () => {
    const btns = document.querySelectorAll('.btn_popular'),
          items = document.querySelectorAll('.popular__item'),
          wrapper = document.querySelector('.cart__items'),
          cart = document.querySelector('.cart');
    btns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        let cloneItem = items[i].cloneNode(true);
        cloneItem.querySelector('.btn_popular').remove();
        cloneItem.querySelector('.popular__grade').remove();
        cloneItem.classList.add('popular__clone'); //change styles

        cloneItem.querySelector('.popular__descr > .popular__subtitle').style.color = "#FFF";
        cloneItem.querySelector('.popular__descr > .popular__price').style.color = "#FFF";
        wrapper.append(cloneItem);
        items[i].remove();
        document.querySelector('.element-cart').style.display = 'block';
        document.querySelector('.element-cart > span').textContent = ++counter;
      });
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (popularItems);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slider = (slideSelector, prevSelector, nextSelector) => {
  const slides = document.querySelectorAll(slideSelector),
        prevBtn = document.querySelector(prevSelector),
        nextBtn = document.querySelector(nextSelector);
  let slideIndex = 1;
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
  }

  function plusSlide(n) {
    showSlides(slideIndex += n);
  }

  prevBtn.addEventListener('click', () => plusSlide(-1));
  nextBtn.addEventListener('click', () => plusSlide(+1));
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/social.js":
/*!**********************************!*\
  !*** ./src/js/modules/social.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const social = () => {
  const items = document.querySelectorAll('.social__item');
  items.forEach(item => {
    item.addEventListener('mouseover', function () {
      let src = this.firstElementChild.firstElementChild.src; //находим тег img и src внутри него

      let newSrc = src.replace(/.svg/, 'Copy.svg');
      this.firstElementChild.firstElementChild.setAttribute('src', newSrc);
      this.style.backgroundColor = '#F16214';
    });
    item.addEventListener('mouseout', function () {
      let src = this.firstElementChild.firstElementChild.src;
      let newSrc = src.replace(/copy.svg/i, '.svg');
      this.firstElementChild.firstElementChild.setAttribute('src', newSrc);
      this.style.backgroundColor = 'rgba(241, 98, 20, 0.15)';
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (social);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map