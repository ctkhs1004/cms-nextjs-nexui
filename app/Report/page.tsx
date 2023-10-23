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
		setIsLoaded(true);
	}, []);

	const sampleUsers = [
		{ id: 1, name: 'test1', role: 'Developer', status: 'Active' },
		{ id: 2, name: 'test2', role: 'Manager', status: 'Vacation' },
		{ id: 3, name: 'test3', role: 'Manager', status: 'Vacation' },
		{ id: 4, name: 'test4', role: 'Manager', status: 'Vacation' },
		{ id: 5, name: 'test5', role: 'Manager', status: 'Vacation' },
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
			<div className="max-w-xl mx-auto">
				<UserTable users={sampleUsers} />
			</div>
		</div>
	);
}
