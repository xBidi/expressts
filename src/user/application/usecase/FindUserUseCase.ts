import IUserService from "../IUserService";

class FindUserUseCase {

    private userService: IUserService;

    constructor(service: IUserService) {
        this.userService = service;
    }

    findUser = (id: string) => {
        return this.userService.findById(id);
    }

    findAll = () =>{
        return this.userService.findAll();
    }

}

export default FindUserUseCase
