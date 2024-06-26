import { MigrationInterface, QueryRunner } from "typeorm";

export class InitalTest1696062141081 implements MigrationInterface {
    name = 'InitalTest1696062141081'

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

      await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "fuzzystrmatch"`); // postgis_tiger_geocoder required this extension

      await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "postgis"`);
      await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "postgis_tiger_geocoder"`);
      await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "postgis_topology"`);

        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "fullName" character varying NOT NULL, "email" text NOT NULL, "emailVerified" boolean NOT NULL DEFAULT false, "emailToken" uuid DEFAULT uuid_generate_v4(), "verifiedAt" integer, "password" text NOT NULL, "avatar" character varying, "phone" character varying, "identityNumber" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_97672ac88f789774dd47f7c8be"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
