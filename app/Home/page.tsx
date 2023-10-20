import EmptyState from "@/components/Sidebar/EmptyState";
import Contents from "../Contents/Contents";
import NavBar from "@/components/NavBar/NavBar";


export default function HomePage() {
    return (
            <div className="flex justify-center items-center py-7">
                <Contents/>
            </div>
    );
}
