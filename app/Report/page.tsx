'use client';
import React, {
	useEffect,
	useState
} from "react";
import dynamic from "next/dynamic";
import {Loading} from "@/components/Loading";
import {getApi} from "@/utils/httpRequest";
import url from "@/app/api/url";
import {TableWrapper} from "@/components/Table";
import Link from "next/link";

const Chart = dynamic(() => import('@/components/Charts').then((mod) => mod.Steam), {
	ssr: false,
});

export default function ReportPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<any>(null);
	const [chartData, setChartData] = useState<any>(null);
	const [error, setError] = useState<Error | null>(null);
	const columnsData = [
		{ uid: 'name', name: 'Name' },
		{ uid: 'role', name: 'Role' },
		{ uid: 'team', name: 'Team' },
		{ uid: 'status', name: 'Status' },
		{ uid: 'age', name: 'Age' },
		{ uid: 'email', name: 'Email' },
		{ uid: 'actions', name: 'Actions' },
	];

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
			<h1 className="flex justify-center items-center">Report</h1>
			<div>
				<Chart tagsData={chartData}/>
			</div>
			<div>
				<h2 className="flex justify-center items-center">Latest Users</h2>
			</div>
			<div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0  max-w-[60rem] mx-auto gap-3">
				<TableWrapper users={data} columns={columnsData} />
			</div>
		</div>
	);
}
