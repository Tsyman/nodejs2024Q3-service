import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { CreateUserDto, UpdatePasswordDto } from '../users/users.payload';

@Injectable()
export class UsersService {
  constructor(private db: DbService) {}

  create(createUserDto: CreateUserDto) {
    return this.db.createUser(createUserDto);
  }

  findAll() {
    return this.db.findAllUsers();
  }

  findOne(id: string) {
    return this.db.findUserById(id);
  }

  update(id: string, updatePasswordDto: UpdatePasswordDto) {
    return this.db.updatePassword(id, updatePasswordDto);
  }

  remove(id: string) {
    return this.db.removeUserById(id);
  }
}
