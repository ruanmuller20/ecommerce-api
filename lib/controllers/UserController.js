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
const firestore_1 = require("firebase-admin/firestore");
let usuarios = [];
class UserController {
    static getAll(req, res) {
        res.send(usuarios);
    }
    ;
    static getById(req, res) {
        let userId = Number(req.params.id);
        let user = usuarios.find(user => user.id === userId);
        res.send(user);
    }
    ;
    static save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            const userSalvo = yield (0, firestore_1.getFirestore)().collection('users').add(user);
            res.send({ message: `Usuário ${userSalvo.id} criado com sucesso!` });
        });
    }
    ;
    static update(req, res) {
        let userId = Number(req.params.id);
        let user = req.body;
        let indexOf = usuarios.findIndex((_user) => _user.id === userId);
        usuarios[indexOf].nome = user.nome;
        usuarios[indexOf].email = user.email;
        res.send({ message: 'Usuário alterado com sucesso!' });
    }
    ;
    static delete(req, res) {
        let userId = Number(req.params.id);
        let indexOf = usuarios.findIndex((user) => user.id === userId);
        usuarios.splice(indexOf, 1);
        res.send({ message: 'Usuário deletado com sucesso!' });
    }
    ;
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map