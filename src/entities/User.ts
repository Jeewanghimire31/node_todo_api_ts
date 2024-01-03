import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User as UserInterface } from "../interfaces/user.interface";


@Entity()
export class User extends BaseEntity implements UserInterface{
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
