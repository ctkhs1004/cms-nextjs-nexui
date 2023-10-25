'use client';

import {UserData} from "@/types";
import {getApi} from "@/utils/httpRequest";
import {Avatar} from "@nextui-org/react";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {Card, CardBody, CardFooter, CardHeader} from "react-bootstrap";
import url from "@/app/api/url";
import { Loading } from "../Loading";

async function getUserProfile(id: string | unknown): Promise<any> {
    const profile = await getApi(url.getUserBio, {id});
    const result: any = {
        id: id,
        name: profile.data.name,
        key: profile.data.key,
        bio: profile.data.bio
    }
    return result;
}

export default function ProfileContents() {
    const [bioApi, setBioApi] = useState<any>()
    const session = useSession();
    useEffect(() => {
        const axiosData = async () => {
            const res = await getUserProfile(session?.data?.user?.id);
            setBioApi(res)
            console.log("res -> ", res)
            console.log("bioApi -> ")
            console.log(bioApi)
        }
        axiosData();
    }, []);
    
    if(!bioApi){
        return  <Loading/>
    }
    
    return (
        <Card className="w-10/12 h-96">
            <CardHeader className="justify-between pl-2">
                <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{session?.data?.user?.name}</h4>
                        <h5 className="text-small tracking-tight text-default-400">@{session?.data?.user?.name}</h5>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="pl-2 px-5 py-5 text-small text-default-600">
                <h4 className="text-small font-semibold leading-none text-default-600">Bio</h4>
                <p className="pl-6 px-5 py-5">
                    {bioApi.bio}
                </p>
            </CardBody>
            <CardFooter className="gap-8 pl-6">
                <div className="flex gap-1">
                    <p className=" text-default-400 text-small">❤️</p>
                    <p className="font-semibold text-default-400 text-small">aaaaaa</p>
                </div>
                <div className="flex gap-1 pl-96">
                    <p className="text-default-400 text-small">Posted date</p>
                    <p className="font-semibold text-default-400 text-small">aaaaaaaa</p>
                </div>
            </CardFooter>
        </Card>
    )
}