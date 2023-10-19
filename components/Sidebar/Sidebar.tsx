import getCurrentUser from "@/utils/getCurrentUser";

async function Sidebar({children}: {
    children: React.ReactNode
}) {
    const currentUser = await getCurrentUser();

    return (
        <div className="h-full">
            <main className="lg:pl-20 h-full">
                <h1>Side Bar</h1>
                {children}
            </main>
        </div>
    )
}

export default Sidebar;