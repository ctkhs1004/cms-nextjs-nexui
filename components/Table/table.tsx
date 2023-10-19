
import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';

interface User {
    id: number;
    name: string;
    role: string;
    status: string;
}

interface UserTableProps {
    users?: User[];
    ariaLabel?: string;
    emptyMessage?: string;
}

const UserTable: React.FC<UserTableProps> = ({ users = [], ariaLabel = "User table", emptyMessage = "No rows to display." }) => {
    return (
        <Table aria-label={ariaLabel}>
            <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>ROLE</TableColumn>
                <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody emptyContent={emptyMessage}>
                {users.map(user => (
                    <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default UserTable;
