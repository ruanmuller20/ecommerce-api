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
let usuarios = [{
        nome: 'Derci Santos',
        idade: 33
    }, {
        nome: 'João da Silva',
        idade: 44
    }];
app.get('/users', (req, res) => {
    res.send(usuarios);
});
app.post('/users', (req, res) => {
    let user = req.body;
    usuarios.push(user);
    res.send({
        message: 'Usuário criado com sucesso!',
    });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=index.js.map