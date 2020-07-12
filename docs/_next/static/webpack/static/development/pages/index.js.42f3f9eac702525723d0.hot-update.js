webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/game/index.ts":
/*!**********************************!*\
  !*** ./components/game/index.ts ***!
  \**********************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ \"./components/game/canvas/index.ts\");\n/* harmony import */ var _components_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/divider */ \"./components/game/components/divider.ts\");\n/* harmony import */ var _components_opponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/opponents */ \"./components/game/components/opponents.ts\");\n/* harmony import */ var _components_mycar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mycar */ \"./components/game/components/mycar.ts\");\n/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! howler */ \"./node_modules/howler/dist/howler.js\");\n/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/utils */ \"./components/game/components/utils.ts\");\n\n\n\n\n\n\n\n\nvar sound = new howler__WEBPACK_IMPORTED_MODULE_6__[\"Howl\"]({\n  src: \"/game.mp3\"\n});\nvar soundOnLoad = new Promise(function (resolve) {\n  sound.once(\"load\", resolve);\n});\nvar requestedAnimation;\nvar init = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(canvas, width, height, onChange) {\n    var currentSpeed, targetSpeed, speedInterpolator, currentVolume, targetVolume, volumeInterpolator, currentSoundRate, targetSoundRate, soundRateInterpolator, speedController, playground, dividers, opponents, myCar, score, tick;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            tick = function _tick() {\n              dividers.tick(currentSpeed);\n              opponents.tick(currentSpeed);\n              var opponentLane = opponents.lastOpponent().lane;\n              myCar.move(opponentLane === \"left\" ? \"right\" : \"left\");\n              myCar.tick(currentSpeed);\n              playground.render();\n              requestedAnimation = requestAnimationFrame(tick);\n              score++;\n              currentSpeed = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentSpeed, targetSpeed, speedInterpolator);\n              currentVolume = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentVolume, targetVolume, volumeInterpolator);\n              sound.volume(currentVolume);\n              currentSoundRate = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentSoundRate, targetSoundRate, soundRateInterpolator);\n              sound.rate(currentSoundRate);\n              onChange({\n                score: score,\n                speed: currentSpeed,\n                volume: currentVolume,\n                soundRate: currentSoundRate\n              });\n            };\n\n            _context.next = 3;\n            return soundOnLoad;\n\n          case 3:\n            requestedAnimation && cancelAnimationFrame(requestedAnimation);\n            sound.volume(0);\n            sound.play();\n            currentSpeed = 0;\n            targetSpeed = 15;\n            speedInterpolator = 0.01;\n            currentVolume = 0;\n            targetVolume = 1;\n            volumeInterpolator = 0.11;\n            currentSoundRate = 1;\n            targetSoundRate = 1;\n            soundRateInterpolator = 1;\n\n            speedController = function speedController(control) {\n              var slices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n              var minSoundRate = 0.8,\n                  maxSoundRate = 1;\n              var minSpeed = 2,\n                  maxSpeed = 15;\n              targetSoundRate = (maxSoundRate - minSoundRate) * control;\n              soundRateInterpolator = (targetSoundRate - currentSoundRate) / slices;\n              targetSpeed = (maxSpeed - minSpeed) * control;\n              speedInterpolator = (targetSpeed - currentSpeed) / slices;\n            };\n\n            playground = new _canvas__WEBPACK_IMPORTED_MODULE_2__[\"Canvas\"](canvas, {\n              width: width,\n              height: height\n            });\n            dividers = Object(_components_divider__WEBPACK_IMPORTED_MODULE_3__[\"initDividers\"])({\n              gap: 50,\n              color: \"#fff\",\n              height: 80,\n              width: 20,\n              baseSpeed: 1\n            }, playground.limitedConfig());\n            opponents = Object(_components_opponents__WEBPACK_IMPORTED_MODULE_4__[\"initOpponents\"])({\n              car: {\n                height: 100,\n                width: 50,\n                color: \"#ccc\",\n                baseSpeed: 2\n              },\n              gap: 200\n            }, playground.limitedConfig());\n            myCar = Object(_components_mycar__WEBPACK_IMPORTED_MODULE_5__[\"initMyCar\"])({\n              color: \"cyan\",\n              height: 100,\n              width: 50,\n              baseSpeed: 4\n            }, playground.limitedConfig());\n            window.addEventListener(\"keydown\", function (ev) {\n              if (ev.key === \"ArrowLeft\") myCar.move(\"left\");\n              if (ev.key === \"ArrowRight\") myCar.move(\"right\");\n\n              if (ev.key === \"r\") {\n                targetVolume = 1;\n                targetSpeed = 1;\n                targetSoundRate = 0.4;\n                speedInterpolator = 0.1;\n                soundRateInterpolator = 0.05;\n                setTimeout(function () {\n                  defaults();\n                }, 10000);\n              }\n            });\n            score = 0;\n            playground.render();\n            tick();\n\n          case 24:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function init(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvaW5kZXgudHM/MGE1NSJdLCJuYW1lcyI6WyJzb3VuZCIsIkhvd2wiLCJzcmMiLCJzb3VuZE9uTG9hZCIsIlByb21pc2UiLCJyZXNvbHZlIiwib25jZSIsInJlcXVlc3RlZEFuaW1hdGlvbiIsImluaXQiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2hhbmdlIiwidGljayIsImRpdmlkZXJzIiwiY3VycmVudFNwZWVkIiwib3Bwb25lbnRzIiwib3Bwb25lbnRMYW5lIiwibGFzdE9wcG9uZW50IiwibGFuZSIsIm15Q2FyIiwibW92ZSIsInBsYXlncm91bmQiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzY29yZSIsImludGVycG9sYXRlIiwidGFyZ2V0U3BlZWQiLCJzcGVlZEludGVycG9sYXRvciIsImN1cnJlbnRWb2x1bWUiLCJ0YXJnZXRWb2x1bWUiLCJ2b2x1bWVJbnRlcnBvbGF0b3IiLCJ2b2x1bWUiLCJjdXJyZW50U291bmRSYXRlIiwidGFyZ2V0U291bmRSYXRlIiwic291bmRSYXRlSW50ZXJwb2xhdG9yIiwicmF0ZSIsInNwZWVkIiwic291bmRSYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwbGF5Iiwic3BlZWRDb250cm9sbGVyIiwiY29udHJvbCIsInNsaWNlcyIsIm1pblNvdW5kUmF0ZSIsIm1heFNvdW5kUmF0ZSIsIm1pblNwZWVkIiwibWF4U3BlZWQiLCJDYW52YXMiLCJpbml0RGl2aWRlcnMiLCJnYXAiLCJjb2xvciIsImJhc2VTcGVlZCIsImxpbWl0ZWRDb25maWciLCJpbml0T3Bwb25lbnRzIiwiY2FyIiwiaW5pdE15Q2FyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2Iiwia2V5Iiwic2V0VGltZW91dCIsImRlZmF1bHRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxJQUFJQywyQ0FBSixDQUFTO0FBQ3JCQyxLQUFHLEVBQUU7QUFEZ0IsQ0FBVCxDQUFkO0FBSUEsSUFBTUMsV0FBVyxHQUFHLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDM0NMLE9BQUssQ0FBQ00sSUFBTixDQUFXLE1BQVgsRUFBbUJELE9BQW5CO0FBQ0QsQ0FGbUIsQ0FBcEI7QUFJQSxJQUFJRSxrQkFBSjtBQU9PLElBQU1DLElBQUk7QUFBQSw4TEFBRyxpQkFDbEJDLE1BRGtCLEVBRWxCQyxLQUZrQixFQUdsQkMsTUFIa0IsRUFJbEJDLFFBSmtCO0FBQUEsaU9BMEVUQyxJQTFFUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMEVUQSxnQkExRVMsb0JBMEVGO0FBQ2RDLHNCQUFRLENBQUNELElBQVQsQ0FBY0UsWUFBZDtBQUNBQyx1QkFBUyxDQUFDSCxJQUFWLENBQWVFLFlBQWY7QUFDQSxrQkFBTUUsWUFBWSxHQUFHRCxTQUFTLENBQUNFLFlBQVYsR0FBeUJDLElBQTlDO0FBQ0FDLG1CQUFLLENBQUNDLElBQU4sQ0FBV0osWUFBWSxLQUFLLE1BQWpCLEdBQTBCLE9BQTFCLEdBQW9DLE1BQS9DO0FBQ0FHLG1CQUFLLENBQUNQLElBQU4sQ0FBV0UsWUFBWDtBQUNBTyx3QkFBVSxDQUFDQyxNQUFYO0FBQ0FoQixnQ0FBa0IsR0FBR2lCLHFCQUFxQixDQUFDWCxJQUFELENBQTFDO0FBQ0FZLG1CQUFLO0FBQ0xWLDBCQUFZLEdBQUdXLHFFQUFXLENBQUNYLFlBQUQsRUFBZVksV0FBZixFQUE0QkMsaUJBQTVCLENBQTFCO0FBQ0FDLDJCQUFhLEdBQUdILHFFQUFXLENBQ3pCRyxhQUR5QixFQUV6QkMsWUFGeUIsRUFHekJDLGtCQUh5QixDQUEzQjtBQUtBL0IsbUJBQUssQ0FBQ2dDLE1BQU4sQ0FBYUgsYUFBYjtBQUNBSSw4QkFBZ0IsR0FBR1AscUVBQVcsQ0FDNUJPLGdCQUQ0QixFQUU1QkMsZUFGNEIsRUFHNUJDLHFCQUg0QixDQUE5QjtBQUtBbkMsbUJBQUssQ0FBQ29DLElBQU4sQ0FBV0gsZ0JBQVg7QUFDQXJCLHNCQUFRLENBQUM7QUFDUGEscUJBQUssRUFBTEEsS0FETztBQUVQWSxxQkFBSyxFQUFFdEIsWUFGQTtBQUdQaUIsc0JBQU0sRUFBRUgsYUFIRDtBQUlQUyx5QkFBUyxFQUFFTDtBQUpKLGVBQUQsQ0FBUjtBQU1ELGFBdEdpQjs7QUFBQTtBQUFBLG1CQU1aOUIsV0FOWTs7QUFBQTtBQU9sQkksOEJBQWtCLElBQUlnQyxvQkFBb0IsQ0FBQ2hDLGtCQUFELENBQTFDO0FBQ0FQLGlCQUFLLENBQUNnQyxNQUFOLENBQWEsQ0FBYjtBQUNBaEMsaUJBQUssQ0FBQ3dDLElBQU47QUFDSXpCLHdCQVZjLEdBVUMsQ0FWRDtBQVdkWSx1QkFYYyxHQVdBLEVBWEE7QUFZZEMsNkJBWmMsR0FZTSxJQVpOO0FBY2RDLHlCQWRjLEdBY0UsQ0FkRjtBQWVkQyx3QkFmYyxHQWVDLENBZkQ7QUFnQmRDLDhCQWhCYyxHQWdCTyxJQWhCUDtBQWtCZEUsNEJBbEJjLEdBa0JLLENBbEJMO0FBbUJkQywyQkFuQmMsR0FtQkksQ0FuQko7QUFvQmRDLGlDQXBCYyxHQW9CVSxDQXBCVjs7QUFzQlpNLDJCQXRCWSxHQXNCTSxTQUFsQkEsZUFBa0IsQ0FBQ0MsT0FBRCxFQUEyQjtBQUFBLGtCQUFqQkMsTUFBaUIsdUVBQVIsR0FBUTtBQUFBLGtCQUMxQ0MsWUFEMEMsR0FDWCxHQURXO0FBQUEsa0JBQzVCQyxZQUQ0QixHQUNOLENBRE07QUFBQSxrQkFFMUNDLFFBRjBDLEdBRW5CLENBRm1CO0FBQUEsa0JBRWhDQyxRQUZnQyxHQUVoQixFQUZnQjtBQUlqRGIsNkJBQWUsR0FBRyxDQUFDVyxZQUFZLEdBQUdELFlBQWhCLElBQWdDRixPQUFsRDtBQUNBUCxtQ0FBcUIsR0FBRyxDQUFDRCxlQUFlLEdBQUdELGdCQUFuQixJQUF1Q1UsTUFBL0Q7QUFFQWhCLHlCQUFXLEdBQUcsQ0FBQ29CLFFBQVEsR0FBR0QsUUFBWixJQUF3QkosT0FBdEM7QUFDQWQsK0JBQWlCLEdBQUcsQ0FBQ0QsV0FBVyxHQUFHWixZQUFmLElBQStCNEIsTUFBbkQ7QUFDRCxhQS9CaUI7O0FBaUNackIsc0JBakNZLEdBaUNDLElBQUkwQiw4Q0FBSixDQUFXdkMsTUFBWCxFQUFtQjtBQUNwQ0MsbUJBQUssRUFBTEEsS0FEb0M7QUFFcENDLG9CQUFNLEVBQU5BO0FBRm9DLGFBQW5CLENBakNEO0FBc0NaRyxvQkF0Q1ksR0FzQ0RtQyx3RUFBWSxDQUMzQjtBQUNFQyxpQkFBRyxFQUFFLEVBRFA7QUFFRUMsbUJBQUssRUFBRSxNQUZUO0FBR0V4QyxvQkFBTSxFQUFFLEVBSFY7QUFJRUQsbUJBQUssRUFBRSxFQUpUO0FBS0UwQyx1QkFBUyxFQUFFO0FBTGIsYUFEMkIsRUFRM0I5QixVQUFVLENBQUMrQixhQUFYLEVBUjJCLENBdENYO0FBZ0RackMscUJBaERZLEdBZ0RBc0MsMkVBQWEsQ0FDN0I7QUFDRUMsaUJBQUcsRUFBRTtBQUFFNUMsc0JBQU0sRUFBRSxHQUFWO0FBQWVELHFCQUFLLEVBQUUsRUFBdEI7QUFBMEJ5QyxxQkFBSyxFQUFFLE1BQWpDO0FBQXlDQyx5QkFBUyxFQUFFO0FBQXBELGVBRFA7QUFFRUYsaUJBQUcsRUFBRTtBQUZQLGFBRDZCLEVBSzdCNUIsVUFBVSxDQUFDK0IsYUFBWCxFQUw2QixDQWhEYjtBQXVEWmpDLGlCQXZEWSxHQXVESm9DLG1FQUFTLENBQ3JCO0FBQUVMLG1CQUFLLEVBQUUsTUFBVDtBQUFpQnhDLG9CQUFNLEVBQUUsR0FBekI7QUFBOEJELG1CQUFLLEVBQUUsRUFBckM7QUFBeUMwQyx1QkFBUyxFQUFFO0FBQXBELGFBRHFCLEVBRXJCOUIsVUFBVSxDQUFDK0IsYUFBWCxFQUZxQixDQXZETDtBQTJEbEJJLGtCQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQUNDLEVBQUQsRUFBUTtBQUN6QyxrQkFBSUEsRUFBRSxDQUFDQyxHQUFILEtBQVcsV0FBZixFQUE0QnhDLEtBQUssQ0FBQ0MsSUFBTixDQUFXLE1BQVg7QUFDNUIsa0JBQUlzQyxFQUFFLENBQUNDLEdBQUgsS0FBVyxZQUFmLEVBQTZCeEMsS0FBSyxDQUFDQyxJQUFOLENBQVcsT0FBWDs7QUFDN0Isa0JBQUlzQyxFQUFFLENBQUNDLEdBQUgsS0FBVyxHQUFmLEVBQW9CO0FBQ2xCOUIsNEJBQVksR0FBRyxDQUFmO0FBQ0FILDJCQUFXLEdBQUcsQ0FBZDtBQUNBTywrQkFBZSxHQUFHLEdBQWxCO0FBQ0FOLGlDQUFpQixHQUFHLEdBQXBCO0FBQ0FPLHFDQUFxQixHQUFHLElBQXhCO0FBQ0EwQiwwQkFBVSxDQUFDLFlBQU07QUFDZkMsMEJBQVE7QUFDVCxpQkFGUyxFQUVQLEtBRk8sQ0FBVjtBQUdEO0FBQ0YsYUFiRDtBQWNJckMsaUJBekVjLEdBeUVOLENBekVNO0FBdUdsQkgsc0JBQVUsQ0FBQ0MsTUFBWDtBQUNBVixnQkFBSTs7QUF4R2M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBSkwsSUFBSTtBQUFBO0FBQUE7QUFBQSxHQUFWIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9nYW1lL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQgeyBpbml0RGl2aWRlcnMgfSBmcm9tIFwiLi9jb21wb25lbnRzL2RpdmlkZXJcIjtcbmltcG9ydCB7IGluaXRPcHBvbmVudHMgfSBmcm9tIFwiLi9jb21wb25lbnRzL29wcG9uZW50c1wiO1xuaW1wb3J0IHsgaW5pdE15Q2FyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9teWNhclwiO1xuaW1wb3J0IHsgSG93bCB9IGZyb20gXCJob3dsZXJcIjtcbmltcG9ydCB7IGludGVycG9sYXRlIH0gZnJvbSBcIi4vY29tcG9uZW50cy91dGlsc1wiO1xuXG5jb25zdCBzb3VuZCA9IG5ldyBIb3dsKHtcbiAgc3JjOiBcIi9nYW1lLm1wM1wiLFxufSk7XG5cbmNvbnN0IHNvdW5kT25Mb2FkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgc291bmQub25jZShcImxvYWRcIiwgcmVzb2x2ZSk7XG59KTtcblxubGV0IHJlcXVlc3RlZEFuaW1hdGlvbjtcbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRzIHtcbiAgc2NvcmU6IG51bWJlcjtcbiAgc3BlZWQ6IG51bWJlcjtcbiAgdm9sdW1lOiBudW1iZXI7XG4gIHNvdW5kUmF0ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IGluaXQgPSBhc3luYyAoXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBvbkNoYW5nZTogKHY6IElTdGF0cykgPT4gdm9pZFxuKSA9PiB7XG4gIGF3YWl0IHNvdW5kT25Mb2FkO1xuICByZXF1ZXN0ZWRBbmltYXRpb24gJiYgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdGVkQW5pbWF0aW9uKTtcbiAgc291bmQudm9sdW1lKDApO1xuICBzb3VuZC5wbGF5KCk7XG4gIHZhciBjdXJyZW50U3BlZWQgPSAwO1xuICB2YXIgdGFyZ2V0U3BlZWQgPSAxNTtcbiAgdmFyIHNwZWVkSW50ZXJwb2xhdG9yID0gMC4wMTtcblxuICB2YXIgY3VycmVudFZvbHVtZSA9IDA7XG4gIHZhciB0YXJnZXRWb2x1bWUgPSAxO1xuICB2YXIgdm9sdW1lSW50ZXJwb2xhdG9yID0gMC4xMTtcblxuICB2YXIgY3VycmVudFNvdW5kUmF0ZSA9IDE7XG4gIHZhciB0YXJnZXRTb3VuZFJhdGUgPSAxO1xuICB2YXIgc291bmRSYXRlSW50ZXJwb2xhdG9yID0gMTtcblxuICBjb25zdCBzcGVlZENvbnRyb2xsZXIgPSAoY29udHJvbCwgc2xpY2VzID0gMTAwKSA9PiB7XG4gICAgY29uc3QgW21pblNvdW5kUmF0ZSwgbWF4U291bmRSYXRlXSA9IFswLjgsIDFdO1xuICAgIGNvbnN0IFttaW5TcGVlZCwgbWF4U3BlZWRdID0gWzIsIDE1XTtcblxuICAgIHRhcmdldFNvdW5kUmF0ZSA9IChtYXhTb3VuZFJhdGUgLSBtaW5Tb3VuZFJhdGUpICogY29udHJvbDtcbiAgICBzb3VuZFJhdGVJbnRlcnBvbGF0b3IgPSAodGFyZ2V0U291bmRSYXRlIC0gY3VycmVudFNvdW5kUmF0ZSkgLyBzbGljZXM7XG5cbiAgICB0YXJnZXRTcGVlZCA9IChtYXhTcGVlZCAtIG1pblNwZWVkKSAqIGNvbnRyb2w7XG4gICAgc3BlZWRJbnRlcnBvbGF0b3IgPSAodGFyZ2V0U3BlZWQgLSBjdXJyZW50U3BlZWQpIC8gc2xpY2VzO1xuICB9O1xuXG4gIGNvbnN0IHBsYXlncm91bmQgPSBuZXcgQ2FudmFzKGNhbnZhcywge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgfSk7XG5cbiAgY29uc3QgZGl2aWRlcnMgPSBpbml0RGl2aWRlcnMoXG4gICAge1xuICAgICAgZ2FwOiA1MCxcbiAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgIGhlaWdodDogODAsXG4gICAgICB3aWR0aDogMjAsXG4gICAgICBiYXNlU3BlZWQ6IDEsXG4gICAgfSxcbiAgICBwbGF5Z3JvdW5kLmxpbWl0ZWRDb25maWcoKVxuICApO1xuICBjb25zdCBvcHBvbmVudHMgPSBpbml0T3Bwb25lbnRzKFxuICAgIHtcbiAgICAgIGNhcjogeyBoZWlnaHQ6IDEwMCwgd2lkdGg6IDUwLCBjb2xvcjogXCIjY2NjXCIsIGJhc2VTcGVlZDogMiB9LFxuICAgICAgZ2FwOiAyMDAsXG4gICAgfSxcbiAgICBwbGF5Z3JvdW5kLmxpbWl0ZWRDb25maWcoKVxuICApO1xuICBjb25zdCBteUNhciA9IGluaXRNeUNhcihcbiAgICB7IGNvbG9yOiBcImN5YW5cIiwgaGVpZ2h0OiAxMDAsIHdpZHRoOiA1MCwgYmFzZVNwZWVkOiA0IH0sXG4gICAgcGxheWdyb3VuZC5saW1pdGVkQ29uZmlnKClcbiAgKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldikgPT4ge1xuICAgIGlmIChldi5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIG15Q2FyLm1vdmUoXCJsZWZ0XCIpO1xuICAgIGlmIChldi5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSBteUNhci5tb3ZlKFwicmlnaHRcIik7XG4gICAgaWYgKGV2LmtleSA9PT0gXCJyXCIpIHtcbiAgICAgIHRhcmdldFZvbHVtZSA9IDE7XG4gICAgICB0YXJnZXRTcGVlZCA9IDE7XG4gICAgICB0YXJnZXRTb3VuZFJhdGUgPSAwLjQ7XG4gICAgICBzcGVlZEludGVycG9sYXRvciA9IDAuMTtcbiAgICAgIHNvdW5kUmF0ZUludGVycG9sYXRvciA9IDAuMDU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGVmYXVsdHMoKTtcbiAgICAgIH0sIDEwMDAwKTtcbiAgICB9XG4gIH0pO1xuICBsZXQgc2NvcmUgPSAwO1xuICBmdW5jdGlvbiB0aWNrKCkge1xuICAgIGRpdmlkZXJzLnRpY2soY3VycmVudFNwZWVkKTtcbiAgICBvcHBvbmVudHMudGljayhjdXJyZW50U3BlZWQpO1xuICAgIGNvbnN0IG9wcG9uZW50TGFuZSA9IG9wcG9uZW50cy5sYXN0T3Bwb25lbnQoKS5sYW5lO1xuICAgIG15Q2FyLm1vdmUob3Bwb25lbnRMYW5lID09PSBcImxlZnRcIiA/IFwicmlnaHRcIiA6IFwibGVmdFwiKTtcbiAgICBteUNhci50aWNrKGN1cnJlbnRTcGVlZCk7XG4gICAgcGxheWdyb3VuZC5yZW5kZXIoKTtcbiAgICByZXF1ZXN0ZWRBbmltYXRpb24gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gICAgc2NvcmUrKztcbiAgICBjdXJyZW50U3BlZWQgPSBpbnRlcnBvbGF0ZShjdXJyZW50U3BlZWQsIHRhcmdldFNwZWVkLCBzcGVlZEludGVycG9sYXRvcik7XG4gICAgY3VycmVudFZvbHVtZSA9IGludGVycG9sYXRlKFxuICAgICAgY3VycmVudFZvbHVtZSxcbiAgICAgIHRhcmdldFZvbHVtZSxcbiAgICAgIHZvbHVtZUludGVycG9sYXRvclxuICAgICk7XG4gICAgc291bmQudm9sdW1lKGN1cnJlbnRWb2x1bWUpO1xuICAgIGN1cnJlbnRTb3VuZFJhdGUgPSBpbnRlcnBvbGF0ZShcbiAgICAgIGN1cnJlbnRTb3VuZFJhdGUsXG4gICAgICB0YXJnZXRTb3VuZFJhdGUsXG4gICAgICBzb3VuZFJhdGVJbnRlcnBvbGF0b3JcbiAgICApO1xuICAgIHNvdW5kLnJhdGUoY3VycmVudFNvdW5kUmF0ZSk7XG4gICAgb25DaGFuZ2Uoe1xuICAgICAgc2NvcmUsXG4gICAgICBzcGVlZDogY3VycmVudFNwZWVkLFxuICAgICAgdm9sdW1lOiBjdXJyZW50Vm9sdW1lLFxuICAgICAgc291bmRSYXRlOiBjdXJyZW50U291bmRSYXRlLFxuICAgIH0pO1xuICB9XG4gIHBsYXlncm91bmQucmVuZGVyKCk7XG4gIHRpY2soKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/index.ts\n");

/***/ })

})