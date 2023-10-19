'use client';
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import dynamic from "next/dynamic";

const Chart = dynamic(
	() => import('@/components/Charts').then((mod) => mod.Steam),
	{
		ssr: false,
	}
);

export default function TablePage() {
	return (
		<div>
			<div>
				<Chart/>
			</div>

		</div>
	);
}
