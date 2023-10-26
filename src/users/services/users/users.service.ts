import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}

  findUsers() {
    return this.UserRepository.find();
  }

  findUserById(id: number) {
    return this.UserRepository.findOne({ where: { id } });
  }

  createUser(userDetails: CreateUserParams) {
    const newUser = this.UserRepository.create({ ...userDetails });
    return this.UserRepository.save(newUser);
  }

  updateUser(id: number, userDetails: UpdateUserParams) {
    const updatedUser = this.UserRepository.update({ id }, { ...userDetails });
    return updatedUser;
  }

  deleteUser(id: number) {
    return this.UserRepository.delete({ id });
  }
}
