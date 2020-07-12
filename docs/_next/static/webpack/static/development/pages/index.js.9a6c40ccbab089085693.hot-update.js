webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/game/index.ts":
/*!**********************************!*\
  !*** ./components/game/index.ts ***!
  \**********************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ \"./components/game/canvas/index.ts\");\n/* harmony import */ var _components_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/divider */ \"./components/game/components/divider.ts\");\n/* harmony import */ var _components_opponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/opponents */ \"./components/game/components/opponents.ts\");\n/* harmony import */ var _components_mycar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mycar */ \"./components/game/components/mycar.ts\");\n/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! howler */ \"./node_modules/howler/dist/howler.js\");\n/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/utils */ \"./components/game/components/utils.ts\");\n\n\n\n\n\n\n\n\nvar sound = new howler__WEBPACK_IMPORTED_MODULE_6__[\"Howl\"]({\n  src: \"/game.mp3\"\n});\nvar soundOnLoad = new Promise(function (resolve) {\n  sound.once(\"load\", resolve);\n});\nvar requestedAnimation;\nvar init = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(canvas, width, height, onChange) {\n    var targetVolume, targetSpeed, speedInterpolator, currentSpeed, currentVolume, volumeInterpolator, currentSoundRate, targetSoundRate, soundRateInterpolator, playground, dividers, opponents, myCar, score, tick;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            tick = function _tick() {\n              dividers.tick(currentSpeed);\n              opponents.tick(currentSpeed);\n              var opponentLane = opponents.lastOpponent().lane;\n              myCar.move(opponentLane === \"left\" ? \"right\" : \"left\");\n              myCar.tick(currentSpeed);\n              playground.render();\n              requestedAnimation = requestAnimationFrame(tick);\n              score++;\n              currentSpeed = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentSpeed, targetSpeed, speedInterpolator);\n              currentVolume = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentVolume, targetVolume, volumeInterpolator);\n              sound.volume(currentVolume);\n              currentSoundRate = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentSoundRate, targetSoundRate, soundRateInterpolator);\n              sound.rate(currentSoundRate);\n              onChange({\n                score: score,\n                speed: currentSpeed,\n                volume: currentVolume,\n                soundRate: currentSoundRate\n              });\n            };\n\n            _context.next = 3;\n            return soundOnLoad;\n\n          case 3:\n            requestedAnimation && cancelAnimationFrame(requestedAnimation);\n            sound.volume(0);\n            sound.play();\n            targetVolume = 1;\n            targetSpeed = 15;\n            speedInterpolator = 0.01;\n            currentSpeed = 0;\n            currentVolume = 0;\n            volumeInterpolator = 0.001;\n            currentSoundRate = 1;\n            targetSoundRate = 1;\n            soundRateInterpolator = 0.01;\n            playground = new _canvas__WEBPACK_IMPORTED_MODULE_2__[\"Canvas\"](canvas, {\n              width: width,\n              height: height\n            });\n            dividers = Object(_components_divider__WEBPACK_IMPORTED_MODULE_3__[\"initDividers\"])({\n              gap: 50,\n              color: \"#fff\",\n              height: 80,\n              width: 20,\n              baseSpeed: 1\n            }, playground.limitedConfig());\n            opponents = Object(_components_opponents__WEBPACK_IMPORTED_MODULE_4__[\"initOpponents\"])({\n              car: {\n                height: 100,\n                width: 50,\n                color: \"#ccc\",\n                baseSpeed: 2\n              },\n              gap: 200\n            }, playground.limitedConfig());\n            myCar = Object(_components_mycar__WEBPACK_IMPORTED_MODULE_5__[\"initMyCar\"])({\n              color: \"cyan\",\n              height: 100,\n              width: 50,\n              baseSpeed: 4\n            }, playground.limitedConfig());\n            window.addEventListener(\"keydown\", function (ev) {\n              if (ev.key === \"ArrowLeft\") myCar.move(\"left\");\n              if (ev.key === \"ArrowRight\") myCar.move(\"right\");\n\n              if (ev.key === \"r\") {\n                targetSpeed = 2;\n                speedInterpolator = 0.1;\n                targetSoundRate = 0.4;\n                targetVolume = 1;\n                setTimeout(function () {});\n              }\n            });\n            score = 0;\n            playground.render();\n            tick();\n\n          case 23:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function init(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvaW5kZXgudHM/MGE1NSJdLCJuYW1lcyI6WyJzb3VuZCIsIkhvd2wiLCJzcmMiLCJzb3VuZE9uTG9hZCIsIlByb21pc2UiLCJyZXNvbHZlIiwib25jZSIsInJlcXVlc3RlZEFuaW1hdGlvbiIsImluaXQiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2hhbmdlIiwidGljayIsImRpdmlkZXJzIiwiY3VycmVudFNwZWVkIiwib3Bwb25lbnRzIiwib3Bwb25lbnRMYW5lIiwibGFzdE9wcG9uZW50IiwibGFuZSIsIm15Q2FyIiwibW92ZSIsInBsYXlncm91bmQiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzY29yZSIsImludGVycG9sYXRlIiwidGFyZ2V0U3BlZWQiLCJzcGVlZEludGVycG9sYXRvciIsImN1cnJlbnRWb2x1bWUiLCJ0YXJnZXRWb2x1bWUiLCJ2b2x1bWVJbnRlcnBvbGF0b3IiLCJ2b2x1bWUiLCJjdXJyZW50U291bmRSYXRlIiwidGFyZ2V0U291bmRSYXRlIiwic291bmRSYXRlSW50ZXJwb2xhdG9yIiwicmF0ZSIsInNwZWVkIiwic291bmRSYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwbGF5IiwiQ2FudmFzIiwiaW5pdERpdmlkZXJzIiwiZ2FwIiwiY29sb3IiLCJiYXNlU3BlZWQiLCJsaW1pdGVkQ29uZmlnIiwiaW5pdE9wcG9uZW50cyIsImNhciIsImluaXRNeUNhciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsImtleSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLElBQUlDLDJDQUFKLENBQVM7QUFDckJDLEtBQUcsRUFBRTtBQURnQixDQUFULENBQWQ7QUFJQSxJQUFNQyxXQUFXLEdBQUcsSUFBSUMsT0FBSixDQUFZ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d0IsYUFBWCxFQUw2QixDQW5DYjtBQTBDWjFCLGlCQTFDWSxHQTBDSjZCLG1FQUFTLENBQ3JCO0FBQUVMLG1CQUFLLEVBQUUsTUFBVDtBQUFpQmpDLG9CQUFNLEVBQUUsR0FBekI7QUFBOEJELG1CQUFLLEVBQUUsRUFBckM7QUFBeUNtQyx1QkFBUyxFQUFFO0FBQXBELGFBRHFCLEVBRXJCdkIsVUFBVSxDQUFDd0IsYUFBWCxFQUZxQixDQTFDTDtBQThDbEJJLGtCQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQUNDLEVBQUQsRUFBUTtBQUN6QyxrQkFBSUEsRUFBRSxDQUFDQyxHQUFILEtBQVcsV0FBZixFQUE0QmpDLEtBQUssQ0FBQ0MsSUFBTixDQUFXLE1BQVg7QUFDNUIsa0JBQUkrQixFQUFFLENBQUNDLEdBQUgsS0FBVyxZQUFmLEVBQTZCakMsS0FBSyxDQUFDQyxJQUFOLENBQVcsT0FBWDs7QUFDN0Isa0JBQUkrQixFQUFFLENBQUNDLEdBQUgsS0FBVyxHQUFmLEVBQW9CO0FBQ2xCMUIsMkJBQVcsR0FBRyxDQUFkO0FBQ0FDLGlDQUFpQixHQUFHLEdBQXBCO0FBQ0FNLCtCQUFlLEdBQUcsR0FBbEI7QUFDQUosNEJBQVksR0FBRyxDQUFmO0FBQ0F3QiwwQkFBVSxDQUFDLFlBQU0sQ0FBRSxDQUFULENBQVY7QUFDRDtBQUNGLGFBVkQ7QUFXSTdCLGlCQXpEYyxHQXlETixDQXpETTtBQXVGbEJILHNCQUFVLENBQUNDLE1BQVg7QUFDQVYsZ0JBQUk7O0FBeEZjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQUpMLElBQUk7QUFBQTtBQUFBO0FBQUEsR0FBViIsImZpbGUiOiIuL2NvbXBvbmVudHMvZ2FtZS9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbnZhcyB9IGZyb20gXCIuL2NhbnZhc1wiO1xuaW1wb3J0IHsgaW5pdERpdmlkZXJzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9kaXZpZGVyXCI7XG5pbXBvcnQgeyBpbml0T3Bwb25lbnRzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9vcHBvbmVudHNcIjtcbmltcG9ydCB7IGluaXRNeUNhciB9IGZyb20gXCIuL2NvbXBvbmVudHMvbXljYXJcIjtcbmltcG9ydCB7IEhvd2wgfSBmcm9tIFwiaG93bGVyXCI7XG5pbXBvcnQgeyBpbnRlcnBvbGF0ZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvdXRpbHNcIjtcblxuY29uc3Qgc291bmQgPSBuZXcgSG93bCh7XG4gIHNyYzogXCIvZ2FtZS5tcDNcIixcbn0pO1xuXG5jb25zdCBzb3VuZE9uTG9hZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIHNvdW5kLm9uY2UoXCJsb2FkXCIsIHJlc29sdmUpO1xufSk7XG5cbmxldCByZXF1ZXN0ZWRBbmltYXRpb247XG5leHBvcnQgaW50ZXJmYWNlIElTdGF0cyB7XG4gIHNjb3JlOiBudW1iZXI7XG4gIHNwZWVkOiBudW1iZXI7XG4gIHZvbHVtZTogbnVtYmVyO1xuICBzb3VuZFJhdGU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBpbml0ID0gYXN5bmMgKFxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgb25DaGFuZ2U6ICh2OiBJU3RhdHMpID0+IHZvaWRcbikgPT4ge1xuICBhd2FpdCBzb3VuZE9uTG9hZDtcbiAgcmVxdWVzdGVkQW5pbWF0aW9uICYmIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RlZEFuaW1hdGlvbik7XG4gIHNvdW5kLnZvbHVtZSgwKTtcbiAgc291bmQucGxheSgpO1xuICBsZXQgdGFyZ2V0Vm9sdW1lID0gMTtcbiAgbGV0IHRhcmdldFNwZWVkID0gMTU7XG4gIGxldCBzcGVlZEludGVycG9sYXRvciA9IDAuMDE7XG4gIGxldCBjdXJyZW50U3BlZWQgPSAwO1xuICBsZXQgY3VycmVudFZvbHVtZSA9IDA7XG4gIGxldCB2b2x1bWVJbnRlcnBvbGF0b3IgPSAwLjAwMTtcbiAgbGV0IGN1cnJlbnRTb3VuZFJhdGUgPSAxO1xuICBsZXQgdGFyZ2V0U291bmRSYXRlID0gMTtcbiAgbGV0IHNvdW5kUmF0ZUludGVycG9sYXRvciA9IDAuMDE7XG5cbiAgY29uc3QgcGxheWdyb3VuZCA9IG5ldyBDYW52YXMoY2FudmFzLCB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICB9KTtcblxuICBjb25zdCBkaXZpZGVycyA9IGluaXREaXZpZGVycyhcbiAgICB7XG4gICAgICBnYXA6IDUwLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgaGVpZ2h0OiA4MCxcbiAgICAgIHdpZHRoOiAyMCxcbiAgICAgIGJhc2VTcGVlZDogMSxcbiAgICB9LFxuICAgIHBsYXlncm91bmQubGltaXRlZENvbmZpZygpXG4gICk7XG4gIGNvbnN0IG9wcG9uZW50cyA9IGluaXRPcHBvbmVudHMoXG4gICAge1xuICAgICAgY2FyOiB7IGhlaWdodDogMTAwLCB3aWR0aDogNTAsIGNvbG9yOiBcIiNjY2NcIiwgYmFzZVNwZWVkOiAyIH0sXG4gICAgICBnYXA6IDIwMCxcbiAgICB9LFxuICAgIHBsYXlncm91bmQubGltaXRlZENvbmZpZygpXG4gICk7XG4gIGNvbnN0IG15Q2FyID0gaW5pdE15Q2FyKFxuICAgIHsgY29sb3I6IFwiY3lhblwiLCBoZWlnaHQ6IDEwMCwgd2lkdGg6IDUwLCBiYXNlU3BlZWQ6IDQgfSxcbiAgICBwbGF5Z3JvdW5kLmxpbWl0ZWRDb25maWcoKVxuICApO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2KSA9PiB7XG4gICAgaWYgKGV2LmtleSA9PT0gXCJBcnJvd0xlZnRcIikgbXlDYXIubW92ZShcImxlZnRcIik7XG4gICAgaWYgKGV2LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIG15Q2FyLm1vdmUoXCJyaWdodFwiKTtcbiAgICBpZiAoZXYua2V5ID09PSBcInJcIikge1xuICAgICAgdGFyZ2V0U3BlZWQgPSAyO1xuICAgICAgc3BlZWRJbnRlcnBvbGF0b3IgPSAwLjE7XG4gICAgICB0YXJnZXRTb3VuZFJhdGUgPSAwLjQ7XG4gICAgICB0YXJnZXRWb2x1bWUgPSAxO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7fSk7XG4gICAgfVxuICB9KTtcbiAgbGV0IHNjb3JlID0gMDtcbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICBkaXZpZGVycy50aWNrKGN1cnJlbnRTcGVlZCk7XG4gICAgb3Bwb25lbnRzLnRpY2soY3VycmVudFNwZWVkKTtcbiAgICBjb25zdCBvcHBvbmVudExhbmUgPSBvcHBvbmVudHMubGFzdE9wcG9uZW50KCkubGFuZTtcbiAgICBteUNhci5tb3ZlKG9wcG9uZW50TGFuZSA9PT0gXCJsZWZ0XCIgPyBcInJpZ2h0XCIgOiBcImxlZnRcIik7XG4gICAgbXlDYXIudGljayhjdXJyZW50U3BlZWQpO1xuICAgIHBsYXlncm91bmQucmVuZGVyKCk7XG4gICAgcmVxdWVzdGVkQW5pbWF0aW9uID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgIHNjb3JlKys7XG4gICAgY3VycmVudFNwZWVkID0gaW50ZXJwb2xhdGUoY3VycmVudFNwZWVkLCB0YXJnZXRTcGVlZCwgc3BlZWRJbnRlcnBvbGF0b3IpO1xuICAgIGN1cnJlbnRWb2x1bWUgPSBpbnRlcnBvbGF0ZShcbiAgICAgIGN1cnJlbnRWb2x1bWUsXG4gICAgICB0YXJnZXRWb2x1bWUsXG4gICAgICB2b2x1bWVJbnRlcnBvbGF0b3JcbiAgICApO1xuICAgIHNvdW5kLnZvbHVtZShjdXJyZW50Vm9sdW1lKTtcbiAgICBjdXJyZW50U291bmRSYXRlID0gaW50ZXJwb2xhdGUoXG4gICAgICBjdXJyZW50U291bmRSYXRlLFxuICAgICAgdGFyZ2V0U291bmRSYXRlLFxuICAgICAgc291bmRSYXRlSW50ZXJwb2xhdG9yXG4gICAgKTtcbiAgICBzb3VuZC5yYXRlKGN1cnJlbnRTb3VuZFJhdGUpO1xuICAgIG9uQ2hhbmdlKHtcbiAgICAgIHNjb3JlLFxuICAgICAgc3BlZWQ6IGN1cnJlbnRTcGVlZCxcbiAgICAgIHZvbHVtZTogY3VycmVudFZvbHVtZSxcbiAgICAgIHNvdW5kUmF0ZTogY3VycmVudFNvdW5kUmF0ZSxcbiAgICB9KTtcbiAgfVxuICBwbGF5Z3JvdW5kLnJlbmRlcigpO1xuICB0aWNrKCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/index.ts\n");

/***/ })

})