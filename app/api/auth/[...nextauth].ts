import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials"
import {getApi} from "@/utils/api";
import url from "@/app/api/url";
import bcrypt from "bcrypt";
import {SessionOptions} from "http2";

type ClientType = {
    clientId: string;
    clientSecret: string;
};

const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        } as ClientType),

        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: 'email', type: "text"},
                password: {label: 'password', type: 'password'}
            },
            async authorize(credentials){
                if(!credentials ?.email || !credentials ?.password){
                    throw new Error('Invalid credentials');
                }
                const user: any = await getApi(url.getUserAuth)
                console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<" + user);
                if (!user || !user?.password) {
                    throw new Error('Invalid credentials');
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if (!isCorrectPassword) {
                    throw new Error('Invalid credentials');
                }

                return user;
            }
        }),
    ],

    session: { strategy: "jwt" }
};

export default NextAuth(authOptions);
