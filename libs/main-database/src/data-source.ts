import { DataSource } from 'typeorm';

export const postgresDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'farmolog-main-user',
  password: '123456',
  database: 'farmolog-main-db',
  synchronize: false,
  logging: true,
  entities: ['./dist/libs/main-database/src/lib/entities/**/*.entity{.ts,.js}'],
  migrations: ['./dist/libs/main-database/src/lib/migrations/**/*{.ts,.js}'],
  subscribers: [
    './dist/libs/main-database/src/lib/subscribers/**/*.subscriber{.ts,.js}',
  ],
});
