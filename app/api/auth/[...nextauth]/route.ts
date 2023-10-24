import NextAuth, {NextAuthOptions} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials"
import {getApi} from "@/utils/httpRequest";
import url from "@/app/api/url";

type ClientType = {
    clientId: string;
    clientSecret: string;
};

//セッションに渡す用の変数を定義
type User = {
    name?: string | null
    email?: string | null
}

export let user: User = {
    name: "",
    email: "",
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
                email: {label: 'email', type: "text"},
                password: {label: 'password', type: 'password'},
                key: {label: 'key', type: 'text'}
            },
            async authorize(credentials) {
                console.log(credentials)
                
                //パスワード認証の場合
                if (credentials?.password && !credentials?.key) {
                    const userInfo: any = await getApi(url.getUserAuth)
                    console.log("credentials password -> " + credentials.password)
                    console.log("user password ->  " + userInfo.user.password);

                    if (!userInfo.user || !userInfo?.user.password) {
                        throw new Error('Invalid credentials (No user info)');
                    }

                    const isCorrectPassword = userInfo.user.password === credentials.password ? true : false;
                    console.log("isCorrect ->" + isCorrectPassword)

                    if (!isCorrectPassword) {
                        throw new Error('Invalid credentials(Invalid password)');
                    }
                    user = {
                        name: userInfo.user.name,
                        email: userInfo.user.email,
                    }
                    return userInfo;
                }

                //Keyでの認証の場合
                const userInfo: any = await getApi(url.getUserAuth)
                const isCorrectKey = userInfo.user.key === credentials?.key ? true : false;
                if (!isCorrectKey) {
                    throw new Error('Invalid credentials');
                }
              
                user = {
                    name: userInfo.user.name,
                }
               
                return userInfo;
            }
        }),
    ],
    callbacks: {
        async jwt({token, user: User}) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (user) {
                token.name = user.name ? user.name : ""
                token.email = user.email ? user.email : ""
            } 
            return token
        },
        async session({session, token}: {
            session: any;
            token: any
        }) {
            session.user.name = token.name
            session.user.email = token.email
            return session
        },
    },
    debug: process.env.NODE_ENV === 'development',
    session: {strategy: "jwt"},
    secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST, authOptions};
