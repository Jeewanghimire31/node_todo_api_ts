import { Application } from "express";
import todoRoute from "./todo.route";

export const initializeRoutes = (app: Application) => {
    app.use("/todos", todoRoute);
};