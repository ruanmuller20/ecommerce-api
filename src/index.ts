import express from 'express';
import { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {  
  res.send('Hello World - tsc!');  
});


let usuarios = [{
  nome: 'Derci Santos',
  idade: 33
},{
  nome: 'João da Silva',
  idade: 44
}];


app.get ('/users', (req: Request, res: Response) => {
  res.send(usuarios); 
});

app.post('/users', (req: Request, res: Response) => {  
 let user = req.body
 usuarios.push(user);
 res.send({
  message: 'Usuário criado com sucesso!',
 }); 
});


app.listen(3000, () => {  
  console.log('Server is running on port 3000');
});