import {Router} from "express";

import {
    getTodos, 
    postTodo,
    getTodoById,
    deleteTodo,
    updateTodo,
} from "../controller/todo.controller";

const router = Router();


router.get("/", getTodos);

router.get("/:id", getTodoById);

router.post("/", postTodo);

router.put("/:id", updateTodo)

router.delete("/:id", deleteTodo);

router.put("/update/:id");


export default router; 