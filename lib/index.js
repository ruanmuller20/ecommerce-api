"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World - tsc!');
});
let id = 0;
let usuarios = [];
app.get('/users', (req, res) => {
    res.send(usuarios);
});
app.get('/users/:id', (req, res) => {
    let userId = Number(req.params.id);
    let user = usuarios.find(user => user.id === userId);
    res.send(user);
});
app.put('/users/:id', (req, res) => {
    let userId = Number(req.params.id);
    let user = req.body;
    let indexOf = usuarios.findIndex((_user) => _user.id === userId);
    usuarios[indexOf].nome = user.nome;
    usuarios[indexOf].email = user.email;
    res.send({
        message: 'Usuário alterado com sucesso!',
    });
});
app.delete('/users/:id', (req, res) => {
    let userId = Number(req.params.id);
    let indexOf = usuarios.findIndex((user) => user.id === userId);
    usuarios.splice(indexOf, 1);
    res.send({
        message: 'Usuário deletado com sucesso!',
    });
});
app.post('/users', (req, res) => {
    let user = req.body;
    user.id = ++id;
    usuarios.push(user);
    res.send({
        message: 'Usuário criado com sucesso!',
    });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=index.js.map