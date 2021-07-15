import IUser from "../domain/IUser";
import IUserService from "./IUserService";
import IUserRepository from "../infrastructure/repository/IUserRepository";

class UserServiceImpl implements IUserService {

    private repository: IUserRepository;

    constructor(repository: IUserRepository) {
        this.repository = repository;
    }

    findAll = (): IUser[] => {
        return this.repository.findAll();
    }

    findById = (id: string): IUser => {
        return this.repository.findById(id);
    }

    create = (user: IUser): IUser => {
        return this.repository.create(user)
    }

    deleteAllById(ids: string[]): any[] {
        return this.repository.deleteAllById(ids);
    }

    deleteById(id: string): any {
        return this.repository.deleteById(id);
    }

    findAllByIds(ids: string[]): any[] {
        return this.repository.findAllByIds(ids);
    }

    findByIdOrNull(id: string): any {
        return this.repository.findByIdOrNull(id);
    }

    update(entity: any): any {
        return this.repository.update(entity);
    }
}

export default UserServiceImpl
