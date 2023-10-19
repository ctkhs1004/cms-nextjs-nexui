import {UserData} from "@/types"

interface AvatarProps {
    currentUser: UserData;
    children?: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> = ({currentUser}) => {
    return (
        <div>
        </div>
    )
}

export default Avatar;