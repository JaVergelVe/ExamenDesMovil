import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "postgres://postgres:1234@127.0.0.1:5432/postgres"
);