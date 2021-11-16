import express from "express";
import mongoose from "mongoose";
import { connectionString } from "./config";
import userRoute from './routes/user-routes';

class App {

    public express: express.Application;

    public constructor() {
        this.express = express();

        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares(): void {
        this.express.use(express.json());
    }

    private database(): void {
        mongoose.connect( connectionString, { useNewUrlParser: true });
    }

    private routes(): void {
        this.express.use('/user', userRoute);
    }

}

export default new App().express;