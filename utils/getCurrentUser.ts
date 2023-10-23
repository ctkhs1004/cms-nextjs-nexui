import getSession from "@/utils/getSession"
import url from "@/app/api/url";
import {getUserApi} from "./httpRequest";
import { RequestParams, UserData } from "@/types";
const getCurrentUser = async () => {
    try {
        const session = await getSession();
        if (!session || !session.user || !session.user.email) {
            return null;
        }
        
        const params: RequestParams = {
            email: session.user.email
        };
        
        const currentUser = await getUserApi(url.getCurrentUserInfo, params);
        if (!currentUser) {
            return null;
        }
        console.log(session)
        console.log(currentUser)
        return currentUser;
    } catch (error: any) {
        //エラーコードは共通化予定
        throw new Error("システムエラー(セッション情報または、ユーザー情報が取得失敗)")
    }

}

export default getCurrentUser;