import '@/styles/globals.css';
import Sidebar from "@/components/Sidebar/Sidebar"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full p-0">
            <Sidebar>
            <div className="h-full">
                {children}
            </div>
            </Sidebar>
        </div>
            
    );
}
