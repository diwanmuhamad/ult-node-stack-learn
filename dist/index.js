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
        hello: "everyone22"
    });
});
var port = Number(process.env.PORT || 8080);
app.listen(port, "0.0.0.0", function() {
    console.log("Server listening at http://localhost:".concat(port));
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpXHJcbmFwcC51c2UobW9yZ2FuKCdkZXYnKSlcclxuXHJcbmFwcC5nZXQoJy8nLCAocmVxLHJlcykgPT4ge1xyXG4gICAgcmVzLmpzb24oe2hlbGxvOiAnZXZlcnlvbmUyMid9KVxyXG59KVxyXG5cclxuY29uc3QgcG9ydCA9IE51bWJlcihwcm9jZXNzLmVudi5QT1JUIHx8IDgwODApXHJcblxyXG5hcHAubGlzdGVuKHBvcnQsICcwLjAuMC4wJywgKCk9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgU2VydmVyIGxpc3RlbmluZyBhdCBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gKVxyXG59KSJdLCJuYW1lcyI6WyJhcHAiLCJleHByZXNzIiwidXNlIiwibW9yZ2FuIiwiZ2V0IiwicmVxIiwicmVzIiwianNvbiIsImhlbGxvIiwicG9ydCIsIk51bWJlciIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs4REFBb0I7NkRBQ0Q7Ozs7OztBQUVuQixJQUFNQSxNQUFNQyxJQUFBQSxnQkFBTztBQUNuQkQsSUFBSUUsR0FBRyxDQUFDQyxJQUFBQSxlQUFNLEVBQUM7QUFFZkgsSUFBSUksR0FBRyxDQUFDLEtBQUssU0FBQ0MsS0FBSUM7SUFDZEEsSUFBSUMsSUFBSSxDQUFDO1FBQUNDLE9BQU87SUFBWTtBQUNqQztBQUVBLElBQU1DLE9BQU9DLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQ0MsSUFBSSxJQUFJO0FBRXhDYixJQUFJYyxNQUFNLENBQUNMLE1BQU0sV0FBVztJQUN4Qk0sUUFBUUMsR0FBRyxDQUFDLEFBQUMsd0NBQTRDLE9BQUxQO0FBQ3hEIn0=