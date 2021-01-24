import * as express from 'express'
import {Request, Response} from 'express'
import UserInterface from "./UserInterface";
import BaseController from "../shared/BaseController";
import UserService from "./UserService";

class UserController implements BaseController {

    public path = '/users'
    public router = express.Router()
    public userService: UserService = new UserService();

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path + '/:id', this.getUser)
        this.router.get(this.path, this.getAllUsers)
        this.router.post(this.path, this.createUser)
    }

    getUser = (req: Request, res: Response) => {
        const id: number = +req.params.id;
        const user: UserInterface = this.userService.findById(id);
        this.sendUser(res, user);
    }

    getAllUsers = (req: Request, res: Response) => {
        const users = this.userService.findAll();
        this.sendUsers(res, users);
    }

    createUser = (req: Request, res: Response) => {
        const body: UserInterface = req.body
        const user: UserInterface = this.userService.create(body);
        this.sendUser(res, user);
    }

    sendUser = (res: Response, user: UserInterface) => {
        this.sendUsers(res, [user])
    }

    sendUsers = (res: Response, users: UserInterface[]) => {
        res.json({users})
    }
}

export default UserController
