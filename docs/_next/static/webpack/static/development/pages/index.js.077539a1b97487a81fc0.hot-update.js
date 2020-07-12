webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/game/index.ts":
/*!**********************************!*\
  !*** ./components/game/index.ts ***!
  \**********************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ \"./components/game/canvas/index.ts\");\n/* harmony import */ var _components_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/divider */ \"./components/game/components/divider.ts\");\n/* harmony import */ var _components_opponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/opponents */ \"./components/game/components/opponents.ts\");\n/* harmony import */ var _components_mycar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mycar */ \"./components/game/components/mycar.ts\");\n/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! howler */ \"./node_modules/howler/dist/howler.js\");\n/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/utils */ \"./components/game/components/utils.ts\");\n\n\n\n\n\n\n\n\nvar sound = new howler__WEBPACK_IMPORTED_MODULE_6__[\"Howl\"]({\n  src: \"/assets/game.mp3\",\n  loop: true\n});\nvar soundOnLoad = new Promise(function (resolve) {\n  sound.once(\"load\", resolve);\n});\nvar requestedAnimation;\nvar init = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(canvas, width, height, onChange) {\n    var currentSpeed, targetSpeed, speedInterpolator, currentVolume, targetVolume, volumeInterpolator, currentSoundRate, targetSoundRate, soundRateInterpolator, speedController, playground, dividers, opponents, myCar, slowedDown, score, sleepTimeout, entrance, _entrance, tick;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            tick = function _tick() {\n              dividers.tick(currentSpeed);\n              opponents.tick(currentSpeed);\n              var opponentLane = opponents.lastOpponent().lane;\n\n              if (!slowedDown) {\n                myCar.move(opponentLane === \"left\" ? \"right\" : \"left\");\n              }\n\n              myCar.tick(currentSpeed / 2);\n              playground.render();\n              requestedAnimation = requestAnimationFrame(tick);\n              score++;\n              currentSpeed = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentSpeed, targetSpeed, speedInterpolator);\n              currentVolume = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentVolume, targetVolume, volumeInterpolator);\n              sound.volume(currentVolume);\n              currentSoundRate = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentSoundRate, targetSoundRate, soundRateInterpolator);\n              sound.rate(currentSoundRate);\n              onChange({\n                score: score,\n                speed: currentSpeed,\n                volume: currentVolume,\n                soundRate: currentSoundRate\n              });\n            };\n\n            _entrance = function _entrance3() {\n              _entrance = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n                var requestedFrame, entDividers, entMyCar;\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n                  while (1) {\n                    switch (_context2.prev = _context2.next) {\n                      case 0:\n                        entMyCar = function _entMyCar() {\n                          dividers.tick(currentSpeed);\n                          myCar.tick(currentSpeed / 2);\n                          requestedFrame = requestAnimationFrame(entMyCar);\n                          playground.render();\n                        };\n\n                        entDividers = function _entDividers() {\n                          dividers.tick(currentSpeed);\n                          requestedFrame = requestAnimationFrame(entDividers);\n                          playground.render();\n                        };\n\n                        _context2.next = 4;\n                        return sleepTimeout(1000);\n\n                      case 4:\n                        entDividers();\n                        _context2.next = 7;\n                        return sleepTimeout(1000);\n\n                      case 7:\n                        cancelAnimationFrame(requestedFrame);\n                        entMyCar();\n                        _context2.next = 11;\n                        return sleepTimeout(3000);\n\n                      case 11:\n                        cancelAnimationFrame(requestedFrame);\n                        tick();\n\n                      case 13:\n                      case \"end\":\n                        return _context2.stop();\n                    }\n                  }\n                }, _callee2);\n              }));\n              return _entrance.apply(this, arguments);\n            };\n\n            entrance = function _entrance2() {\n              return _entrance.apply(this, arguments);\n            };\n\n            _context3.next = 5;\n            return soundOnLoad;\n\n          case 5:\n            requestedAnimation && cancelAnimationFrame(requestedAnimation);\n            currentSpeed = 2;\n            targetSpeed = 15;\n            speedInterpolator = 0.01;\n            currentVolume = 0.2;\n            targetVolume = 1;\n            volumeInterpolator = 0.01;\n            sound.volume(currentVolume);\n            sound.play();\n            currentSoundRate = 1;\n            targetSoundRate = 1;\n            soundRateInterpolator = 1;\n\n            speedController = function speedController(control) {\n              var slices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n              var minSoundRate = 0.5,\n                  maxSoundRate = 1;\n              var minSpeed = 2,\n                  maxSpeed = 15;\n              targetSoundRate = minSoundRate + (maxSoundRate - minSoundRate) * control;\n              soundRateInterpolator = Math.abs((targetSoundRate - currentSoundRate) / slices);\n              targetSpeed = minSpeed + (maxSpeed - minSpeed) * control;\n              speedInterpolator = Math.abs((targetSpeed - currentSpeed) / slices);\n            };\n\n            playground = new _canvas__WEBPACK_IMPORTED_MODULE_2__[\"Canvas\"](canvas, {\n              width: width,\n              height: height\n            });\n            dividers = Object(_components_divider__WEBPACK_IMPORTED_MODULE_3__[\"initDividers\"])({\n              gap: 50,\n              color: \"#fff\",\n              height: 80,\n              width: 20,\n              baseSpeed: 1\n            }, playground.limitedConfig());\n            opponents = Object(_components_opponents__WEBPACK_IMPORTED_MODULE_4__[\"initOpponents\"])({\n              car: {\n                height: 100,\n                width: 50,\n                color: \"#ccc\",\n                baseSpeed: 2\n              },\n              gap: 200\n            }, playground.limitedConfig());\n            myCar = Object(_components_mycar__WEBPACK_IMPORTED_MODULE_5__[\"initMyCar\"])({\n              color: \"cyan\",\n              height: 100,\n              width: 50,\n              baseSpeed: 4\n            }, playground.limitedConfig());\n            slowedDown = false;\n            window.addEventListener(\"keydown\", /*#__PURE__*/function () {\n              var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ev) {\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        if (ev.key === \"ArrowLeft\") myCar.move(\"left\");\n                        if (ev.key === \"ArrowRight\") myCar.move(\"right\");\n\n                        if (!(ev.key === \"r\")) {\n                          _context.next = 11;\n                          break;\n                        }\n\n                        speedController(0, 100);\n                        _context.next = 6;\n                        return sleepTimeout(1000);\n\n                      case 6:\n                        slowedDown = true;\n                        _context.next = 9;\n                        return sleepTimeout(10000);\n\n                      case 9:\n                        speedController(1, 100);\n                        slowedDown = false;\n\n                      case 11:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              return function (_x5) {\n                return _ref2.apply(this, arguments);\n              };\n            }());\n            score = 0;\n            playground.render(); // Entrance...\n\n            sleepTimeout = function sleepTimeout(time) {\n              return new Promise(function (resolve) {\n                return setTimeout(resolve, time);\n              });\n            };\n\n            entrance();\n\n          case 28:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function init(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvaW5kZXgudHM/MGE1NSJdLCJuYW1lcyI6WyJzb3VuZCIsIkhvd2wiLCJzcmMiLCJsb29wIiwic291bmRPbkxvYWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9uY2UiLCJyZXF1ZXN0ZWRBbmltYXRpb24iLCJpbml0IiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJvbkNoYW5nZSIsImVudHJhbmNlIiwidGljayIsImRpdmlkZXJzIiwiY3VycmVudFNwZWVkIiwib3Bwb25lbnRzIiwib3Bwb25lbnRMYW5lIiwibGFzdE9wcG9uZW50IiwibGFuZSIsInNsb3dlZERvd24iLCJteUNhciIsIm1vdmUiLCJwbGF5Z3JvdW5kIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2NvcmUiLCJpbnRlcnBvbGF0ZSIsInRhcmdldFNwZWVkIiwic3BlZWRJbnRlcnBvbGF0b3IiLCJjdXJyZW50Vm9sdW1lIiwidGFyZ2V0Vm9sdW1lIiwidm9sdW1lSW50ZXJwb2xhdG9yIiwidm9sdW1lIiwiY3VycmVudFNvdW5kUmF0ZSIsInRhcmdldFNvdW5kUmF0ZSIsInNvdW5kUmF0ZUludGVycG9sYXRvciIsInJhdGUiLCJzcGVlZCIsInNvdW5kUmF0ZSIsImVudERpdmlkZXJzIiwiZW50TXlDYXIiLCJyZXF1ZXN0ZWRGcmFtZSIsInNsZWVwVGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicGxheSIsInNwZWVkQ29udHJvbGxlciIsImNvbnRyb2wiLCJzbGljZXMiLCJtaW5Tb3VuZFJhdGUiLCJtYXhTb3VuZFJhdGUiLCJtaW5TcGVlZCIsIm1heFNwZWVkIiwiTWF0aCIsImFicyIsIkNhbnZhcyIsImluaXREaXZpZGVycyIsImdhcCIsImNvbG9yIiwiYmFzZVNwZWVkIiwibGltaXRlZENvbmZpZyIsImluaXRPcHBvbmVudHMiLCJjYXIiLCJpbml0TXlDYXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVy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O0FBQ2pDLDRCQUFJQSxFQUFFLENBQUNDLEdBQUgsS0FBVyxXQUFmLEVBQTRCOUMsS0FBSyxDQUFDQyxJQUFOLENBQVcsTUFBWDtBQUM1Qiw0QkFBSTRDLEVBQUUsQ0FBQ0MsR0FBSCxLQUFXLFlBQWYsRUFBNkI5QyxLQUFLLENBQUNDLElBQU4sQ0FBVyxPQUFYOztBQUZJLDhCQUc3QjRDLEVBQUUsQ0FBQ0MsR0FBSCxLQUFXLEdBSGtCO0FBQUE7QUFBQTtBQUFBOztBQUkvQnJCLHVDQUFlLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBZjtBQUorQjtBQUFBLCtCQUt6QkgsWUFBWSxDQUFDLElBQUQsQ0FMYTs7QUFBQTtBQU0vQnZCLGtDQUFVLEdBQUcsSUFBYjtBQU4rQjtBQUFBLCtCQU96QnVCLFlBQVksQ0FBQyxLQUFELENBUGE7O0FBQUE7QUFRL0JHLHVDQUFlLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBZjtBQUNBMUIsa0NBQVUsR0FBRyxLQUFiOztBQVQrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFuQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlJTSxpQkEzRWMsR0EyRU4sQ0EzRU07QUE0RWxCSCxzQkFBVSxDQUFDQyxNQUFYLEdBNUVrQixDQThFbEI7O0FBQ0ltQix3QkEvRWMsR0ErRUMsU0FBZkEsWUFBZSxDQUFDeUIsSUFBRDtBQUFBLHFCQUNqQixJQUFJakUsT0FBSixDQUFZLFVBQUNDLE9BQUQ7QUFBQSx1QkFBYWlFLFVBQVUsQ0FBQ2pFLE9BQUQsRUFBVWdFLElBQVYsQ0FBdkI7QUFBQSxlQUFaLENBRGlCO0FBQUEsYUEvRUQ7O0FBaUZsQnhELG9CQUFROztBQWpGVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFKTCxJQUFJO0FBQUE7QUFBQTtBQUFBLEdBQVYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwiLi9jYW52YXNcIjtcbmltcG9ydCB7IGluaXREaXZpZGVycyB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGl2aWRlclwiO1xuaW1wb3J0IHsgaW5pdE9wcG9uZW50cyB9IGZyb20gXCIuL2NvbXBvbmVudHMvb3Bwb25lbnRzXCI7XG5pbXBvcnQgeyBpbml0TXlDYXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL215Y2FyXCI7XG5pbXBvcnQgeyBIb3dsIH0gZnJvbSBcImhvd2xlclwiO1xuaW1wb3J0IHsgaW50ZXJwb2xhdGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL3V0aWxzXCI7XG5cbmNvbnN0IHNvdW5kID0gbmV3IEhvd2woe1xuICBzcmM6IFwiL2Fzc2V0cy9nYW1lLm1wM1wiLFxuICBsb29wOiB0cnVlLFxufSk7XG5cbmNvbnN0IHNvdW5kT25Mb2FkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgc291bmQub25jZShcImxvYWRcIiwgcmVzb2x2ZSk7XG59KTtcblxubGV0IHJlcXVlc3RlZEFuaW1hdGlvbjtcbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRzIHtcbiAgc2NvcmU6IG51bWJlcjtcbiAgc3BlZWQ6IG51bWJlcjtcbiAgdm9sdW1lOiBudW1iZXI7XG4gIHNvdW5kUmF0ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IGluaXQgPSBhc3luYyAoXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBvbkNoYW5nZTogKHY6IElTdGF0cykgPT4gdm9pZFxuKSA9PiB7XG4gIGF3YWl0IHNvdW5kT25Mb2FkO1xuICByZXF1ZXN0ZWRBbmltYXRpb24gJiYgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdGVkQW5pbWF0aW9uKTtcbiAgdmFyIGN1cnJlbnRTcGVlZCA9IDI7XG4gIHZhciB0YXJnZXRTcGVlZCA9IDE1O1xuICB2YXIgc3BlZWRJbnRlcnBvbGF0b3IgPSAwLjAxO1xuXG4gIHZhciBjdXJyZW50Vm9sdW1lID0gMC4yO1xuICB2YXIgdGFyZ2V0Vm9sdW1lID0gMTtcbiAgdmFyIHZvbHVtZUludGVycG9sYXRvciA9IDAuMDE7XG5cbiAgc291bmQudm9sdW1lKGN1cnJlbnRWb2x1bWUpO1xuICBzb3VuZC5wbGF5KCk7XG5cbiAgdmFyIGN1cnJlbnRTb3VuZFJhdGUgPSAxO1xuICB2YXIgdGFyZ2V0U291bmRSYXRlID0gMTtcbiAgdmFyIHNvdW5kUmF0ZUludGVycG9sYXRvciA9IDE7XG5cbiAgY29uc3Qgc3BlZWRDb250cm9sbGVyID0gKGNvbnRyb2wsIHNsaWNlcyA9IDEwMCkgPT4ge1xuICAgIGNvbnN0IFttaW5Tb3VuZFJhdGUsIG1heFNvdW5kUmF0ZV0gPSBbMC41LCAxXTtcbiAgICBjb25zdCBbbWluU3BlZWQsIG1heFNwZWVkXSA9IFsyLCAxNV07XG5cbiAgICB0YXJnZXRTb3VuZFJhdGUgPSBtaW5Tb3VuZFJhdGUgKyAobWF4U291bmRSYXRlIC0gbWluU291bmRSYXRlKSAqIGNvbnRyb2w7XG4gICAgc291bmRSYXRlSW50ZXJwb2xhdG9yID0gTWF0aC5hYnMoXG4gICAgICAodGFyZ2V0U291bmRSYXRlIC0gY3VycmVudFNvdW5kUmF0ZSkgLyBzbGljZXNcbiAgICApO1xuXG4gICAgdGFyZ2V0U3BlZWQgPSBtaW5TcGVlZCArIChtYXhTcGVlZCAtIG1pblNwZWVkKSAqIGNvbnRyb2w7XG4gICAgc3BlZWRJbnRlcnBvbGF0b3IgPSBNYXRoLmFicygodGFyZ2V0U3BlZWQgLSBjdXJyZW50U3BlZWQpIC8gc2xpY2VzKTtcbiAgfTtcblxuICBjb25zdCBwbGF5Z3JvdW5kID0gbmV3IENhbnZhcyhjYW52YXMsIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gIH0pO1xuXG4gIGNvbnN0IGRpdmlkZXJzID0gaW5pdERpdmlkZXJzKFxuICAgIHtcbiAgICAgIGdhcDogNTAsXG4gICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICBoZWlnaHQ6IDgwLFxuICAgICAgd2lkdGg6IDIwLFxuICAgICAgYmFzZVNwZWVkOiAxLFxuICAgIH0sXG4gICAgcGxheWdyb3VuZC5saW1pdGVkQ29uZmlnKClcbiAgKTtcbiAgY29uc3Qgb3Bwb25lbnRzID0gaW5pdE9wcG9uZW50cyhcbiAgICB7XG4gICAgICBjYXI6IHsgaGVpZ2h0OiAxMDAsIHdpZHRoOiA1MCwgY29sb3I6IFwiI2NjY1wiLCBiYXNlU3BlZWQ6IDIgfSxcbiAgICAgIGdhcDogMjAwLFxuICAgIH0sXG4gICAgcGxheWdyb3VuZC5saW1pdGVkQ29uZmlnKClcbiAgKTtcbiAgY29uc3QgbXlDYXIgPSBpbml0TXlDYXIoXG4gICAgeyBjb2xvcjogXCJjeWFuXCIsIGhlaWdodDogMTAwLCB3aWR0aDogNTAsIGJhc2VTcGVlZDogNCB9LFxuICAgIHBsYXlncm91bmQubGltaXRlZENvbmZpZygpXG4gICk7XG4gIGxldCBzbG93ZWREb3duID0gZmFsc2U7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBhc3luYyAoZXYpID0+IHtcbiAgICBpZiAoZXYua2V5ID09PSBcIkFycm93TGVmdFwiKSBteUNhci5tb3ZlKFwibGVmdFwiKTtcbiAgICBpZiAoZXYua2V5ID09PSBcIkFycm93UmlnaHRcIikgbXlDYXIubW92ZShcInJpZ2h0XCIpO1xuICAgIGlmIChldi5rZXkgPT09IFwiclwiKSB7XG4gICAgICBzcGVlZENvbnRyb2xsZXIoMCwgMTAwKTtcbiAgICAgIGF3YWl0IHNsZWVwVGltZW91dCgxMDAwKTtcbiAgICAgIHNsb3dlZERvd24gPSB0cnVlO1xuICAgICAgYXdhaXQgc2xlZXBUaW1lb3V0KDEwMDAwKTtcbiAgICAgIHNwZWVkQ29udHJvbGxlcigxLCAxMDApO1xuICAgICAgc2xvd2VkRG93biA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIGxldCBzY29yZSA9IDA7XG4gIHBsYXlncm91bmQucmVuZGVyKCk7XG5cbiAgLy8gRW50cmFuY2UuLi5cbiAgdmFyIHNsZWVwVGltZW91dCA9ICh0aW1lOiBudW1iZXIpID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSkpO1xuICBlbnRyYW5jZSgpO1xuICBhc3luYyBmdW5jdGlvbiBlbnRyYW5jZSgpIHtcbiAgICBhd2FpdCBzbGVlcFRpbWVvdXQoMTAwMCk7XG4gICAgbGV0IHJlcXVlc3RlZEZyYW1lO1xuICAgIGZ1bmN0aW9uIGVudERpdmlkZXJzKCkge1xuICAgICAgZGl2aWRlcnMudGljayhjdXJyZW50U3BlZWQpO1xuICAgICAgcmVxdWVzdGVkRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZW50RGl2aWRlcnMpO1xuICAgICAgcGxheWdyb3VuZC5yZW5kZXIoKTtcbiAgICB9XG4gICAgZW50RGl2aWRlcnMoKTtcbiAgICBhd2FpdCBzbGVlcFRpbWVvdXQoMTAwMCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdGVkRnJhbWUpO1xuICAgIGZ1bmN0aW9uIGVudE15Q2FyKCkge1xuICAgICAgZGl2aWRlcnMudGljayhjdXJyZW50U3BlZWQpO1xuICAgICAgbXlDYXIudGljayhjdXJyZW50U3BlZWQgLyAyKTtcbiAgICAgIHJlcXVlc3RlZEZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGVudE15Q2FyKTtcbiAgICAgIHBsYXlncm91bmQucmVuZGVyKCk7XG4gICAgfVxuICAgIGVudE15Q2FyKCk7XG4gICAgYXdhaXQgc2xlZXBUaW1lb3V0KDMwMDApO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RlZEZyYW1lKTtcbiAgICB0aWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0aWNrKCkge1xuICAgIGRpdmlkZXJzLnRpY2soY3VycmVudFNwZWVkKTtcbiAgICBvcHBvbmVudHMudGljayhjdXJyZW50U3BlZWQpO1xuICAgIGNvbnN0IG9wcG9uZW50TGFuZSA9IG9wcG9uZW50cy5sYXN0T3Bwb25lbnQoKS5sYW5lO1xuICAgIGlmICghc2xvd2VkRG93bikge1xuICAgICAgbXlDYXIubW92ZShvcHBvbmVudExhbmUgPT09IFwibGVmdFwiID8gXCJyaWdodFwiIDogXCJsZWZ0XCIpO1xuICAgIH1cbiAgICBteUNhci50aWNrKGN1cnJlbnRTcGVlZCAvIDIpO1xuICAgIHBsYXlncm91bmQucmVuZGVyKCk7XG4gICAgcmVxdWVzdGVkQW5pbWF0aW9uID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgIHNjb3JlKys7XG4gICAgY3VycmVudFNwZWVkID0gaW50ZXJwb2xhdGUoY3VycmVudFNwZWVkLCB0YXJnZXRTcGVlZCwgc3BlZWRJbnRlcnBvbGF0b3IpO1xuICAgIGN1cnJlbnRWb2x1bWUgPSBpbnRlcnBvbGF0ZShcbiAgICAgIGN1cnJlbnRWb2x1bWUsXG4gICAgICB0YXJnZXRWb2x1bWUsXG4gICAgICB2b2x1bWVJbnRlcnBvbGF0b3JcbiAgICApO1xuICAgIHNvdW5kLnZvbHVtZShjdXJyZW50Vm9sdW1lKTtcbiAgICBjdXJyZW50U291bmRSYXRlID0gaW50ZXJwb2xhdGUoXG4gICAgICBjdXJyZW50U291bmRSYXRlLFxuICAgICAgdGFyZ2V0U291bmRSYXRlLFxuICAgICAgc291bmRSYXRlSW50ZXJwb2xhdG9yXG4gICAgKTtcbiAgICBzb3VuZC5yYXRlKGN1cnJlbnRTb3VuZFJhdGUpO1xuICAgIG9uQ2hhbmdlKHtcbiAgICAgIHNjb3JlLFxuICAgICAgc3BlZWQ6IGN1cnJlbnRTcGVlZCxcbiAgICAgIHZvbHVtZTogY3VycmVudFZvbHVtZSxcbiAgICAgIHNvdW5kUmF0ZTogY3VycmVudFNvdW5kUmF0ZSxcbiAgICB9KTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/index.ts\n");

/***/ })

})