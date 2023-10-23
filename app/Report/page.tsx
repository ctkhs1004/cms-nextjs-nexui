'use client';
import React, {
	useEffect,
	useState
} from "react";
import dynamic from "next/dynamic";
import UserTable from "@/components/Table/table";
import {Loading} from "@/components/Loading";
import {getApi} from "@/utils/httpRequest";
import url from "@/app/api/url";

const Chart = dynamic(() => import('@/components/Charts').then((mod) => mod.Steam), {
	ssr: false,
});

export default function ReportPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<any>(null);
	const [chartData, setChartData] = useState<any>(null);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userResult: any = await getApi(url.getUserList);
				setData(userResult.data.userList);
				const tagsResult: any = await getApi(url.getChartsData);
				setChartData(tagsResult.data.tags);
				console.log('chartResult', tagsResult.data);
			} catch (error) {
				console.error('An error occurred while fetching the data.', error);
				if (error instanceof Error) {
					setError(error);
				} else {
					setError(new Error(String(error)));
				}
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<Loading />
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center h-screen">
				<p>Error: {error.message}</p>
			</div>
		);
	}

	return (
		<div>
			<div>
				<Chart tagsData={chartData}/>
			</div>
			<div className="max-w-xl mx-auto">
				<UserTable list={data} />
			</div>
		</div>
	);
}
