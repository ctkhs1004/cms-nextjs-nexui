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
                const userInfo: any = await getApi(url.getUserAuth)
                console.log("credentials <<<<<<<<< " + credentials.email)
                console.log("<<<<<<<<<<<USER<<<<<<<<<<<<<<<<<<<<< " + userInfo.user.email);
                if (!userInfo.user || !userInfo?.user.password) {
                    throw new Error('Invalid credentials');
                }

                // const isCorrectPassword = await bcrypt.compare(
                //     credentials.password,
                //     userInfo.user.password
                // );
                //
                // if (!isCorrectPassword) {
                //     throw new Error('Invalid credentials');
                // }

                return userInfo;
            }
        }),
    ],

    session: { strategy: "jwt" }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
