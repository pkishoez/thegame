webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/game/index.ts":
/*!**********************************!*\
  !*** ./components/game/index.ts ***!
  \**********************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ \"./components/game/canvas/index.ts\");\n/* harmony import */ var _components_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/divider */ \"./components/game/components/divider.ts\");\n/* harmony import */ var _components_opponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/opponents */ \"./components/game/components/opponents.ts\");\n/* harmony import */ var _components_mycar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mycar */ \"./components/game/components/mycar.ts\");\n/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! howler */ \"./node_modules/howler/dist/howler.js\");\n/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/utils */ \"./components/game/components/utils.ts\");\n\n\n\n\n\n\n\n\nvar sound = new howler__WEBPACK_IMPORTED_MODULE_6__[\"Howl\"]({\n  src: \"/game.mp3\"\n});\nvar soundOnLoad = new Promise(function (resolve) {\n  sound.once(\"load\", resolve);\n});\nvar requestedAnimation;\nvar init = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(canvas, width, height, onChange) {\n    var currentSpeed, targetSpeed, speedInterpolator, currentVolume, targetVolume, volumeInterpolator, currentSoundRate, targetSoundRate, soundRateInterpolator, speedController, playground, dividers, opponents, myCar, score, tick;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            tick = function _tick() {\n              dividers.tick(currentSpeed);\n              opponents.tick(currentSpeed);\n              var opponentLane = opponents.lastOpponent().lane;\n              myCar.move(opponentLane === \"left\" ? \"right\" : \"left\");\n              myCar.tick(currentSpeed / 2);\n              playground.render();\n              requestedAnimation = requestAnimationFrame(tick);\n              score++;\n              currentSpeed = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentSpeed, targetSpeed, speedInterpolator);\n              currentVolume = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentVolume, targetVolume, volumeInterpolator);\n              sound.volume(currentVolume);\n              currentSoundRate = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentSoundRate, targetSoundRate, soundRateInterpolator);\n              sound.rate(currentSoundRate);\n              onChange({\n                score: score,\n                speed: currentSpeed,\n                volume: currentVolume,\n                soundRate: currentSoundRate\n              });\n            };\n\n            _context.next = 3;\n            return soundOnLoad;\n\n          case 3:\n            requestedAnimation && cancelAnimationFrame(requestedAnimation);\n            sound.volume(0);\n            sound.play();\n            currentSpeed = 0;\n            targetSpeed = 15;\n            speedInterpolator = 0.01;\n            currentVolume = 0;\n            targetVolume = 1;\n            volumeInterpolator = 0.01;\n            currentSoundRate = 1;\n            targetSoundRate = 1;\n            soundRateInterpolator = 1;\n\n            speedController = function speedController(control) {\n              var slices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n              var minSoundRate = 0.5,\n                  maxSoundRate = 1;\n              var minSpeed = 2,\n                  maxSpeed = 15;\n              targetSoundRate = minSoundRate + (maxSoundRate - minSoundRate) * control;\n              soundRateInterpolator = Math.abs((targetSoundRate - currentSoundRate) / slices);\n              targetSpeed = minSpeed + (maxSpeed - minSpeed) * control;\n              speedInterpolator = Math.abs((targetSpeed - currentSpeed) / slices);\n            };\n\n            playground = new _canvas__WEBPACK_IMPORTED_MODULE_2__[\"Canvas\"](canvas, {\n              width: width,\n              height: height\n            });\n            dividers = Object(_components_divider__WEBPACK_IMPORTED_MODULE_3__[\"initDividers\"])({\n              gap: 50,\n              color: \"#fff\",\n              height: 80,\n              width: 20,\n              baseSpeed: 1\n            }, playground.limitedConfig());\n            opponents = Object(_components_opponents__WEBPACK_IMPORTED_MODULE_4__[\"initOpponents\"])({\n              car: {\n                height: 100,\n                width: 50,\n                color: \"#ccc\",\n                baseSpeed: 2\n              },\n              gap: 200\n            }, playground.limitedConfig());\n            myCar = Object(_components_mycar__WEBPACK_IMPORTED_MODULE_5__[\"initMyCar\"])({\n              color: \"cyan\",\n              height: 100,\n              width: 50,\n              baseSpeed: 4\n            }, playground.limitedConfig());\n            window.addEventListener(\"keydown\", function (ev) {\n              if (ev.key === \"ArrowLeft\") myCar.move(\"left\");\n              if (ev.key === \"ArrowRight\") myCar.move(\"right\");\n\n              if (ev.key === \"r\") {\n                speedController(0, 100);\n                setTimeout(function () {\n                  speedController(1, 100);\n                }, 10000);\n              }\n            });\n            score = 0; // Entrance...\n\n            playground.render();\n\n          case 23:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function init(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvaW5kZXgudHM/MGE1NSJdLCJuYW1lcyI6WyJzb3VuZCIsIkhvd2wiLCJzcmMiLCJzb3VuZE9uTG9hZCIsIlByb21pc2UiLCJyZXNvbHZlIiwib25jZSIsInJlcXVlc3RlZEFuaW1hdGlvbiIsImluaXQiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2hhbmdlIiwidGljayIsImRpdmlkZXJzIiwiY3VycmVudFNwZWVkIiwib3Bwb25lbnRzIiwib3Bwb25lbnRMYW5lIiwibGFzdE9wcG9uZW50IiwibGFuZSIsIm15Q2FyIiwibW92ZSIsInBsYXlncm91bmQiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzY29yZSIsImludGVycG9sYXRlIiwidGFyZ2V0U3BlZWQiLCJzcGVlZEludGVycG9sYXRvciIsImN1cnJlbnRWb2x1bWUiLCJ0YXJnZXRWb2x1bWUiLCJ2b2x1bWVJbnRlcnBvbGF0b3IiLCJ2b2x1bWUiLCJjdXJyZW50U291bmRSYXRlIiwidGFyZ2V0U291bmRSYXRlIiwic291bmRSYXRlSW50ZXJwb2xhdG9yIiwicmF0ZSIsInNwZWVkIiwic291bmRSYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwbGF5Iiwic3BlZWRDb250cm9sbGVyIiwiY29udHJvbCIsInNsaWNlcyIsIm1pblNvdW5kUmF0ZSIsIm1heFNvdW5kUmF0ZSIsIm1pblNwZWVkIiwibWF4U3BlZWQiLCJNYXRoIiwiYWJzIiwiQ2FudmFzIiwiaW5pdERpdmlkZXJzIiwiZ2FwIiwiY29sb3IiLCJiYXNlU3BlZWQiLCJsaW1pdGVkQ29uZmlnIiwiaW5pdE9wcG9uZW50cyIsImNhciIsImluaXRNeUNhciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsImtleSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLElBQUlDLDJDQUFKLENBQVM7QUFDckJDLEtBQUcsRUFBRTtBQURnQixDQUFULENBQWQ7QUFJQSxJQUFNQyxXQUFXLEdBQUcsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUMzQ0wsT0FBSyxDQUFDTSxJQUFOLENBQVcsTUFBWCxFQUFtQkQsT0FBbkI7QUFDRCxDQUZtQixDQUFwQjtBQUlBLElBQUlFLGtCQUFKO0FBT08sSUFBTUMsSUFBSTtBQUFBLDhMQUFHLGlCQUNsQkMsTUFEa0IsRUFFbEJDLEtBRmtCLEVBR2xCQyxNQUhrQixFQUlsQkMsUUFKa0I7QUFBQSxpT0EwRVRDLElBMUVTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEwRVRBLGdCQTFFUyxvQkEwRUY7QUFDZEMsc0JBQVEsQ0FBQ0QsSUFBVCxDQUFjRSxZQUFkO0FBQ0FDLHVCQUFTLENBQUNILElBQVYsQ0FBZUUsWUFBZjtBQUNBLGtCQUFNRSxZQUFZLEdBQUdELFNBQVMsQ0FBQ0UsWUFBVixHQUF5QkMsSUFBOUM7QUFDQUMsbUJBQUssQ0FBQ0MsSUFBTixDQUFXSixZQUFZLEtBQUssTUFBakIsR0FBMEIsT0FBMUIsR0FBb0MsTUFBL0M7QUFDQUcsbUJBQUssQ0FBQ1AsSUFBTixDQUFXRSxZQUFZLEdBQUcsQ0FBMUI7QUFDQU8sd0JBQVUsQ0FBQ0MsTUFBWDtBQUNBaEIsZ0NBQWtCLEdBQUdpQixxQkFBcUIsQ0FBQ1gsSUFBRCxDQUExQztBQUNBWSxtQkFBSztBQUNMViwwQkFBWSxHQUFHVyxxRUFBVyxDQUFDWCxZQUFELEVBQWVZLFdBQWYsRUFBNEJDLGlCQUE1QixDQUExQjtBQUNBQywyQkFBYSxHQUFHSCxxRUFBVyxDQUN6QkcsYUFEeUIsRUFFekJDLFlBRnlCLEVBR3pCQyxrQkFIeUIsQ0FBM0I7QUFLQS9CLG1CQUFLLENBQUNnQyxNQUFOLENBQWFILGFBQWI7QUFDQUksOEJBQWdCLEdBQUdQLHFFQUFXLENBQzVCTyxnQkFENEIsRUFFNUJDLGVBRjRCLEVBRzVCQyxxQkFINEIsQ0FBOUI7QUFLQW5DLG1CQUFLLENBQUNvQyxJQUFOLENBQVdILGdCQUFYO0FBQ0FyQixzQkFBUSxDQUFDO0FBQ1BhLHFCQUFLLEVBQUxBLEtBRE87QUFFUFkscUJBQUssRUFBRXRCLFlBRkE7QUFHUGlCLHNCQUFNLEVBQUVILGFBSEQ7QUFJUFMseUJBQVMsRUFBRUw7QUFKSixlQUFELENBQVI7QUFNRCxhQXRHaUI7O0FBQUE7QUFBQSxtQkFNWjlCLFdBTlk7O0FBQUE7QUFPbEJJLDhCQUFrQixJQUFJZ0Msb0JBQW9CLENBQUNoQyxrQkFBRCxDQUExQztBQUNBUCxpQkFBSyxDQUFDZ0MsTUFBTixDQUFhLENBQWI7QUFDQWhDLGlCQUFLLENBQUN3QyxJQUFOO0FBQ0l6Qix3QkFWYyxHQVVDLENBVkQ7QUFXZFksdUJBWGMsR0FXQSxFQVhBO0FBWWRDLDZCQVpjLEdBWU0sSUFaTjtBQWNkQyx5QkFkYyxHQWNFLENBZEY7QUFlZEMsd0JBZmMsR0FlQyxDQWZEO0FBZ0JkQyw4QkFoQmMsR0FnQk8sSUFoQlA7QUFrQmRFLDRCQWxCYyxHQWtCSyxDQWxCTDtBQW1CZEMsMkJBbkJjLEdBbUJJLENBbkJKO0FBb0JkQyxpQ0FwQmMsR0FvQlUsQ0FwQlY7O0FBc0JaTSwyQkF0QlksR0FzQk0sU0FBbEJBLGVBQWtCLENBQUNDLE9BQUQsRUFBMkI7QUFBQSxrQkFBakJDLE1BQWlCLHVFQUFSLEdBQVE7QUFBQSxrQkFDMUNDLFlBRDBDLEdBQ1gsR0FEVztBQUFBLGtCQUM1QkMsWUFENEIsR0FDTixDQURNO0FBQUEsa0JBRTFDQyxRQUYwQyxHQUVuQixDQUZtQjtBQUFBLGtCQUVoQ0MsUUFGZ0MsR0FFaEIsRUFGZ0I7QUFJakRiLDZCQUFlLEdBQUdVLFlBQVksR0FBRyxDQUFDQyxZQUFZLEdBQUdELFlBQWhCLElBQWdDRixPQUFqRTtBQUNBUCxtQ0FBcUIsR0FBR2EsSUFBSSxDQUFDQyxHQUFMLENBQ3RCLENBQUNmLGVBQWUsR0FBR0QsZ0JBQW5CLElBQXVDVSxNQURqQixDQUF4QjtBQUlBaEIseUJBQVcsR0FBR21CLFFBQVEsR0FBRyxDQUFDQyxRQUFRLEdBQUdELFFBQVosSUFBd0JKLE9BQWpEO0FBQ0FkLCtCQUFpQixHQUFHb0IsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBQ3RCLFdBQVcsR0FBR1osWUFBZixJQUErQjRCLE1BQXhDLENBQXBCO0FBQ0QsYUFqQ2lCOztBQW1DWnJCLHNCQW5DWSxHQW1DQyxJQUFJNEIsOENBQUosQ0FBV3pDLE1BQVgsRUFBbUI7QUFDcENDLG1CQUFLLEVBQUxBLEtBRG9DO0FBRXBDQyxvQkFBTSxFQUFOQTtBQUZvQyxhQUFuQixDQW5DRDtBQXdDWkcsb0JBeENZLEdBd0NEcUMsd0VBQVksQ0FDM0I7QUFDRUMsaUJBQUcsRUFBRSxFQURQO0FBRUVDLG1CQUFLLEVBQUUsTUFGVDtBQUdFMUMsb0JBQU0sRUFBRSxFQUhWO0FBSUVELG1CQUFLLEVBQUUsRUFKVDtBQUtFNEMsdUJBQVMsRUFBRTtBQUxiLGFBRDJCLEVBUTNCaEMsVUFBVSxDQUFDaUMsYUFBWCxFQVIyQixDQXhDWDtBQWtEWnZDLHFCQWxEWSxHQWtEQXdDLDJFQUFhLENBQzdCO0FBQ0VDLGlCQUFHLEVBQUU7QUFBRTlDLHNCQUFNLEVBQUUsR0FBVjtBQUFlRCxxQkFBSyxFQUFFLEVBQXRCO0FBQTBCMkMscUJBQUssRUFBRSxNQUFqQztBQUF5Q0MseUJBQVMsRUFBRTtBQUFwRCxlQURQO0FBRUVGLGlCQUFHLEVBQUU7QUFGUCxhQUQ2QixFQUs3QjlCLFVBQVUsQ0FBQ2lDLGFBQVgsRUFMNkIsQ0FsRGI7QUF5RFpuQyxpQkF6RFksR0F5REpzQyxtRUFBUyxDQUNyQjtBQUFFTCxtQkFBSyxFQUFFLE1BQVQ7QUFBaUIxQyxvQkFBTSxFQUFFLEdBQXpCO0FBQThCRCxtQkFBSyxFQUFFLEVBQXJDO0FBQXlDNEMsdUJBQVMsRUFBRTtBQUFwRCxhQURxQixFQUVyQmhDLFVBQVUsQ0FBQ2lDLGFBQVgsRUFGcUIsQ0F6REw7QUE2RGxCSSxrQkFBTSxDQUFDQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFDQyxFQUFELEVBQVE7QUFDekMsa0JBQUlBLEVBQUUsQ0FBQ0MsR0FBSCxLQUFXLFdBQWYsRUFBNEIxQyxLQUFLLENBQUNDLElBQU4sQ0FBVyxNQUFYO0FBQzVCLGtCQUFJd0MsRUFBRSxDQUFDQyxHQUFILEtBQVcsWUFBZixFQUE2QjFDLEtBQUssQ0FBQ0MsSUFBTixDQUFXLE9BQVg7O0FBQzdCLGtCQUFJd0MsRUFBRSxDQUFDQyxHQUFILEtBQVcsR0FBZixFQUFvQjtBQUNsQnJCLCtCQUFlLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBZjtBQUNBc0IsMEJBQVUsQ0FBQyxZQUFNO0FBQ2Z0QixpQ0FBZSxDQUFDLENBQUQsRUFBSSxHQUFKLENBQWY7QUFDRCxpQkFGUyxFQUVQLEtBRk8sQ0FBVjtBQUdEO0FBQ0YsYUFURDtBQVVJaEIsaUJBdkVjLEdBdUVOLENBdkVNLEVBd0VsQjs7QUFDQUgsc0JBQVUsQ0FBQ0MsTUFBWDs7QUF6RWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQUpmLElBQUk7QUFBQTtBQUFBO0FBQUEsR0FBViIsImZpbGUiOiIuL2NvbXBvbmVudHMvZ2FtZS9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbnZhcyB9IGZyb20gXCIuL2NhbnZhc1wiO1xuaW1wb3J0IHsgaW5pdERpdmlkZXJzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9kaXZpZGVyXCI7XG5pbXBvcnQgeyBpbml0T3Bwb25lbnRzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9vcHBvbmVudHNcIjtcbmltcG9ydCB7IGluaXRNeUNhciB9IGZyb20gXCIuL2NvbXBvbmVudHMvbXljYXJcIjtcbmltcG9ydCB7IEhvd2wgfSBmcm9tIFwiaG93bGVyXCI7XG5pbXBvcnQgeyBpbnRlcnBvbGF0ZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvdXRpbHNcIjtcblxuY29uc3Qgc291bmQgPSBuZXcgSG93bCh7XG4gIHNyYzogXCIvZ2FtZS5tcDNcIixcbn0pO1xuXG5jb25zdCBzb3VuZE9uTG9hZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIHNvdW5kLm9uY2UoXCJsb2FkXCIsIHJlc29sdmUpO1xufSk7XG5cbmxldCByZXF1ZXN0ZWRBbmltYXRpb247XG5leHBvcnQgaW50ZXJmYWNlIElTdGF0cyB7XG4gIHNjb3JlOiBudW1iZXI7XG4gIHNwZWVkOiBudW1iZXI7XG4gIHZvbHVtZTogbnVtYmVyO1xuICBzb3VuZFJhdGU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBpbml0ID0gYXN5bmMgKFxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgb25DaGFuZ2U6ICh2OiBJU3RhdHMpID0+IHZvaWRcbikgPT4ge1xuICBhd2FpdCBzb3VuZE9uTG9hZDtcbiAgcmVxdWVzdGVkQW5pbWF0aW9uICYmIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RlZEFuaW1hdGlvbik7XG4gIHNvdW5kLnZvbHVtZSgwKTtcbiAgc291bmQucGxheSgpO1xuICB2YXIgY3VycmVudFNwZWVkID0gMDtcbiAgdmFyIHRhcmdldFNwZWVkID0gMTU7XG4gIHZhciBzcGVlZEludGVycG9sYXRvciA9IDAuMDE7XG5cbiAgdmFyIGN1cnJlbnRWb2x1bWUgPSAwO1xuICB2YXIgdGFyZ2V0Vm9sdW1lID0gMTtcbiAgdmFyIHZvbHVtZUludGVycG9sYXRvciA9IDAuMDE7XG5cbiAgdmFyIGN1cnJlbnRTb3VuZFJhdGUgPSAxO1xuICB2YXIgdGFyZ2V0U291bmRSYXRlID0gMTtcbiAgdmFyIHNvdW5kUmF0ZUludGVycG9sYXRvciA9IDE7XG5cbiAgY29uc3Qgc3BlZWRDb250cm9sbGVyID0gKGNvbnRyb2wsIHNsaWNlcyA9IDEwMCkgPT4ge1xuICAgIGNvbnN0IFttaW5Tb3VuZFJhdGUsIG1heFNvdW5kUmF0ZV0gPSBbMC41LCAxXTtcbiAgICBjb25zdCBbbWluU3BlZWQsIG1heFNwZWVkXSA9IFsyLCAxNV07XG5cbiAgICB0YXJnZXRTb3VuZFJhdGUgPSBtaW5Tb3VuZFJhdGUgKyAobWF4U291bmRSYXRlIC0gbWluU291bmRSYXRlKSAqIGNvbnRyb2w7XG4gICAgc291bmRSYXRlSW50ZXJwb2xhdG9yID0gTWF0aC5hYnMoXG4gICAgICAodGFyZ2V0U291bmRSYXRlIC0gY3VycmVudFNvdW5kUmF0ZSkgLyBzbGljZXNcbiAgICApO1xuXG4gICAgdGFyZ2V0U3BlZWQgPSBtaW5TcGVlZCArIChtYXhTcGVlZCAtIG1pblNwZWVkKSAqIGNvbnRyb2w7XG4gICAgc3BlZWRJbnRlcnBvbGF0b3IgPSBNYXRoLmFicygodGFyZ2V0U3BlZWQgLSBjdXJyZW50U3BlZWQpIC8gc2xpY2VzKTtcbiAgfTtcblxuICBjb25zdCBwbGF5Z3JvdW5kID0gbmV3IENhbnZhcyhjYW52YXMsIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gIH0pO1xuXG4gIGNvbnN0IGRpdmlkZXJzID0gaW5pdERpdmlkZXJzKFxuICAgIHtcbiAgICAgIGdhcDogNTAsXG4gICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICBoZWlnaHQ6IDgwLFxuICAgICAgd2lkdGg6IDIwLFxuICAgICAgYmFzZVNwZWVkOiAxLFxuICAgIH0sXG4gICAgcGxheWdyb3VuZC5saW1pdGVkQ29uZmlnKClcbiAgKTtcbiAgY29uc3Qgb3Bwb25lbnRzID0gaW5pdE9wcG9uZW50cyhcbiAgICB7XG4gICAgICBjYXI6IHsgaGVpZ2h0OiAxMDAsIHdpZHRoOiA1MCwgY29sb3I6IFwiI2NjY1wiLCBiYXNlU3BlZWQ6IDIgfSxcbiAgICAgIGdhcDogMjAwLFxuICAgIH0sXG4gICAgcGxheWdyb3VuZC5saW1pdGVkQ29uZmlnKClcbiAgKTtcbiAgY29uc3QgbXlDYXIgPSBpbml0TXlDYXIoXG4gICAgeyBjb2xvcjogXCJjeWFuXCIsIGhlaWdodDogMTAwLCB3aWR0aDogNTAsIGJhc2VTcGVlZDogNCB9LFxuICAgIHBsYXlncm91bmQubGltaXRlZENvbmZpZygpXG4gICk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXYpID0+IHtcbiAgICBpZiAoZXYua2V5ID09PSBcIkFycm93TGVmdFwiKSBteUNhci5tb3ZlKFwibGVmdFwiKTtcbiAgICBpZiAoZXYua2V5ID09PSBcIkFycm93UmlnaHRcIikgbXlDYXIubW92ZShcInJpZ2h0XCIpO1xuICAgIGlmIChldi5rZXkgPT09IFwiclwiKSB7XG4gICAgICBzcGVlZENvbnRyb2xsZXIoMCwgMTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzcGVlZENvbnRyb2xsZXIoMSwgMTAwKTtcbiAgICAgIH0sIDEwMDAwKTtcbiAgICB9XG4gIH0pO1xuICBsZXQgc2NvcmUgPSAwO1xuICAvLyBFbnRyYW5jZS4uLlxuICBwbGF5Z3JvdW5kLnJlbmRlcigpO1xuICBmdW5jdGlvbiB0aWNrKCkge1xuICAgIGRpdmlkZXJzLnRpY2soY3VycmVudFNwZWVkKTtcbiAgICBvcHBvbmVudHMudGljayhjdXJyZW50U3BlZWQpO1xuICAgIGNvbnN0IG9wcG9uZW50TGFuZSA9IG9wcG9uZW50cy5sYXN0T3Bwb25lbnQoKS5sYW5lO1xuICAgIG15Q2FyLm1vdmUob3Bwb25lbnRMYW5lID09PSBcImxlZnRcIiA/IFwicmlnaHRcIiA6IFwibGVmdFwiKTtcbiAgICBteUNhci50aWNrKGN1cnJlbnRTcGVlZCAvIDIpO1xuICAgIHBsYXlncm91bmQucmVuZGVyKCk7XG4gICAgcmVxdWVzdGVkQW5pbWF0aW9uID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgIHNjb3JlKys7XG4gICAgY3VycmVudFNwZWVkID0gaW50ZXJwb2xhdGUoY3VycmVudFNwZWVkLCB0YXJnZXRTcGVlZCwgc3BlZWRJbnRlcnBvbGF0b3IpO1xuICAgIGN1cnJlbnRWb2x1bWUgPSBpbnRlcnBvbGF0ZShcbiAgICAgIGN1cnJlbnRWb2x1bWUsXG4gICAgICB0YXJnZXRWb2x1bWUsXG4gICAgICB2b2x1bWVJbnRlcnBvbGF0b3JcbiAgICApO1xuICAgIHNvdW5kLnZvbHVtZShjdXJyZW50Vm9sdW1lKTtcbiAgICBjdXJyZW50U291bmRSYXRlID0gaW50ZXJwb2xhdGUoXG4gICAgICBjdXJyZW50U291bmRSYXRlLFxuICAgICAgdGFyZ2V0U291bmRSYXRlLFxuICAgICAgc291bmRSYXRlSW50ZXJwb2xhdG9yXG4gICAgKTtcbiAgICBzb3VuZC5yYXRlKGN1cnJlbnRTb3VuZFJhdGUpO1xuICAgIG9uQ2hhbmdlKHtcbiAgICAgIHNjb3JlLFxuICAgICAgc3BlZWQ6IGN1cnJlbnRTcGVlZCxcbiAgICAgIHZvbHVtZTogY3VycmVudFZvbHVtZSxcbiAgICAgIHNvdW5kUmF0ZTogY3VycmVudFNvdW5kUmF0ZSxcbiAgICB9KTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/index.ts\n");

/***/ })

})