import NextAuth, {DefaultSession, DefaultUser, NextAuthOptions, getServerSession} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials"
import {postApi} from "@/utils/httpRequest";
import url from "@/app/api/url";

type ClientType = {
    clientId: string;
    clientSecret: string;
};
declare module 'next-auth' {
    export interface Session {
        user:  {
            name: any
            key: any
            id:  any
        }
    }

    export interface User extends DefaultUser {
        /** Define any user-specific variables here to make them available to other code inferences */
        key: any;
        id: any
    }

    interface JWT {
        /** OpenID ID Token */
        key: any
        id: any
    }
}
const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        } as ClientType),

        CredentialsProvider({
            name: 'credentials',
            credentials: {
                key: {label: 'key', type: 'text'}
            },
            async authorize(credentials) {
                console.log(credentials)
                const response = await postApi(url.postUserKey, {
                    key: credentials?.key
                })

                if (response.status !== 200) {
                    return null
                }

                console.log("respponse data -> ", response.data)
                return response.data;
            }
        })
    ],
    debug: process.env.NODE_ENV === 'development',
    session: {strategy: "jwt"},
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({token, user, account}) {
            console.log("user -> ", user);
            if (account && user) {
                token.name = user.name;
                token.key = user.key;
                token.id = user.id;
            }
            console.log("token -> ", token);
            return token;
        },
        session({session, token, user}) {
            session.user.name = token.name;
            session.user.key = token.key;
            session.user.id = token.id
            console.log("session -> ", session)
            return session 
        },

    },

};
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST, authOptions};
