import { Request, Response } from "express";
import TodoService from "../service/todo.service";

export const getTodos = async (req: Request, res: Response) => {
  const data = await TodoService.getTodos();
  res.send({
    success: true,
    message: "Todos fetched successfully",
    data,
  });
};

export const getTodoById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await TodoService.getTodosById(id);
  res.send({
    success: true,
    message: "Todos fetched successfully",
    data,
  });
};

export const postTodo = async (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  const response = await TodoService.postTodo(body);
  res.send({
    success: true,
    message: "Blog created successfully",
    data: response,
  });
};
export const updateTodo = async (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  const response = await TodoService.updateTodo(body);
  res.send({
    success: true,
    message: "Blog updated successfully",
    data: response,
  });
};


export const deleteTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await TodoService.deleteTodo(id);
    res.send({
      success: true,
      message: "Todos fetched successfully",
      data,
    });
  };
