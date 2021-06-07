export interface UserDto {
    username: string,
    email: string,
    password: string,
    name?: string,
    surname?: string,
    age?: number,
    city?: string,
    id?: number,
    userImg?: string,
    bio?: string,
    createdAt?: Date
    updatedAt?: Date
}