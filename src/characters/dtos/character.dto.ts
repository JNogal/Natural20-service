import { ItemDto } from "src/items/dtos/item.dto";

export interface CharacterDto {
    characterId?: number;
    name: string;
    class: string;
    race: string;
    age: number;
    description: string;

    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    charisma: number;
    wisdom: number;

    inventory: ItemDto[];
    userId?: number;

    abbilities?: string[];
    subclass?: string;
    alias?: string;
    characterImg?: string;
    createdAt?: Date;
    updatedAt?: Date;
}