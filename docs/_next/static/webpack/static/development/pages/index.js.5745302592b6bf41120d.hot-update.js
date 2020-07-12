webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/game/index.ts":
/*!**********************************!*\
  !*** ./components/game/index.ts ***!
  \**********************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ \"./components/game/canvas/index.ts\");\n/* harmony import */ var _components_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/divider */ \"./components/game/components/divider.ts\");\n/* harmony import */ var _components_opponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/opponents */ \"./components/game/components/opponents.ts\");\n/* harmony import */ var _components_mycar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mycar */ \"./components/game/components/mycar.ts\");\n/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! howler */ \"./node_modules/howler/dist/howler.js\");\n/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/utils */ \"./components/game/components/utils.ts\");\n\n\n\n\n\n\n\n\nvar sound = new howler__WEBPACK_IMPORTED_MODULE_6__[\"Howl\"]({\n  src: \"/game.mp3\"\n});\nvar soundOnLoad = new Promise(function (resolve) {\n  sound.once(\"load\", resolve);\n});\nvar requestedAnimation;\nvar init = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(canvas, width, height, onChange) {\n    var targetVolume, targetSpeed, speedInterpolator, currentSpeed, currentVolume, volumeInterpolator, currentSoundRate, targetSoundRate, soundRateInterpolator, defaults, playground, dividers, opponents, myCar, score, tick;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            tick = function _tick() {\n              dividers.tick(currentSpeed);\n              opponents.tick(currentSpeed);\n              var opponentLane = opponents.lastOpponent().lane;\n              myCar.move(opponentLane === \"left\" ? \"right\" : \"left\");\n              myCar.tick(currentSpeed);\n              playground.render();\n              requestedAnimation = requestAnimationFrame(tick);\n              score++;\n              currentSpeed = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentSpeed, targetSpeed, speedInterpolator);\n              currentVolume = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentVolume, targetVolume, volumeInterpolator);\n              sound.volume(currentVolume);\n              currentSoundRate = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentSoundRate, targetSoundRate, soundRateInterpolator);\n              sound.rate(currentSoundRate);\n              onChange({\n                score: score,\n                speed: currentSpeed,\n                volume: currentVolume,\n                soundRate: currentSoundRate\n              });\n            };\n\n            _context.next = 3;\n            return soundOnLoad;\n\n          case 3:\n            requestedAnimation && cancelAnimationFrame(requestedAnimation);\n            sound.volume(0);\n            sound.play();\n            targetVolume = 1;\n            targetSpeed = 15;\n            speedInterpolator = 0.1;\n            currentSpeed = 0;\n            currentVolume = 0;\n            volumeInterpolator = 0.01;\n            currentSoundRate = 1;\n            targetSoundRate = 1;\n            soundRateInterpolator = 0.01;\n\n            defaults = function defaults() {\n              targetVolume = 1;\n              targetSpeed = 15;\n              speedInterpolator = 0.1;\n              currentSpeed = 0;\n              currentVolume = 0;\n              volumeInterpolator = 0.01;\n              currentSoundRate = 1;\n              targetSoundRate = 1;\n              soundRateInterpolator = 0.01;\n            };\n\n            playground = new _canvas__WEBPACK_IMPORTED_MODULE_2__[\"Canvas\"](canvas, {\n              width: width,\n              height: height\n            });\n            dividers = Object(_components_divider__WEBPACK_IMPORTED_MODULE_3__[\"initDividers\"])({\n              gap: 50,\n              color: \"#fff\",\n              height: 80,\n              width: 20,\n              baseSpeed: 1\n            }, playground.limitedConfig());\n            opponents = Object(_components_opponents__WEBPACK_IMPORTED_MODULE_4__[\"initOpponents\"])({\n              car: {\n                height: 100,\n                width: 50,\n                color: \"#ccc\",\n                baseSpeed: 2\n              },\n              gap: 200\n            }, playground.limitedConfig());\n            myCar = Object(_components_mycar__WEBPACK_IMPORTED_MODULE_5__[\"initMyCar\"])({\n              color: \"cyan\",\n              height: 100,\n              width: 50,\n              baseSpeed: 4\n            }, playground.limitedConfig());\n            window.addEventListener(\"keydown\", function (ev) {\n              if (ev.key === \"ArrowLeft\") myCar.move(\"left\");\n              if (ev.key === \"ArrowRight\") myCar.move(\"right\");\n\n              if (ev.key === \"r\") {\n                targetVolume = 1;\n                targetSpeed = 5;\n                speedInterpolator = 0.1;\n                currentSpeed = 0;\n                currentVolume = 0;\n                volumeInterpolator = 0.01;\n                currentSoundRate = 1;\n                targetSoundRate = 1;\n                soundRateInterpolator = 0.01;\n                setTimeout(function () {\n                  defaults();\n                }, 3000);\n              }\n            });\n            score = 0;\n            playground.render();\n            tick();\n\n          case 24:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function init(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvaW5kZXgudHM/MGE1NSJdLCJuYW1lcyI6WyJzb3VuZCIsIkhvd2wiLCJzcmMiLCJzb3VuZE9uTG9hZCIsIlByb21pc2UiLCJyZXNvbHZlIiwib25jZSIsInJlcXVlc3RlZEFuaW1hdGlvbiIsImluaXQiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2hhbmdlIiwidGljayIsImRpdmlkZXJzIiwiY3VycmVudFNwZWVkIiwib3Bwb25lbnRzIiwib3Bwb25lbnRMYW5lIiwibGFzdE9wcG9uZW50IiwibGFuZSIsIm15Q2FyIiwibW92ZSIsInBsYXlncm91bmQiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzY29yZSIsImludGVycG9sYXRlIiwidGFyZ2V0U3BlZWQiLCJzcGVlZEludGVycG9sYXRvciIsImN1cnJlbnRWb2x1bWUiLCJ0YXJnZXRWb2x1bWUiLCJ2b2x1bWVJbnRlcnBvbGF0b3IiLCJ2b2x1bWUiLCJjdXJyZW50U291bmRSYXRlIiwidGFyZ2V0U291bmRSYXRlIiwic291bmRSYXRlSW50ZXJwb2xhdG9yIiwicmF0ZSIsInNwZWVkIiwic291bmRSYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwbGF5IiwiZGVmYXVsdHMiLCJDYW52YXMiLCJpbml0RGl2aWRlcnMiLCJnYXAiLCJjb2xvciIsImJhc2VTcGVlZCIsImxpbWl0ZWRDb25maWciLCJpbml0T3Bwb25lbnRzIiwiY2FyIiwiaW5pdE15Q2FyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2Iiwia2V5Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsSUFBSUMsMkNBQUosQ0FBUztBQUNyQkMsS0FBRyxFQUFFO0FBRGdCLENBQVQsQ0FBZDtBQUlBLElBQU1DLFdBQVcsR0FBRyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzNDTCxPQUFLLENBQUNNLElBQU4sQ0FBVyxNQUFYLEVBQW1CRCxPQUFuQjtBQUNELENBRm1CLENBQXBCO0FBSUEsSUFBSUUsa0JBQUo7QUFPTyxJQUFNQyxJQUFJO0FBQUEsOExBQUcsaUJBQ2xCQyxNQURrQixFQUVsQkMsS0FGa0IsRUFHbEJDLE1BSGtCLEVBSWxCQyxRQUprQjtBQUFBLDBOQTRFVEMsSUE1RVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRFVEEsZ0JBNUVTLG9CQTRFRjtBQUNkQyxzQkFBUSxDQUFDRCxJQUFULENBQWNFLFlBQWQ7QUFDQUMsdUJBQVMsQ0FBQ0gsSUFBVixDQUFlRSxZQUFmO0FBQ0Esa0JBQU1FLFlBQVksR0FBR0QsU0FBUyxDQUFDRSxZQUFWLEdBQXlCQyxJQUE5QztBQUNBQyxtQkFBSyxDQUFDQyxJQUFOLENBQVdKLFlBQVksS0FBSyxNQUFqQixHQUEwQixPQUExQixHQUFvQyxNQUEvQztBQUNBRyxtQkFBSyxDQUFDUCxJQUFOLENBQVdFLFlBQVg7QUFDQU8sd0JBQVUsQ0FBQ0MsTUFBWDtBQUNBaEIsZ0NBQWtCLEdBQUdpQixxQkFBcUIsQ0FBQ1gsSUFBRCxDQUExQztBQUNBWSxtQkFBSztBQUNMViwwQkFBWSxHQUFHVyxxRUFBVyxDQUFDWCxZQUFELEVBQWVZLFdBQWYsRUFBNEJDLGlCQUE1QixDQUExQjtBQUNBQywyQkFBYSxHQUFHSCxxRUFBVyxDQUN6QkcsYUFEeUIsRUFFekJDLFlBRnlCLEVBR3pCQyxrQkFIeUIsQ0FBM0I7QUFLQS9CLG1CQUFLLENBQUNnQyxNQUFOLENBQWFILGFBQWI7QUFDQUksOEJBQWdCLEdBQUdQLHFFQUFXLENBQzVCTyxnQkFENEIsRUFFNUJDLGVBRjRCLEVBRzVCQyxxQkFINEIsQ0FBOUI7QUFLQW5DLG1CQUFLLENBQUNvQyxJQUFOLENBQVdILGdCQUFYO0FBQ0FyQixzQkFBUSxDQUFDO0FBQ1BhLHFCQUFLLEVBQUxBLEtBRE87QUFFUFkscUJBQUssRUFBRXRCLFlBRkE7QUFHUGlCLHNCQUFNLEVBQUVILGFBSEQ7QUFJUFMseUJBQVMsRUFBRUw7QUFKSixlQUFELENBQVI7QUFNRCxhQXhHaUI7O0FBQUE7QUFBQSxtQkFNWjlCLFdBTlk7O0FBQUE7QUFPbEJJLDhCQUFrQixJQUFJZ0Msb0JBQW9CLENBQUNoQyxrQkFBRCxDQUExQztBQUNBUCxpQkFBSyxDQUFDZ0MsTUFBTixDQUFhLENBQWI7QUFDQWhDLGlCQUFLLENBQUN3QyxJQUFOO0FBQ0lWLHdCQVZjLEdBVUMsQ0FWRDtBQVdkSCx1QkFYYyxHQVdBLEVBWEE7QUFZZEMsNkJBWmMsR0FZTSxHQVpOO0FBYWRiLHdCQWJjLEdBYUMsQ0FiRDtBQWNkYyx5QkFkYyxHQWNFLENBZEY7QUFlZEUsOEJBZmMsR0FlTyxJQWZQO0FBZ0JkRSw0QkFoQmMsR0FnQkssQ0FoQkw7QUFpQmRDLDJCQWpCYyxHQWlCSSxDQWpCSjtBQWtCZEMsaUNBbEJjLEdBa0JVLElBbEJWOztBQW1CWk0sb0JBbkJZLEdBbUJELFNBQVhBLFFBQVcsR0FBTTtBQUNyQlgsMEJBQVksR0FBRyxDQUFmO0FBQ0FILHlCQUFXLEdBQUcsRUFBZDtBQUNBQywrQkFBaUIsR0FBRyxHQUFwQjtBQUNBYiwwQkFBWSxHQUFHLENBQWY7QUFDQWMsMkJBQWEsR0FBRyxDQUFoQjtBQUNBRSxnQ0FBa0IsR0FBRyxJQUFyQjtBQUNBRSw4QkFBZ0IsR0FBRyxDQUFuQjtBQUNBQyw2QkFBZSxHQUFHLENBQWxCO0FBQ0FDLG1DQUFxQixHQUFHLElBQXhCO0FBQ0QsYUE3QmlCOztBQStCWmIsc0JBL0JZLEdBK0JDLElBQUlvQiw4Q0FBSixDQUFXakMsTUFBWCxFQUFtQjtBQUNwQ0MsbUJBQUssRUFBTEEsS0FEb0M7QUFFcENDLG9CQUFNLEVBQU5BO0FBRm9DLGFBQW5CLENBL0JEO0FBb0NaRyxvQkFwQ1ksR0FvQ0Q2Qix3RUFBWSxDQUMzQjtBQUNFQyxpQkFBRyxFQUFFLEVBRFA7QUFFRUMsbUJBQUssRUFBRSxNQUZUO0FBR0VsQyxvQkFBTSxFQUFFLEVBSFY7QUFJRUQsbUJBQUssRUFBRSxFQUpUO0FBS0VvQyx1QkFBUyxFQUFFO0FBTGIsYUFEMkIsRUFRM0J4QixVQUFVLENBQUN5QixhQUFYLEVBUjJCLENBcENYO0FBOENaL0IscUJBOUNZLEdBOENBZ0MsMkVBQWEsQ0FDN0I7QUFDRUMsaUJBQUcsRUFBRTtBQUFFdEMsc0JBQU0sRUFBRSxHQUFWO0FBQWVELHFCQUFLLEVBQUUsRUFBdEI7QUFBMEJtQyxxQkFBSyxFQUFFLE1BQWpDO0FBQXlDQyx5QkFBUyxFQUFFO0FBQXBELGVBRFA7QUFFRUYsaUJBQUcsRUFBRTtBQUZQLGFBRDZCLEVBSzdCdEIsVUFBVSxDQUFDeUIsYUFBWCxFQUw2QixDQTlDYjtBQXFEWjNCLGlCQXJEWSxHQXFESjhCLG1FQUFTLENBQ3JCO0FBQUVMLG1CQUFLLEVBQUUsTUFBVDtBQUFpQmxDLG9CQUFNLEVBQUUsR0FBekI7QUFBOEJELG1CQUFLLEVBQUUsRUFBckM7QUFBeUNvQyx1QkFBUyxFQUFFO0FBQXBELGFBRHFCLEVBRXJCeEIsVUFBVSxDQUFDeUIsYUFBWCxFQUZxQixDQXJETDtBQXlEbEJJLGtCQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQUNDLEVBQUQsRUFBUTtBQUN6QyxrQkFBSUEsRUFBRSxDQUFDQyxHQUFILEtBQVcsV0FBZixFQUE0QmxDLEtBQUssQ0FBQ0MsSUFBTixDQUFXLE1BQVg7QUFDNUIsa0JBQUlnQyxFQUFFLENBQUNDLEdBQUgsS0FBVyxZQUFmLEVBQTZCbEMsS0FBSyxDQUFDQyxJQUFOLENBQVcsT0FBWDs7QUFDN0Isa0JBQUlnQyxFQUFFLENBQUNDLEdBQUgsS0FBVyxHQUFmLEVBQW9CO0FBQ2xCeEIsNEJBQVksR0FBRyxDQUFmO0FBQ0FILDJCQUFXLEdBQUcsQ0FBZDtBQUNBQyxpQ0FBaUIsR0FBRyxHQUFwQjtBQUNBYiw0QkFBWSxHQUFHLENBQWY7QUFDQWMsNkJBQWEsR0FBRyxDQUFoQjtBQUNBRSxrQ0FBa0IsR0FBRyxJQUFyQjtBQUNBRSxnQ0FBZ0IsR0FBRyxDQUFuQjtBQUNBQywrQkFBZSxHQUFHLENBQWxCO0FBQ0FDLHFDQUFxQixHQUFHLElBQXhCO0FBQ0FvQiwwQkFBVSxDQUFDLFlBQU07QUFDZmQsMEJBQVE7QUFDVCxpQkFGUyxFQUVQLElBRk8sQ0FBVjtBQUdEO0FBQ0YsYUFqQkQ7QUFrQkloQixpQkEzRWMsR0EyRU4sQ0EzRU07QUF5R2xCSCxzQkFBVSxDQUFDQyxNQUFYO0FBQ0FWLGdCQUFJOztBQTFHYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFKTCxJQUFJO0FBQUE7QUFBQTtBQUFBLEdBQVYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwiLi9jYW52YXNcIjtcbmltcG9ydCB7IGluaXREaXZpZGVycyB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGl2aWRlclwiO1xuaW1wb3J0IHsgaW5pdE9wcG9uZW50cyB9IGZyb20gXCIuL2NvbXBvbmVudHMvb3Bwb25lbnRzXCI7XG5pbXBvcnQgeyBpbml0TXlDYXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL215Y2FyXCI7XG5pbXBvcnQgeyBIb3dsIH0gZnJvbSBcImhvd2xlclwiO1xuaW1wb3J0IHsgaW50ZXJwb2xhdGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL3V0aWxzXCI7XG5cbmNvbnN0IHNvdW5kID0gbmV3IEhvd2woe1xuICBzcmM6IFwiL2dhbWUubXAzXCIsXG59KTtcblxuY29uc3Qgc291bmRPbkxvYWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICBzb3VuZC5vbmNlKFwibG9hZFwiLCByZXNvbHZlKTtcbn0pO1xuXG5sZXQgcmVxdWVzdGVkQW5pbWF0aW9uO1xuZXhwb3J0IGludGVyZmFjZSBJU3RhdHMge1xuICBzY29yZTogbnVtYmVyO1xuICBzcGVlZDogbnVtYmVyO1xuICB2b2x1bWU6IG51bWJlcjtcbiAgc291bmRSYXRlOiBudW1iZXI7XG59XG5leHBvcnQgY29uc3QgaW5pdCA9IGFzeW5jIChcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIG9uQ2hhbmdlOiAodjogSVN0YXRzKSA9PiB2b2lkXG4pID0+IHtcbiAgYXdhaXQgc291bmRPbkxvYWQ7XG4gIHJlcXVlc3RlZEFuaW1hdGlvbiAmJiBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0ZWRBbmltYXRpb24pO1xuICBzb3VuZC52b2x1bWUoMCk7XG4gIHNvdW5kLnBsYXkoKTtcbiAgdmFyIHRhcmdldFZvbHVtZSA9IDE7XG4gIHZhciB0YXJnZXRTcGVlZCA9IDE1O1xuICB2YXIgc3BlZWRJbnRlcnBvbGF0b3IgPSAwLjE7XG4gIHZhciBjdXJyZW50U3BlZWQgPSAwO1xuICB2YXIgY3VycmVudFZvbHVtZSA9IDA7XG4gIHZhciB2b2x1bWVJbnRlcnBvbGF0b3IgPSAwLjAxO1xuICB2YXIgY3VycmVudFNvdW5kUmF0ZSA9IDE7XG4gIHZhciB0YXJnZXRTb3VuZFJhdGUgPSAxO1xuICB2YXIgc291bmRSYXRlSW50ZXJwb2xhdG9yID0gMC4wMTtcbiAgY29uc3QgZGVmYXVsdHMgPSAoKSA9PiB7XG4gICAgdGFyZ2V0Vm9sdW1lID0gMTtcbiAgICB0YXJnZXRTcGVlZCA9IDE1O1xuICAgIHNwZWVkSW50ZXJwb2xhdG9yID0gMC4xO1xuICAgIGN1cnJlbnRTcGVlZCA9IDA7XG4gICAgY3VycmVudFZvbHVtZSA9IDA7XG4gICAgdm9sdW1lSW50ZXJwb2xhdG9yID0gMC4wMTtcbiAgICBjdXJyZW50U291bmRSYXRlID0gMTtcbiAgICB0YXJnZXRTb3VuZFJhdGUgPSAxO1xuICAgIHNvdW5kUmF0ZUludGVycG9sYXRvciA9IDAuMDE7XG4gIH07XG5cbiAgY29uc3QgcGxheWdyb3VuZCA9IG5ldyBDYW52YXMoY2FudmFzLCB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICB9KTtcblxuICBjb25zdCBkaXZpZGVycyA9IGluaXREaXZpZGVycyhcbiAgICB7XG4gICAgICBnYXA6IDUwLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgaGVpZ2h0OiA4MCxcbiAgICAgIHdpZHRoOiAyMCxcbiAgICAgIGJhc2VTcGVlZDogMSxcbiAgICB9LFxuICAgIHBsYXlncm91bmQubGltaXRlZENvbmZpZygpXG4gICk7XG4gIGNvbnN0IG9wcG9uZW50cyA9IGluaXRPcHBvbmVudHMoXG4gICAge1xuICAgICAgY2FyOiB7IGhlaWdodDogMTAwLCB3aWR0aDogNTAsIGNvbG9yOiBcIiNjY2NcIiwgYmFzZVNwZWVkOiAyIH0sXG4gICAgICBnYXA6IDIwMCxcbiAgICB9LFxuICAgIHBsYXlncm91bmQubGltaXRlZENvbmZpZygpXG4gICk7XG4gIGNvbnN0IG15Q2FyID0gaW5pdE15Q2FyKFxuICAgIHsgY29sb3I6IFwiY3lhblwiLCBoZWlnaHQ6IDEwMCwgd2lkdGg6IDUwLCBiYXNlU3BlZWQ6IDQgfSxcbiAgICBwbGF5Z3JvdW5kLmxpbWl0ZWRDb25maWcoKVxuICApO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2KSA9PiB7XG4gICAgaWYgKGV2LmtleSA9PT0gXCJBcnJvd0xlZnRcIikgbXlDYXIubW92ZShcImxlZnRcIik7XG4gICAgaWYgKGV2LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIG15Q2FyLm1vdmUoXCJyaWdodFwiKTtcbiAgICBpZiAoZXYua2V5ID09PSBcInJcIikge1xuICAgICAgdGFyZ2V0Vm9sdW1lID0gMTtcbiAgICAgIHRhcmdldFNwZWVkID0gNTtcbiAgICAgIHNwZWVkSW50ZXJwb2xhdG9yID0gMC4xO1xuICAgICAgY3VycmVudFNwZWVkID0gMDtcbiAgICAgIGN1cnJlbnRWb2x1bWUgPSAwO1xuICAgICAgdm9sdW1lSW50ZXJwb2xhdG9yID0gMC4wMTtcbiAgICAgIGN1cnJlbnRTb3VuZFJhdGUgPSAxO1xuICAgICAgdGFyZ2V0U291bmRSYXRlID0gMTtcbiAgICAgIHNvdW5kUmF0ZUludGVycG9sYXRvciA9IDAuMDE7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGVmYXVsdHMoKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH1cbiAgfSk7XG4gIGxldCBzY29yZSA9IDA7XG4gIGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgZGl2aWRlcnMudGljayhjdXJyZW50U3BlZWQpO1xuICAgIG9wcG9uZW50cy50aWNrKGN1cnJlbnRTcGVlZCk7XG4gICAgY29uc3Qgb3Bwb25lbnRMYW5lID0gb3Bwb25lbnRzLmxhc3RPcHBvbmVudCgpLmxhbmU7XG4gICAgbXlDYXIubW92ZShvcHBvbmVudExhbmUgPT09IFwibGVmdFwiID8gXCJyaWdodFwiIDogXCJsZWZ0XCIpO1xuICAgIG15Q2FyLnRpY2soY3VycmVudFNwZWVkKTtcbiAgICBwbGF5Z3JvdW5kLnJlbmRlcigpO1xuICAgIHJlcXVlc3RlZEFuaW1hdGlvbiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcbiAgICBzY29yZSsrO1xuICAgIGN1cnJlbnRTcGVlZCA9IGludGVycG9sYXRlKGN1cnJlbnRTcGVlZCwgdGFyZ2V0U3BlZWQsIHNwZWVkSW50ZXJwb2xhdG9yKTtcbiAgICBjdXJyZW50Vm9sdW1lID0gaW50ZXJwb2xhdGUoXG4gICAgICBjdXJyZW50Vm9sdW1lLFxuICAgICAgdGFyZ2V0Vm9sdW1lLFxuICAgICAgdm9sdW1lSW50ZXJwb2xhdG9yXG4gICAgKTtcbiAgICBzb3VuZC52b2x1bWUoY3VycmVudFZvbHVtZSk7XG4gICAgY3VycmVudFNvdW5kUmF0ZSA9IGludGVycG9sYXRlKFxuICAgICAgY3VycmVudFNvdW5kUmF0ZSxcbiAgICAgIHRhcmdldFNvdW5kUmF0ZSxcbiAgICAgIHNvdW5kUmF0ZUludGVycG9sYXRvclxuICAgICk7XG4gICAgc291bmQucmF0ZShjdXJyZW50U291bmRSYXRlKTtcbiAgICBvbkNoYW5nZSh7XG4gICAgICBzY29yZSxcbiAgICAgIHNwZWVkOiBjdXJyZW50U3BlZWQsXG4gICAgICB2b2x1bWU6IGN1cnJlbnRWb2x1bWUsXG4gICAgICBzb3VuZFJhdGU6IGN1cnJlbnRTb3VuZFJhdGUsXG4gICAgfSk7XG4gIH1cbiAgcGxheWdyb3VuZC5yZW5kZXIoKTtcbiAgdGljaygpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/index.ts\n");

/***/ })

})