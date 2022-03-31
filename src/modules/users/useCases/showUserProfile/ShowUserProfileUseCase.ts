import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const user =  this.usersRepository.findById(user_id);
    if(user){
        return user;
    }else{
        throw new Error("User don't exist");
    }
  }
}

export { ShowUserProfileUseCase };
