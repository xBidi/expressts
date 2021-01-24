import App from './app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/logger'

import UserController from "./users/UserController";

const app = new App({
    port: +process.env.PORT || 8080,
    controllers: [
        new UserController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({extended: true}),
        loggerMiddleware
    ]
})

app.listen()
