"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _express = /*#__PURE__*/ _interop_require_default(require("express"));
var _morgan = /*#__PURE__*/ _interop_require_default(require("morgan"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var app = (0, _express.default)();
app.use((0, _morgan.default)("dev"));
app.get("/", function(req, res) {
    res.json({
        hello: "world"
    });
});
var port = Number(process.env.PORT || 8080);
app.listen(port, "0.0.0.0", function() {
    console.log("Server listening at http://localhost:".concat(port));
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpXHJcbmFwcC51c2UobW9yZ2FuKCdkZXYnKSlcclxuXHJcbmFwcC5nZXQoJy8nLCAocmVxLHJlcykgPT4ge1xyXG4gICAgcmVzLmpzb24oe2hlbGxvOiAnd29ybGQnfSlcclxufSlcclxuXHJcbmNvbnN0IHBvcnQgPSBOdW1iZXIocHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwKVxyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCAnMC4wLjAuMCcsICgpPT4ge1xyXG4gICAgY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgYXQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YClcclxufSkiXSwibmFtZXMiOlsiYXBwIiwiZXhwcmVzcyIsInVzZSIsIm1vcmdhbiIsImdldCIsInJlcSIsInJlcyIsImpzb24iLCJoZWxsbyIsInBvcnQiLCJOdW1iZXIiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OERBQW9COzZEQUNEOzs7Ozs7QUFFbkIsSUFBTUEsTUFBTUMsSUFBQUEsZ0JBQU87QUFDbkJELElBQUlFLEdBQUcsQ0FBQ0MsSUFBQUEsZUFBTSxFQUFDO0FBRWZILElBQUlJLEdBQUcsQ0FBQyxLQUFLLFNBQUNDLEtBQUlDO0lBQ2RBLElBQUlDLElBQUksQ0FBQztRQUFDQyxPQUFPO0lBQU87QUFDNUI7QUFFQSxJQUFNQyxPQUFPQyxPQUFPQyxRQUFRQyxHQUFHLENBQUNDLElBQUksSUFBSTtBQUV4Q2IsSUFBSWMsTUFBTSxDQUFDTCxNQUFNLFdBQVc7SUFDeEJNLFFBQVFDLEdBQUcsQ0FBQyxBQUFDLHdDQUE0QyxPQUFMUDtBQUN4RCJ9