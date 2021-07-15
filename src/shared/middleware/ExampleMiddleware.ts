import {Request, Response} from 'express'

const exampleMiddleware = (req: Request, resp: Response, next) => {
    next()
}

export default exampleMiddleware
