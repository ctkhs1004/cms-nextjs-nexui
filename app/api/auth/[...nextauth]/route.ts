import NextAuth, {NextAuthOptions, getServerSession} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials"
import {getApi, postApi} from "@/utils/httpRequest";
import url from "@/app/api/url";

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
            console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<< start")
            console.log("jwt");
            console.log(token);
            console.log("user -> ", user)
            console.log("account -> ", account)
            if (account && user) {
                token.name = user.name;
            }
            console.log("afyer token -> ", token)
            console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<< end")
            return token;
        },

    },

};
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST, authOptions};
