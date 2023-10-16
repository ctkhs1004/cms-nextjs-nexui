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
    id: number;
    name: string;
    age: number;
    email: string;
  };
}