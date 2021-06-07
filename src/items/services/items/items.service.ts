import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemDto } from 'src/items/dtos/item.dto';
import { Item } from 'src/items/entities/item.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class ItemsService {

    constructor(@InjectRepository(Item) public itemRepo: Repository<Item>) { }

    findAllItems(characterId: number): Promise<Item[]> {
        let options: FindManyOptions<Item> = {
            where: {
                characterId: characterId
            }
        }
        return this.itemRepo.find(options);
    }

    // async findOneItem(characterId: number, name: string): Promise<Item> {
    //     let options: FindManyOptions<Item> = {
    //         where: {
    //             characterId: characterId
    //         }
    //     }
    //     const items = await this.itemRepo.find(options);
    //     return items.find((item) => {
    //         return item.name === name;
    //     })
    // }

    async findOneItemPerId(itemId: number): Promise<Item> {
        let options: FindManyOptions<Item> = {
            where: {
                itemId: itemId
            }
        }
        const items = await this.itemRepo.find(options);
        return items[0];
    }

    create(body: ItemDto) {
        const newItem = this.itemRepo.create(body);
        return this.itemRepo.save(newItem);
    }

    async update(itemId: number, body: ItemDto) {
        let options: FindManyOptions<Item> = {
            where: {
                itemId: itemId
            }
        }
        const items = await this.itemRepo.find(options);
        const itemToUpd = items[0];
        this.itemRepo.merge(itemToUpd, body);
        return this.itemRepo.save(itemToUpd);
    }

    async delete(itemId: number) {
        let options: FindManyOptions<Item> = {
            where: {
                itemId: itemId
            }
        }
        const items = await this.itemRepo.find(options);
        const itemToDelete = items[0];
        this.itemRepo.delete(itemToDelete.itemId);
        return true;
    }
}
