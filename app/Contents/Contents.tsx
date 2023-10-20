"use client"
import {getApi} from "@/utils/httpRequest";
import url from "../api/url";
import {Contents} from "@/types"
import {useEffect, useState} from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

async function getContentsData(): Promise<Contents[]> {
    const data = await getApi(url.getContents);
    const contenstData: Contents[] = data.contentsData.map((item: any) => ({
        name: item.name,
        message: item.message,
        post_dt: item.post_dt,
        goodMark: item.goodMark,
    }))
    console.log(contenstData)
    return contenstData;
}

const Contents = () => {
    const [apiContents, setApiContents] = useState<Contents[] | null>();
    useEffect(() => {
        const fetchData = async () => {
            const contentsData = await getContentsData();
            setApiContents(contentsData)
        }
        fetchData();
    }, []);


    if (!apiContents || apiContents.length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <div className="justify-center">
            {apiContents?.map((item, index) => (
                <div key={index}>
                    <Card className="max-w-[340px]">
                        <CardHeader className="justify-between">
                            <div className="flex gap-5">
                                <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png"/>
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-600">{item.name}</h4>
                                    <h5 className="text-small tracking-tight text-default-400">@{item.name}</h5>
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody className="px-3 py-0 text-small text-default-400">
                            <p>
                                {item.message}
                            </p>
                        </CardBody>
                        <CardFooter className="gap-3">
                            <div className="flex gap-1">
                                <p className="font-semibold text-default-400 text-small">{item.goodMark}</p>
                                <p className=" text-default-400 text-small">Good</p>
                            </div>
                            <div className="flex gap-1">
                                <p className="text-default-400 text-small">post data</p>
                                <p className="font-semibold text-default-400 text-small">{item.post_dt}</p>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </div>

    )
}
export default Contents;