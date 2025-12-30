import { ErrorBase} from "./base.error";

export class EmailAlreadyExistsError extends ErrorBase {
    constructor(message = "O email informado já esta em uso por outro usuário"){
        super(409, message);
    }
}