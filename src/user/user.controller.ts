import { Controller, UseGuards, Request, Delete, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { ApiTags, ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('user')
@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @ApiOkResponse({ status: 200, description: 'Usuário deletado.' })
  @Delete()
  async delete(@Request() req) {
    return this.userService.delete(req.user);
  }

  @ApiOkResponse({ status: 200, description: 'Usuário encontrado.' })
  @Get()
  get(@Request() req) {
    return req.user;
  }
}
