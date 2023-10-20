"use client"
import {getApi} from "@/utils/httpRequest";
import url from "../api/url";
import {Contents} from "@/types"
import {useEffect, useState} from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import {Loading} from "@/components/Loading/index"
async function getContentsData(): Promise<Contents[]> {
    const data = await getApi(url.getContents);
    const contentsData: Contents[] = data.contents.map((item: any) => ({
        name: item.name,
        message: item.message,
        post_dt: item.post_dt,
        goodMark: item.goodMark,
        img: item.img,
    }))
    console.log(contentsData)
    return contentsData;
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
        return <Loading/>;
    }
    return (
        <div className="justify-center">
            {apiContents?.map((item, index) => (
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
export default Contents;