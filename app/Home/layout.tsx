import '@/styles/globals.css';
import Sidebar from "@/components/Sidebar/Sidebar"
export default function HomeLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <Sidebar>
            <div>
                <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                    <div className="inline-block max-w-lg text-center justify-center">
                        {children}
                    </div>
                </section>
            </div>
        </Sidebar>

    );
}
