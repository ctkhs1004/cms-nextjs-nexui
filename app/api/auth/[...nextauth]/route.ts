import NextAuth, {NextAuthOptions} from 'next-auth';
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
                password: {label: 'password', type: 'password'},
                key: {label: 'key', type: 'text'}
            },
            async authorize(credentials) {
                console.log(credentials)
                // //入力チェック
                // if (!credentials?.email || !credentials?.password && !credentials?.key) {
                //     console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 1")
                //     throw new Error('Invalid credentials (Input Error)');
                // }

                //Keyでの認証の場合、非対称暗号での認識のため、NextAuthでの認証は不要？
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
                    return userInfo;
                }

                //Keyでの認証の場合
                const userInfo: any = await getApi(url.getUserAuth)
                const isCorrectKey = userInfo.user.key === credentials?.key ? true : false;
                if (!isCorrectKey) {
                    throw new Error('Invalid credentials');
                }
                return userInfo;
            }
        }),
    ],

    session: {strategy: "jwt"}
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
