import BaseService from "../shared/BaseService";
import UserInterface from "./UserInterface";

class UserService implements BaseService {

    private users: UserInterface[] = [
        {
            id: 1,
            username: 'jackson',
            email: 'jackson@gmail.com',
        },
        {
            id: 2,
            username: 'lily',
            email: 'lily@gmail.com',
        }
    ]

    constructor() {
    }

    findAll = (): UserInterface[] => {
        return this.users;
    }

    findById = (id: number): UserInterface => {
        return this.findAll().find(user => user.id == id);
    }

    create = (user: UserInterface): UserInterface => {
        this.users.push(user)
        return user;
    }
}

export default UserService
