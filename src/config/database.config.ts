import { DataSource } from "typeorm";
import { Todo } from "../entities/Todo";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: +process.env.DATABASE_PORT!,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false, //shows the query if made true
  entities: [Todo, User],
  subscribers: [],
  migrations: [],
});
