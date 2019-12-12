import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {

  constructor(@InjectModel('User') private readonly model: Model<User>) { }

  async findOne(username: string): Promise<User> {
    return await this.model.findOne({ username: username.trim().toLowerCase() });
  }

  async create(username: string, pass: string): Promise<User> {
    return await this.model.create({ username: username.trim().toLowerCase(), password: pass });
  }

  async delete(userId: string) {
    await this.model.deleteOne({ id: userId });
  }
}