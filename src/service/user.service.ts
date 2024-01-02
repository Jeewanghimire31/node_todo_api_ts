// user.service.ts
import * as bcrypt from "bcrypt";
import { User } from "../entities/User";

class UserService {
  async createUser(username: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password: hashedPassword,
    }).save();

    return user;
  }

  async getUserByUsername(username: string) {
    return User.findOne({ where: { username } });
  }

  async comparePasswords(candidatePassword: string, hashedPassword: string) {
    return bcrypt.compare(candidatePassword, hashedPassword);
  }
}

export default new UserService();
