import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CharacterDto } from '../dtos/character.dto';
import { Character } from '../entities/character.entity';
import { CharactersService } from '../services/characters/characters.service';

@Controller('api/characters')
export class CharactersController {
    constructor(public charactersService: CharactersService) {}

    @Get(':id')
    getAllCharacters(@Param('id') id: number): Promise<Character[]> {
        // return this.userAuthService.getAllUsers();
        return this.charactersService.findAllCharacters(id);
    }

    // @Get(':id/:name')
    // getCharacter(@Param('id') id: number, @Param('name') name: string): Promise<Character> {
    //     // return this.userAuthService.getUser(username);
    //     return this.charactersService.findOneCharacterPerName(id, name);
    // }

    @Get('getOne/:characterId')
    getCharacter(@Param('characterId') characterId: number): Promise<Character> {
        // return this.userAuthService.getUser(username);
        return this.charactersService.findOneCharacterPerId(characterId);
    }

    @Post('createNewCharacter')
    createCharacter(@Body() body: CharacterDto): Promise<Character> {
        return this.charactersService.create(body);
    }

    @Put(':characterId/upd')
    updateCharacter(@Param('characterId') characterId: number,  @Body() body: CharacterDto): Promise<Character> {
        return this.charactersService.update(characterId, body);
    }

    @Delete(':characterId/dlt')
    deleteCharacter(@Param('characterId') characterId: number): Promise<boolean> {
        return this.charactersService.delete(characterId);
    }
}
