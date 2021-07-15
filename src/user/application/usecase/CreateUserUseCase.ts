import IUserService from "../IUserService";
import IUser from "../../domain/IUser";

class CreateUserUseCase {

    private userService: IUserService;

    constructor(service: IUserService) {
        this.userService = service;
    }

    create = (user: IUser) => {
        return this.userService.create(user);
    }

}

export default CreateUserUseCase
