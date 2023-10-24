import { User, Tooltip, Chip } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "@/components/DeleteIcon";
import { EditIcon } from "@/components/EditIcon";
import { EyeIcon } from "@/components/EyeIcon";

interface UserProps {
    id: number;
    name: string;
    role: string;
    team: string;
    status: string;
    age: string;
    avatar: string;
    email: string;
}

interface RenderCellProps {
    user: UserProps;
    columnKey: string | React.Key;
}
export const RenderCell = ({ user, columnKey }: RenderCellProps) => {
    // @ts-ignore
    const cellValue = user[columnKey];
    switch (columnKey) {
        case "name":
            return (
                <User
                    avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                    name={cellValue}
                >
                    {user.email}
                </User>
            );
        case "role":
            return (
                <div>
                    <div>
                        <span>{cellValue}</span>
                    </div>
                    <div>
                        <span>{user.team}</span>
                    </div>
                </div>
            );
        case "status":
            return (
                <Chip
                    size="sm"
                    variant="flat"
                    color={
                        cellValue === "active"
                            ? "success"
                            : cellValue === "paused"
                                ? "danger"
                                : "warning"
                    }
                >
                    <span className="capitalize text-xs">{cellValue}</span>
                </Chip>
            );

        case "actions":
            return (
                <div className="flex items-center gap-4 ">
                    <div>
                        <Tooltip content="Details">
                            <button onClick={() => console.log("View user", user.id)}>
                                <EyeIcon size={20} fill="#979797" />
                            </button>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip content="Edit user" color="secondary">
                            <button onClick={() => console.log("Edit user", user.id)}>
                                <EditIcon size={20} fill="#979797" />
                            </button>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip
                            content="Delete user"
                            color="danger"
                            onClick={() => console.log("Delete user", user.id)}
                        >
                            <button>
                                <DeleteIcon size={20} fill="#FF0080" />
                            </button>
                        </Tooltip>
                    </div>
                </div>
            );
        default:
            return cellValue;
    }
};