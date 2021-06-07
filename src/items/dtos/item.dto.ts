export interface ItemDto {
    itemId?: number;
    name: string;
    type: string;
    description: string;
    quantity: number;
    weight: number;

    characterId?: number;
    totalWeight?: number;
    durability?: number;
    uses?: number;
    itemImg?: string;
    createdAt?: string;
    updatedAt?: string;
}