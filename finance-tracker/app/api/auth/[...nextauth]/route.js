import NextAuth from "next-auth"
import * as pg from 'pg';
import config from '@/db/config';
// import clientPromise from "@/lib/mongodb"
import GoogleProvider from 'next-auth/providers/google';
import SequelizeAdapter from "@next-auth/sequelize-adapter";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(config.conn, {
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