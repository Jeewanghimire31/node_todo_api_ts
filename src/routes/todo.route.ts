import {Router} from "express";

import {
    getTodos, 
    postTodo,
    getTodoById,
    deleteTodo,
    updateTodo,
} from "../controller/todo.controller";
import { authenticateUser } from "../middleware/auth.middleware";

const router = Router();

// router.use(authenticateUser);

router.get("/", getTodos);

router.get("/:id", getTodoById);

router.post("/", postTodo);

router.put("/:id", updateTodo)

router.delete("/:id", deleteTodo);


export default router; 