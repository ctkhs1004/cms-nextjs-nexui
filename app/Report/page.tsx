'use client';
import React, {
	useEffect,
	useState
} from "react";
import dynamic from "next/dynamic";
import UserTable from "@/components/Table/table";
import {Loading} from "@/components/Loading";

const Chart = dynamic(() => import('@/components/Charts').then((mod) => mod.Steam), {
	ssr: false,
});

export default function ReportPage() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// 将内容设置为已加载，当组件被渲染后
		setIsLoaded(true);
	}, []);

	const sampleUsers = [
		{ id: 1, name: 'Alice', role: 'Developer', status: 'Active' },
		{ id: 2, name: 'Bob', role: 'Manager', status: 'Vacation' },
		// ... more users
	];

	if (!isLoaded) {
		return (
			<div className="flex justify-center items-center h-screen">
				<Loading />
			</div>
		);
	}

	return (
		<div>
			<div>
				<Chart />
			</div>
			<div>
				<UserTable users={sampleUsers} />
			</div>
		</div>
	);
}
