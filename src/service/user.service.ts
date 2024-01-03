// user.service.ts
import * as bcrypt from "bcrypt";
import { User } from "../entities/User";
import { User as UserInterface } from "../interfaces/user.interface";

class UserService {
  async createUser(username: string, password: string): Promise<UserInterface> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password: hashedPassword,
    }).save();

    return user;
  }

  async getUserByUsername(username: string): Promise<UserInterface | undefined> {
    return User.findOne({ where: { username } });
  }

  async comparePasswords(candidatePassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, hashedPassword);
  }
}

export default new UserService();
