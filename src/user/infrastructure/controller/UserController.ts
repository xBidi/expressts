import {Request, Response, Router} from 'express'
import IUser from "../../domain/IUser";
import IController from "../../../shared/IController";
import UserServiceImpl from "../../application/UserServiceImpl";
import UserRepositoryImpl from "../repository/UserRepositoryImpl";
import IUserRepository from "../repository/IUserRepository";
import IUserService from "../../application/IUserService";
import FindUserUseCase from "../../application/usecase/FindUserUseCase";
import CreateUserUseCase from "../../application/usecase/CreateUserUseCase";

class UserController implements IController {

    public path = '/users';
    public router = Router();
    public userRepository: IUserRepository = new UserRepositoryImpl();
    public userService: IUserService = new UserServiceImpl(this.userRepository);
    public findUserUseCase: FindUserUseCase = new FindUserUseCase(this.userService);
    public createUserUseCase: CreateUserUseCase = new CreateUserUseCase(this.userService);

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path + '/:id', this.getUser)
        this.router.get(this.path, this.getAllUsers)
        this.router.post(this.path, this.createUser)
    }

    getUser = (req: Request, res: Response) => {
        const id: string = req.params.id;
        const user: IUser = this.findUserUseCase.findUser(id);
        res.json({user})
    }

    getAllUsers = (req: Request, res: Response) => {
        const users = this.findUserUseCase.findAll();
        res.json({users})
    }

    createUser = (req: Request, res: Response) => {
        const user: IUser = req.body
        const createdUser: IUser = this.createUserUseCase.create(user);
        res.json({createdUser})
    }
}

export default UserController
