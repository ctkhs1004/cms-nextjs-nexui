'use client'
import { title } from '@/components/primitives';
import React, {useEffect, useState} from 'react';
import {Loading} from "@/components/Loading";
import {UserData} from "@/types";
import {getApi} from "@/utils/api";
import url from "@/app/api/url";
export default function InterfacePage() {
	const [data, setData] = useState<UserData | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const result :any = await getApi(url.getUserInfo);
				setData(result);
			} catch (error) {
				console.error('An error occurred while fetching the data.', error);
			}
		};
		fetchData();
	}, []); // 空依赖数组表示这个 useEffect 将只在组件挂载时运行
	return (
		<div>
			<div>
				<h1 className={title()}>UerInfo</h1>
			</div>

			<Loading/>
		</div>
	);
}