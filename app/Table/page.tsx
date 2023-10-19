'use client';
import React from "react";
import dynamic from "next/dynamic";
import UserTable from "@/components/Table/table";

const Chart = dynamic(
	() => import('@/components/Charts').then((mod) => mod.Steam),
	{
		ssr: false,
	}
);

export default function TablePage() {
	const sampleUsers = [
		{ id: 1, name: 'Alice', role: 'Developer', status: 'Active' },
		{ id: 2, name: 'Bob', role: 'Manager', status: 'Vacation' },
		// ... more users
	];

	return (
		<div>
			<div>
				<Chart/>
			</div>
			<div></div>
			<UserTable users={sampleUsers} />
		</div>
	);
}
