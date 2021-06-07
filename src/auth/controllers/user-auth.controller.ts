import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity';
import { UserAuthService } from '../services/user-auth.service';

@Controller('api/user-auth/users')
export class UserAuthController {

    constructor(public userAuthService: UserAuthService) {}
    
    @Get('')
    getAllUsers(): Promise<User[]>  {
        return this.userAuthService.getAllUsers();
    }

    @Get(':username')
    getUser(@Param('username') username: string): Promise<User>  {
        return this.userAuthService.findOneUserPerName(username);
    }

    @Get('id/:id')
    getUserById(@Param('id') id: number): Promise<User>  {
        return this.userAuthService.findOneUserPerId(id);
    }

    @Get(':username/:password')
    checkPassword(@Param('username') username: string, @Param('password') password: string): Promise<boolean> {
        return this.userAuthService.checkUserPassword(username, password);
    }

    @Post('createUser')
    createtUser(@Body() body: UserDto): Promise<User> {
        return this.userAuthService.create(body);
    }

    @Put(':id/upd')
    updateUser(@Param('username') username: string, @Body() body: any) {
        return this.userAuthService.update(body);
    }

    @Delete(':id/dlt')
    deleteUser(@Param('id') id: number) {
        console.log(id);
        return this.userAuthService.delete(id);
    }

}
