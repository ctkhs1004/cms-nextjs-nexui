'use client'
import {title} from '@/components/primitives';
import React, {useEffect, useState} from 'react';
import {Loading} from "@/components/Loading";
import {UserData} from "@/types";
import {getApi} from "@/utils/httpRequest";
import url from "@/app/api/url";
import ErrorComponent from '@/app/error';
import {useRouter} from 'next/navigation';

export default function InterfacePage() {
    const [data, setData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: any = await getApi(url.getUserInfo);
                setData(result);
                // 在Nextjs当中404会被抓捕，跳转pages/error
            } catch (error) {
                // 如果是api 404等错误的话我们可以通过try catch来选择是弹出弹窗还是跳转到error页面
                console.error('An error occurred while fetching the data.', error);
                if (error instanceof Error) {
                    setError(error);
                } else {
                    setError(new Error(String(error)));
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []); // 空依赖数组表示这个 useEffect 将只在组件挂载时运行

    if (loading) {
        return <Loading/>;
    }
    if (error) {
        return <ErrorComponent error={error} reset={() => setError(null)}/>;
    }

    return (
        <div>
            <div>
                <h1 className={title()}>UserInfo</h1>
            </div>
            <div>
            </div>
            {/* 您可以在此处添加其他用于展示用户数据的组件或HTML */}
        </div>
    );
}
