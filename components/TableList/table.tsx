import React from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination} from '@nextui-org/react';

interface User {
    id: number;
    name: string;
    role: string;
    status: string;
}

interface UserTableProps {
    list?: User[];
    ariaLabel?: string;
    emptyMessage?: string;
}

const UserTable: React.FC<UserTableProps> = ({ list = [], ariaLabel = "User table", emptyMessage = "No rows to display." }) => {
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 5;
    const pages = Math.ceil(list.length / rowsPerPage);
    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return list.slice(start, end);
    }, [page, list]);

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
