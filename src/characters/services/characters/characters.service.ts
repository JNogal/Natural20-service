import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from 'src/characters/entities/character.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { CharacterDto } from '../../dtos/character.dto';

@Injectable()
export class CharactersService {

    constructor(@InjectRepository(Character) public characterRepo: Repository<Character>) { }
    
    findAllCharacters(userId: number): Promise<Character[]> {
        let options: FindManyOptions<Character> = {
            where: {
                userId: userId
            }
        }
        return this.characterRepo.find(options);
    }

    async findOneCharacterPerName(userId: number, name: string): Promise<Character> {
        let options: FindManyOptions<Character> = {
            where: {
                userId: userId
            }
        }
        const characters = await this.characterRepo.find(options);
        return characters.find((character) => {
            return character.name === name;
        })
    }

    async findOneCharacterPerId(characterId: number): Promise<Character> {
        let options: FindManyOptions<Character> = {
            where: {
                characterId: characterId
            }
        }
        const characters = await this.characterRepo.find(options);
        return characters[0];
    }

    create(body: CharacterDto) {
        const newCharacter = this.characterRepo.create(body);
        return this.characterRepo.save(newCharacter);
    }

    async update(characterId: number, body: CharacterDto) {
        let options: FindManyOptions<Character> = {
            where: {
                characterId: characterId
            }
        }
        const characters = await this.characterRepo.find(options);
        const characterToUpd = characters[0];
        console.log(characterToUpd);
        this.characterRepo.merge(characterToUpd, body);
        return this.characterRepo.save(characterToUpd);
    }

    async delete(characterId: number) {
        let options: FindManyOptions<Character> = {
            where: {
                characterId: characterId
            }
        }
        const characters = await this.characterRepo.find(options);
        const characterToDelete = characters[0];
        console.log(characterToDelete);
        this.characterRepo.delete(characterToDelete.characterId);        
        return true
    }
}
