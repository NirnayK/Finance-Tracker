import NextAuth from "next-auth"
import * as pg from 'pg';
// import clientPromise from "@/lib/mongodb"
import GoogleProvider from 'next-auth/providers/google';
import SequelizeAdapter from "@next-auth/sequelize-adapter";
import {Sequelize} from "sequelize";

console.log(process.env.GOOGLE_ID);

const sequelize = new Sequelize("postgres://citus:LNMimadY20@c.sga556cc75308043abbbd4cadbb5ac6027.postgres.database.azure.com:5432/citus?sslmode=require", {
    dialectModule: pg
});

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
    ],
    adapter: SequelizeAdapter(sequelize)
})

export { handler as GET, handler as POST }