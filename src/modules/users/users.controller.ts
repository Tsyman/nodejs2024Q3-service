import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  NotFoundException,
  HttpCode,
  Put,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { UUIDv4, CreateUserDto, UpdatePasswordDto } from './users.payload';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param() param: UUIDv4) {
    const existUser = this.usersService.findOne(param.id);
    if (existUser) {
      return existUser;
    }
    throw new NotFoundException('User not found');
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Put(':id')
  @HttpCode(200)
  update(@Param() param: UUIDv4, @Body() updatePasswordDto: UpdatePasswordDto) {
    const { updatedUser, error } = this.usersService.update(
      param.id,
      updatePasswordDto,
    );
    if (updatedUser) return updatedUser;
    throw error;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param() param: UUIDv4) {
    if (!this.usersService.remove(param.id)) {
      throw new NotFoundException('User not found');
    }
  }
}
