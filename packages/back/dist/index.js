"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = require("mongoose");
(0, mongoose_1.connect)('mongodb://db:27017/myapp');
var userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
});
var UserModel = (0, mongoose_1.model)("User", userSchema);
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.send('Well done!');
});
app.get('/users', function (req, res) {
    UserModel.find({}, function (err, document) {
        if (!err)
            res.send(JSON.stringify(document));
        res.send('Error');
    });
});
app.listen(8080, function () {
    console.log('The application is listening on port 8080!');
});
//# sourceMappingURL=index.js.map