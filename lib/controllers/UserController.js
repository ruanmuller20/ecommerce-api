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
// type User = {
//   id: number;
//   nome: string;
//   email: string
// };
class UserController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const snapshot = yield (0, firestore_1.getFirestore)().collection('users').get();
            const users = snapshot.docs.map(doc => {
                return Object.assign({ id: doc.id }, doc.data());
            });
            res.send(users);
        });
    }
    ;
    static getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.params.id;
            const doc = yield (0, firestore_1.getFirestore)().collection('users').doc(userId).get();
            res.send(Object.assign({ id: doc.id }, doc.data()));
        });
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
        let userId = req.params.id;
        let user = req.body;
        (0, firestore_1.getFirestore)().collection('users').doc(userId).set({
            nome: user.nome,
            email: user.email
        });
        res.send({ message: 'Usuário alterado com sucesso!' });
    }
    ;
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.params.id;
            yield (0, firestore_1.getFirestore)().collection('users').doc(userId).delete();
            res.send({ message: 'Usuário deletado com sucesso!' });
        });
    }
    ;
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map