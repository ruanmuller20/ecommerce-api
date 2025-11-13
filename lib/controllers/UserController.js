"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
let id = 0;
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
        let user = req.body;
        user.id = ++id;
        usuarios.push(user);
        res.send({ message: 'Usuário criado com sucesso!' });
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