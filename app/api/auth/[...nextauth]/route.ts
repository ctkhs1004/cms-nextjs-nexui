import NextAuth, {DefaultUser, NextAuthOptions, getServerSession} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials"
import {getApi, postApi} from "@/utils/httpRequest";
import url from "@/app/api/url";

type ClientType = {
    clientId: string;
    clientSecret: string;
};
declare module 'next-auth' {
    /**
     * Leveraged by session callback's user object (AdapterUser extends User)
     */
    export interface User extends DefaultUser {
        /** Define any user-specific variables here to make them available to other code inferences */
        key: string;
    }
    
    export interface Session {
        user: {
            key: string
        }
    }

    interface JWT {
        /** OpenID ID Token */
        key: string
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
            }
            console.log("token -> ", token);
            return token;
        },
        session({session, token, user}) {
            console.log("session -> ",session)
            return session // The return type will match the one returned in `useSession()`
        },

    },

};
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST, authOptions};
