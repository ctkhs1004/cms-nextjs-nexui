"use client"
import {getApi, getUserApi} from "@/utils/httpRequest"
import url from "@/app/api/url";
import {Contents} from "@/types";
import {useEffect, useState} from "react";
import {Loading} from "../Loading";
import {Card, CardBody, CardFooter, CardHeader} from "react-bootstrap";
import {Avatar} from "@nextui-org/react";
import {useSession} from "next-auth/react";

export async function getUserContents(id: string) {
    const data = await getUserApi(url.getUserContents, {id});
    console.log(id)
    console.log("<<<<<<<<<<<<<<<<<< data", data)
    const result: Contents[] = data.map((item: any) => ({
        id: item.id,
        name: item.name,
        message: item.message,
        post_dt: item.post_dt,
        goodMark: item.goodMark,
        img: item.img
    }))
    return result;
}

export default function ProfileUserContents() {
    const [userContents, setUserContents] = useState<Contents[]>()
    useEffect(() => {
        const axiosGet = async () => {
            const res = await getUserContents("001");
            setUserContents(res)
        }
        axiosGet();
        console.log(userContents)
    }, []);
    if (!userContents) {
        return <Loading/>;
    }
    return (
        <div className="justify-center">
            {userContents?.map((item, index) => (
                <div className="py-5" key={index}>
                    <Card className="max-w-[640px]">
                        <CardHeader className="justify-between">
                            <div className="flex gap-5">
                                <Avatar isBordered radius="full" size="md" src={item.img}/>
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-600">{item.name}</h4>
                                    <h5 className="text-small tracking-tight text-default-400">@{item.name}</h5>
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody className="px-5 py-5 text-small text-default-600">
                            <p>
                                {item.message}
                            </p>
                        </CardBody>
                        <CardFooter className="gap-3">
                            <div className="flex gap-1">
                                <p className=" text-default-400 text-small">❤️</p>
                                <p className="font-semibold text-default-400 text-small">{item.goodMark}</p>
                            </div>
                            <div className="flex gap-1 pl-96">
                                <p className="text-default-400 text-small">Posted date</p>
                                <p className="font-semibold text-default-400 text-small">{item.post_dt}</p>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </div>
    )
}

