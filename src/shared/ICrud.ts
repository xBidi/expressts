interface ICrud {
    findById(id: string): any

    findByIdOrNull(id: string): any

    findAll(): any

    findAllByIds(ids: string[]): any[]

    create(entity: any): any

    update(entity: any): any

    deleteById(id: string): any

    deleteAllById(ids: string[]): any[]
}

export default ICrud
