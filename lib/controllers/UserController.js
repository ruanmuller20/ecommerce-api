"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../Services/user.service");
class UserController {
    static getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield new user_service_1.UserService().getAll());
        });
    }
    ;
    static getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.params.id;
            res.send(yield new user_service_1.UserService().getById(userId));
        });
    }
    ;
    static save(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new user_service_1.UserService().save(req.body);
            res.status(201).send({
                message: `Usuário criado com sucesso!`
            });
        });
    }
    ;
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.params.id;
            let user = req.body;
            yield new user_service_1.UserService().update(userId, user);
            res.send({
                message: 'Usuário alterado com sucesso!'
            });
        });
    }
    ;
    static delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.params.id;
            yield new user_service_1.UserService().delete(userId);
            res.status(204).end();
        });
    }
    ;
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map