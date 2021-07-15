import App from './app'

import * as bodyParser from 'body-parser'
import exampleMiddleware from './shared/middleware/ExampleMiddleware'

import UserController from "./user/infrastructure/controller/UserController";

const app = new App({
    port: +process.env.PORT || 8080,
    controllers: [
        new UserController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({extended: true}),
        exampleMiddleware
    ]
})

app.listen()
