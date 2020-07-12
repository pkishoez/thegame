webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/game/components/mycar.ts":
/*!*********************************************!*\
  !*** ./components/game/components/mycar.ts ***!
  \*********************************************/
/*! exports provided: initMyCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMyCar\", function() { return initMyCar; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./components/game/components/utils.ts\");\n\nfunction initMyCar(carConfig, config) {\n  var myCar = config.addRect({\n    height: carConfig.height,\n    width: carConfig.width,\n    left: 0,\n    top: 0,\n    style: {\n      fill: carConfig.color\n    }\n  });\n  myCar.setPositon(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getLanePosition\"])(config.canvasWidth, \"left\") - carConfig.width / 2, config.canvasHeight + 20);\n  var position = \"left\";\n  var currentPosition = myCar.left();\n  var carLanePosition = {\n    left: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getLanePosition\"])(config.canvasWidth, \"left\") - carConfig.width / 2,\n    right: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getLanePosition\"])(config.canvasWidth, \"right\") - carConfig.width / 2\n  };\n  return {\n    move: function move(direction) {\n      position = direction;\n      console.log(\"POSITION\", position);\n    },\n    currentPosition: function currentPosition() {\n      return position;\n    },\n    tick: function tick() {\n      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n\n      if (myCar.top() !== config.canvasHeight - carConfig.height - 20) {\n        // Move car!\n        myCar.moveY(-2);\n      }\n\n      if (currentPosition !== carLanePosition[position]) {\n        // TICK\n        var diff = carLanePosition[position] - currentPosition;\n        currentPosition += speed * carConfig.baseSpeed * (diff / Math.abs(diff));\n        var newDiff = carLanePosition[position] - currentPosition;\n\n        if (diff / Math.abs(diff) !== newDiff / Math.abs(newDiff)) {\n          // Car overshoot.\n          currentPosition = carLanePosition[position];\n        }\n      }\n\n      myCar.setLeft(currentPosition);\n    }\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvY29tcG9uZW50cy9teWNhci50cz9kM2M0Il0sIm5hbWVzIjpbImluaXRNeUNhciIsImNhckNvbmZpZyIsImNvbmZpZyIsIm15Q2FyIiwiYWRkUmVjdCIsImhlaWdodCIsIndpZHRoIiwibGVmdCIsInRvcCIsInN0eWxlIiwiZmlsbCIsImNvbG9yIiwic2V0UG9zaXRvbiIsImdldExhbmVQb3NpdGlvbiIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwicG9zaXRpb24iLCJjdXJyZW50UG9zaXRpb24iLCJjYXJMYW5lUG9zaXRpb24iLCJyaWdodCIsIm1vdmUiLCJkaXJlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidGljayIsInNwZWVkIiwibW92ZVkiLCJkaWZmIiwiYmFzZVNwZWVkIiwiTWF0aCIsImFicyIsIm5ld0RpZmYiLCJzZXRMZWZ0Il0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQVNPLFNBQVNBLFNBQVQsQ0FBbUJDLFNBQW5CLEVBQTBDQyxNQUExQyxFQUFrRTtBQUN2RSxNQUFNQyxLQUFLLEdBQUdELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlO0FBQzNCQyxVQUFNLEVBQUVKLFNBQVMsQ0FBQ0ksTUFEUztBQUUzQkMsU0FBSyxFQUFFTCxTQUFTLENBQUNLLEtBRlU7QUFHM0JDLFFBQUksRUFBRSxDQUhxQjtBQUkzQkMsT0FBRyxFQUFFLENBSnNCO0FBSzNCQyxTQUFLLEVBQUU7QUFDTEMsVUFBSSxFQUFFVCxTQUFTLENBQUNVO0FBRFg7QUFMb0IsR0FBZixDQUFkO0FBU0FSLE9BQUssQ0FBQ1MsVUFBTixDQUNFQyw4REFBZSxDQUFDWCxNQUFNLENBQUNZLFdBQVIsRUFBcUIsTUFBckIsQ0FBZixHQUE4Q2IsU0FBUyxDQUFDSyxLQUFWLEdBQWtCLENBRGxFLEVBRUVKLE1BQU0sQ0FBQ2EsWUFBUCxHQUFzQixFQUZ4QjtBQUtBLE1BQUlDLFFBQTBCLEdBQUcsTUFBakM7QUFDQSxNQUFJQyxlQUFlLEdBQUdkLEtBQUssQ0FBQ0ksSUFBTixFQUF0QjtBQUVBLE1BQU1XLGVBQWUsR0FBRztBQUN0QlgsUUFBSSxFQUFFTSw4REFBZSxDQUFDWCxNQUFNLENBQUNZLFdBQVIsRUFBcUIsTUFBckIsQ0FBZixHQUE4Q2IsU0FBUyxDQUFDSyxLQUFWLEdBQWtCLENBRGhEO0FBRXRCYSxTQUFLLEVBQUVOLDhEQUFlLENBQUNYLE1BQU0sQ0FBQ1ksV0FBUixFQUFxQixPQUFyQixDQUFmLEdBQStDYixTQUFTLENBQUNLLEtBQVYsR0FBa0I7QUFGbEQsR0FBeEI7QUFLQSxTQUFPO0FBQ0xjLFFBREssZ0JBQ0FDLFNBREEsRUFDNkI7QUFDaENMLGNBQVEsR0FBR0ssU0FBWDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCUCxRQUF4QjtBQUNELEtBSkk7QUFLTEMsbUJBTEssNkJBS2E7QUFDaEIsYUFBT0QsUUFBUDtBQUNELEtBUEk7QUFRTFEsUUFSSyxrQkFRVztBQUFBLFVBQVhDLEtBQVcsdUVBQUgsQ0FBRzs7QUFDZCxVQUFJdEIsS0FBSyxDQUFDSyxHQUFOLE9BQWdCTixNQUFNLENBQUNhLFlBQVAsR0FBc0JkLFNBQVMsQ0FBQ0ksTUFBaEMsR0FBeUMsRUFBN0QsRUFBaUU7QUFDL0Q7QUFDQUYsYUFBSyxDQUFDdUIsS0FBTixDQUFZLENBQUMsQ0FBYjtBQUNEOztBQUNELFVBQUlULGVBQWUsS0FBS0MsZUFBZSxDQUFDRixRQUFELENBQXZDLEVBQW1EO0FBQ2pEO0FBQ0EsWUFBTVcsSUFBSSxHQUFHVCxlQUFlLENBQUNGLFFBQUQsQ0FBZixHQUE0QkMsZUFBekM7QUFDQUEsdUJBQWUsSUFDYlEsS0FBSyxHQUFHeEIsU0FBUyxDQUFDMkIsU0FBbEIsSUFBK0JELElBQUksR0FBR0UsSUFBSSxDQUFDQyxHQUFMLENBQVNILElBQVQsQ0FBdEMsQ0FERjtBQUVBLFlBQU1JLE9BQU8sR0FBR2IsZUFBZSxDQUFDRixRQUFELENBQWYsR0FBNEJDLGVBQTVDOztBQUNBLFlBQUlVLElBQUksR0FBR0UsSUFBSSxDQUFDQyxHQUFMLENBQVNILElBQVQsQ0FBUCxLQUEwQkksT0FBTyxHQUFHRixJQUFJLENBQUNDLEdBQUwsQ0FBU0MsT0FBVCxDQUF4QyxFQUEyRDtBQUN6RDtBQUNBZCx5QkFBZSxHQUFHQyxlQUFlLENBQUNGLFFBQUQsQ0FBakM7QUFDRDtBQUNGOztBQUNEYixXQUFLLENBQUM2QixPQUFOLENBQWNmLGVBQWQ7QUFDRDtBQXpCSSxHQUFQO0FBMkJEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9nYW1lL2NvbXBvbmVudHMvbXljYXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTGltaXRlZENvbmZpZyB9IGZyb20gXCIuLi9jYW52YXNcIjtcbmltcG9ydCB7IGdldExhbmVQb3NpdGlvbiB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBtYXhCeSB9IGZyb20gXCJsb2Rhc2hcIjtcblxuaW50ZXJmYWNlIElDYXJDb25maWcge1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgYmFzZVNwZWVkOiBudW1iZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gaW5pdE15Q2FyKGNhckNvbmZpZzogSUNhckNvbmZpZywgY29uZmlnOiBJTGltaXRlZENvbmZpZykge1xuICBjb25zdCBteUNhciA9IGNvbmZpZy5hZGRSZWN0KHtcbiAgICBoZWlnaHQ6IGNhckNvbmZpZy5oZWlnaHQsXG4gICAgd2lkdGg6IGNhckNvbmZpZy53aWR0aCxcbiAgICBsZWZ0OiAwLFxuICAgIHRvcDogMCxcbiAgICBzdHlsZToge1xuICAgICAgZmlsbDogY2FyQ29uZmlnLmNvbG9yLFxuICAgIH0sXG4gIH0pO1xuICBteUNhci5zZXRQb3NpdG9uKFxuICAgIGdldExhbmVQb3NpdGlvbihjb25maWcuY2FudmFzV2lkdGgsIFwibGVmdFwiKSAtIGNhckNvbmZpZy53aWR0aCAvIDIsXG4gICAgY29uZmlnLmNhbnZhc0hlaWdodCArIDIwXG4gICk7XG5cbiAgbGV0IHBvc2l0aW9uOiBcImxlZnRcIiB8IFwicmlnaHRcIiA9IFwibGVmdFwiO1xuICBsZXQgY3VycmVudFBvc2l0aW9uID0gbXlDYXIubGVmdCgpO1xuXG4gIGNvbnN0IGNhckxhbmVQb3NpdGlvbiA9IHtcbiAgICBsZWZ0OiBnZXRMYW5lUG9zaXRpb24oY29uZmlnLmNhbnZhc1dpZHRoLCBcImxlZnRcIikgLSBjYXJDb25maWcud2lkdGggLyAyLFxuICAgIHJpZ2h0OiBnZXRMYW5lUG9zaXRpb24oY29uZmlnLmNhbnZhc1dpZHRoLCBcInJpZ2h0XCIpIC0gY2FyQ29uZmlnLndpZHRoIC8gMixcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1vdmUoZGlyZWN0aW9uOiBcImxlZnRcIiB8IFwicmlnaHRcIikge1xuICAgICAgcG9zaXRpb24gPSBkaXJlY3Rpb247XG4gICAgICBjb25zb2xlLmxvZyhcIlBPU0lUSU9OXCIsIHBvc2l0aW9uKTtcbiAgICB9LFxuICAgIGN1cnJlbnRQb3NpdGlvbigpIHtcbiAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9LFxuICAgIHRpY2soc3BlZWQgPSAxKSB7XG4gICAgICBpZiAobXlDYXIudG9wKCkgIT09IGNvbmZpZy5jYW52YXNIZWlnaHQgLSBjYXJDb25maWcuaGVpZ2h0IC0gMjApIHtcbiAgICAgICAgLy8gTW92ZSBjYXIhXG4gICAgICAgIG15Q2FyLm1vdmVZKC0yKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gIT09IGNhckxhbmVQb3NpdGlvbltwb3NpdGlvbl0pIHtcbiAgICAgICAgLy8gVElDS1xuICAgICAgICBjb25zdCBkaWZmID0gY2FyTGFuZVBvc2l0aW9uW3Bvc2l0aW9uXSAtIGN1cnJlbnRQb3NpdGlvbjtcbiAgICAgICAgY3VycmVudFBvc2l0aW9uICs9XG4gICAgICAgICAgc3BlZWQgKiBjYXJDb25maWcuYmFzZVNwZWVkICogKGRpZmYgLyBNYXRoLmFicyhkaWZmKSk7XG4gICAgICAgIGNvbnN0IG5ld0RpZmYgPSBjYXJMYW5lUG9zaXRpb25bcG9zaXRpb25dIC0gY3VycmVudFBvc2l0aW9uO1xuICAgICAgICBpZiAoZGlmZiAvIE1hdGguYWJzKGRpZmYpICE9PSBuZXdEaWZmIC8gTWF0aC5hYnMobmV3RGlmZikpIHtcbiAgICAgICAgICAvLyBDYXIgb3ZlcnNob290LlxuICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IGNhckxhbmVQb3NpdGlvbltwb3NpdGlvbl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG15Q2FyLnNldExlZnQoY3VycmVudFBvc2l0aW9uKTtcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/components/mycar.ts\n");

/***/ })

})