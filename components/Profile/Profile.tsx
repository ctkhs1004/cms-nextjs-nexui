'use client';

import {UserData} from "@/types";
import {getApi} from "@/utils/httpRequest";
import {Avatar} from "@nextui-org/react";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";
import url from "@/app/api/url";
import {Loading} from "../Loading";

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

export default function Profile() {
    const [bioApi, setBioApi] = useState<any>()
    const session = useSession();
    useEffect(() => {
        const axiosData = async () => {
            const res = await getUserProfile(session?.data?.user?.id);
            setBioApi(res)
        }
        axiosData();
    }, []);

    if (!bioApi) {
        return <Loading/>
    }

    return (
        <div className="justify-center">
            <Card className="max-w-[640px]">
                <CardHeader className="justify-between pl-4">
                    <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">{session?.data?.user?.name}</h4>
                            <h5 className="text-small tracking-tight text-default-400">@{session?.data?.user?.name}</h5>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="pl-4 px-5 py-5 text-large text-default-600">
                    <h4 className="text-medium font-semibold leading-none text-default-600">Bio</h4>
                    <p className="pl-6 px-5 py-5">
                        {bioApi.bio}
                    </p>
                </CardBody>
                <CardFooter className="gap-8 pl-6">
                    
                </CardFooter>
            </Card>
        </div>
    )
}