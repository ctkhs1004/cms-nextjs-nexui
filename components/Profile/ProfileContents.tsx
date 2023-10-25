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
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<< profile -> ",profile)
    const result: any = {
        id: id,
        name: profile.data.name,
        key: profile.data.key,
        bio: profile.data.bio
    }
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<< result -> ",result)
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
        <Card className="max-w-[800px]">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png"/>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{session?.data?.user?.name}</h4>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
                <p>
                    { bioApi.bio }
                </p>
                <span className="pt-2">
          #FrontendWithZoey
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <button>Edit</button>
                </div>
                <div className="flex gap-1">
                    <button>Delete</button>
                </div>
            </CardFooter>
        </Card>
    )
}