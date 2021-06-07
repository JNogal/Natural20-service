import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "natural20",
    database: "natural20_db",
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
    retryDelay: 3000,
    retryAttempts: 10
  }
  