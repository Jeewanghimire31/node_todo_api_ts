import { Todo } from "../entities/Todo";

interface ITodo{
  task:string
  isCompleted:boolean
}

class TodoService {
    constructor() {}

    async getTodos() {
        // SELECT * FROM Blogs
        return await Todo.find();
        
      }
}

export default new TodoService();