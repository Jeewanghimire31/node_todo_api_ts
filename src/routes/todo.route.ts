import {Router} from "express";

import {
    getTodos, 
    postTodo,
    getTodoById,
    deleteTodo,
    updateTodo,
} from "../controller/todo.controller";
import { authenticateUser } from "../middleware/auth.middleware";
import { validateSchema } from "../middleware/todoValidation.middleware";
import { todoSchema } from "../schema/todo.schema";

const router = Router();

router.use(authenticateUser);

router.get("/", getTodos);

router.get("/:id", getTodoById);

router.post("/", validateSchema(todoSchema), postTodo);

router.put("/:id", validateSchema(todoSchema), updateTodo)

router.delete("/:id", deleteTodo);


export default router; 