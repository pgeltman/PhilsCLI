"use strict";
exports.__esModule = true;
var chalk_1 = require("chalk");
var PhilsCLI = /** @class */ (function () {
    function PhilsCLI() {
        this.commands = {};
    }
    PhilsCLI.prototype.start = function (toolName) {
        var _this = this;
        console.log('\n\n\n');
        this.commands['help'] = function () {
            var keys = Object.keys(_this.commands);
            _this.respond('available commands are: ' + keys);
        };
        this.title(toolName);
        process.openStdin().addListener('data', function (d) {
            var input = d
                .toString()
                .trim()
                .split(' ');
            var command = input[0];
            var params = input.slice(1);
            try {
                var com = _this.commands[command](params);
            }
            catch (err) {
                _this.respond("I have no clue what '" + command + "' means...");
                _this.respond("type 'help' for a list of commands");
            }
        });
    };
    PhilsCLI.prototype.addCommand = function (title, command) {
        this.commands[title] = command;
    };
    //FORMATTING + RESPONSES
    PhilsCLI.prototype.respond = function (res) {
        console.log(chalk_1["default"].cyan('> ' + res));
    };
    PhilsCLI.prototype.title = function (res) {
        this.line(res.length);
        this.yell('|| ' + res + ' ||');
        this.line(res.length);
        this.respond("type 'help' for a list of commands");
    };
    PhilsCLI.prototype.line = function (len) {
        this.yell(new Array(len + 7).join('='));
    };
    PhilsCLI.prototype.yell = function (res) {
        console.log(chalk_1["default"].bold.white(res.toUpperCase()));
    };
    return PhilsCLI;
}());
var cli = new PhilsCLI();
exports["default"] = cli;
