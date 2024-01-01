import {Request, Response} from "express";
import TodoService from "../service/todo.service";

export const getTodos = async (req: Request, res: Response) => {
    const data = await TodoService.getTodos();
    res.send({
      success: true,
      message: "Todos fetched successfully",
      data,
    });
  };