import IUser from "../../domain/IUser";
import IUserRepository from "./IUserRepository";

class UserRepositoryImpl implements IUserRepository {

    private users: IUser[] = [
        {
            id: "1",
            username: 'jackson',
            email: 'jackson@gmail.com',
        },
        {
            id: "2",
            username: 'lily',
            email: 'lily@gmail.com',
        }
    ]

    constructor() {
        // empty
    }

    findAll = (): IUser[] => {
        return this.users;
    }

    findById = (id: string): IUser => {
        let user: IUser = this.findAll().find(u => u.id == id);
        if (user == null) throw new Error(`user not found with id: ${id}`);
        return user;
    }

    create = (user: IUser): IUser => {
        this.users.push(user)
        return user;
    }

    deleteAllById(ids: string[]): IUser[] {
        const usersToRemove: IUser[] = this.users.filter(u => ids.includes(u.id));
        this.users = this.users.filter(u => !(ids.includes(u.id)));
        return usersToRemove;
    }

    deleteById(id: string): IUser {
        const userToRemove: IUser = this.users.find(u => u.id === id);
        this.users = this.users.filter(u => u.id !== id)
        return userToRemove;
    }

    findAllByIds(ids: string[]): IUser[] {
        return this.findAll().filter(u => ids.includes(u.id));
    }

    findByIdOrNull(id: string): IUser {
        return this.findAll().find(u => u.id == id);
    }

    update(entity: IUser): IUser {
        let id: string = entity.id
        return this.findById(id);
    }
}

export default UserRepositoryImpl
