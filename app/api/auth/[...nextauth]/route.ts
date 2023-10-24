import NextAuth, {NextAuthOptions} from 'next-auth';
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

        // CredentialsProvider({
        //     name: 'credentials',
        //     credentials: {
        //         email: {label: 'email', type: "text"},
        //         password: {label: 'password', type: 'password'},
        //         key: {label: 'key', type: 'text'}
        //     },
        //     async authorize(credentials) {
        //         console.log(credentials)
        //
        //         //パスワード認証の場合
        //         if (credentials?.password && !credentials?.key) {
        //             const userInfo: any = await getApi(url.getUserAuth)
        //             console.log("credentials password -> " + credentials.password)
        //             console.log("user password ->  " + userInfo.user.password);
        //
        //             if (!userInfo.user || !userInfo?.user.password) {
        //                 throw new Error('Invalid credentials (No user info)');
        //             }
        //
        //             const isCorrectPassword = userInfo.user.password === credentials.password ? true : false;
        //             console.log("isCorrect ->" + isCorrectPassword)
        //
        //             if (!isCorrectPassword) {
        //                 throw new Error('Invalid credentials(Invalid password)');
        //             }
        //             return userInfo;
        //         }
        //
        //         //Keyでの認証の場合
        //         const userInfo: any = await getApi(url.getUserAuth)
        //         const isCorrectKey = userInfo.user.key === credentials?.key ? true : false;
        //         if (!isCorrectKey) {
        //             throw new Error('Invalid credentials');
        //         }
        //         return userInfo;
        //     }
        // }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                key: {label: 'key', type: 'text'}
            },
            async authorize(credentials){
                console.log(credentials)
                const response = await postApi(url.postUserKey,{
                    key: credentials?.key
                })
                
                if(response.status !== 200){
                    return null
                }
                
                console.log("respponse -> ",response)
                return response;
            }
        })
    ],

    debug: process.env.NODE_ENV === 'development',
    session: {strategy: "jwt"},
    secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST, authOptions};
