import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};


export type SuccessResponse<T> = {
    status: "success";
    message?: string;
    data?: T;
};

export type ErrorResponse = {
    status: "error";
    message: string;
};

export interface RequestParams {
    [key: string]: any;
}

export interface UserData {
    user: {
        id?: string | null | undefined;
        name: string;
        age: number;
        email: string;
        password: string;
        key: string;
    };
}

export interface Contents {
    name: string,
    message: string,
    post_dt: string,
    goodMark: string,
    img: string
    // contentsData: [
    //     {
    //         name: string,
    //         message: string,
    //         post_dt: string,
    //         goodMark: string
    //     }
    //
    // ]
}
