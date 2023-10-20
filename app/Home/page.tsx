import EmptyState from "@/components/Sidebar/EmptyState";
import Contents from "../Contents/Contents";


export default function HomePage() {
    return (
        <div>
            <div className="h-screen flex justify-center items-center">
                <Contents />
            </div>
        </div>
    );
}
