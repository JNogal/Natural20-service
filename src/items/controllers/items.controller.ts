import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ItemDto } from '../dtos/item.dto';
import { Item } from '../entities/item.entity';
import { ItemsService } from '../services/items/items.service';

@Controller('api/items')
export class ItemsController {
    constructor(public itemsService: ItemsService) {}

    @Get(':characterId')
    getAllItems(@Param('characterId') characterId: number): Promise<Item[]> {
        // return this.userAuthService.getAllUsers();
        return this.itemsService.findAllItems(characterId);
    }

    @Get('getOne/:itemId')
    getItem(@Param('itemId') itemId: number): Promise<Item> {
        // return this.userAuthService.getUser(username);
        return this.itemsService.findOneItemPerId(itemId);
    }

    @Post(':characterId/createNewItem')
    createItem(@Body() body: ItemDto): Promise<Item> {
        return this.itemsService.create(body);
    }

    @Put(':itemId/upd')
    updateItem(@Param('itemId') itemId: number, @Body() body: ItemDto): Promise<Item> {
        return this.itemsService.update(itemId, body);
    }

    @Delete(':itemId/dlt')
    deleteItem(@Param('itemId') itemId: number): Promise<boolean> {
        return this.itemsService.delete(itemId);
    }
}
