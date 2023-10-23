import React from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination} from '@nextui-org/react';

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
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 3;
    const pages = Math.ceil(users.length / rowsPerPage);
    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return users.slice(start, end);
    }, [page, users]);

    return (
        <Table aria-label="Example table with client side pagination"
               bottomContent={
                   <div className="flex w-full justify-center">
                       <Pagination
                           isCompact
                           showControls
                           showShadow
                           color="secondary"
                           page={page}
                           total={pages}
                           onChange={(page) => setPage(page)}
                       />
                   </div>
               }>
            <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>ROLE</TableColumn>
                <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody emptyContent={emptyMessage}>
                {items.map(user => (
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
