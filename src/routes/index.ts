import { Application } from "express";
import todoRoute from "./todo.route";
import userRoute from "./user.route";

export const initializeRoutes = (app: Application) => {
    app.use("/todos", todoRoute);
    app.use("/users", userRoute);
};