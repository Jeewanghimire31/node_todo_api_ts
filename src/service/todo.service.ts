import { Todo } from "../entities/Todo";

interface ITodo {
  id: string;
  task: string;
  isCompleted: boolean;
}

class TodoService {
  constructor() {}

  async getTodos() {
    // SELECT * FROM Blogs
    return await Todo.find();
  }
  async getTodosById(id: string) {
    // If id undefined=>firstRow
    return Todo.findOne({
      where: {
        id: id,
      },
    });
  }

  async postTodo(body: ITodo) {
    // Insert into blog(title,content) values(body.title,body.content)
    await Todo.create({
      task: body.task,
      isCompleted: body.isCompleted,
    }).save();
  }
  async updateTodo(id: string, body: ITodo) {
    const todo = await this.getTodosById(body.id);
    if (!todo) {
      throw new Error("Todo not found!");
    }
    // Update the existing todo with the new values
    console.log("hello", todo, body);
    todo.task = body.task;
    todo.isCompleted = body.isCompleted;
    // Save the updated todo
    return await todo.save();
  }

  async deleteTodo(id: string) {
    const todo = await this.getTodosById(id);
    if (!todo) {
      throw Error("Todo not found!");
    } else {
      return await todo.remove();
    }
  }
}

export default new TodoService();
