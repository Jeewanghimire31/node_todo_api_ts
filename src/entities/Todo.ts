import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Todo as TodoInterface } from "../interfaces/todo.interface";


@Entity()
export class Todo extends BaseEntity implements TodoInterface{
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  task: string;

  @Column()
  isCompleted: boolean;
}
