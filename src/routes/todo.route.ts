import {Router} from "express";

import {
//     createTodo,
//     deleteTodoById,
//     getTodoById,
    getTodos,
//     updateTodo,
} from "../controller/todo.controller";

const router = Router();


router.get("/", getTodos);

router.get("/:id");

router.delete("/:id");

router.post("/create");

router.put("/update/:id");


export default router; 