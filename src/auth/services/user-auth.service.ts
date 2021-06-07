import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { UserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UserAuthService {

    constructor(@InjectRepository(User) public userRepo: Repository<User>) {}

    async checkUserPassword(username: string, password: string): Promise<boolean> {
        const user = await this.userRepo.findOne({
            username: username
        });
        if(!user) {
            return false;
        }
        console.log(user.password)
        if(user.password == password) {
            return true;
        } else {
            return false;
        }
    }

    async findOneUserPerName(username: string): Promise<User> {
        const user = await this.userRepo.findOne({
            username: username
        });
        return user;
    }

    async findOneUserPerId(id: number): Promise<User> {
        const user = await this.userRepo.findOne({
            id: id
        });
        return user;
    }

    async update(user: UserDto) {
        let options: FindManyOptions<User> = {
            where: {
                id: user.id
            }
        }
        const users = await this.userRepo.find(options);
        const userToUpd = users[0];
        this.userRepo.merge(userToUpd, user);
        return this.userRepo.save(userToUpd);
    }

    async delete(id: number) {
        let options: FindManyOptions<User> = {
            where: {
                id: id
            }
        }
        const users = await this.userRepo.find(options);
        const userToDelete = users[0];
        console.log(userToDelete)
        this.userRepo.delete(userToDelete.id);        
        return true
    }

    deleteNoAsync(userId: number) {
        this.userRepo.delete(userId);
    }

    getAllUsers() {
        return this.userRepo.find();
    }

    create(body: UserDto) {
        const newItem = this.userRepo.create(body);
        return this.userRepo.save(newItem);
    }
    
}
