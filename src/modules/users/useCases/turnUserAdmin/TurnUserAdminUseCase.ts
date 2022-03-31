import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui`
    const userModify = this.usersRepository.findById(user_id);
    if(userModify){
        const userAlreadyModify = this.usersRepository.turnAdmin(userModify);
        return userAlreadyModify;
    }else{
        throw new Error("User don't exist");
    }

  }
}

export { TurnUserAdminUseCase };
