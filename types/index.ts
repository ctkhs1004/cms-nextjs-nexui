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
        id?: string | null | undefined | unknown;
        name: string | null | undefined | unknown;
        age: number;
        email: string;
        password: string;
        key: string | null | undefined | unknown;
        bio: string | null | undefined | unknown;
    };
}

export interface Contents {
    id: string,
    name: string,
    message: string,
    post_dt: string,
    goodMark: string,
    img: string
}
