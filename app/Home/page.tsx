import HeaderSignOut from "@/components/Header/HeaderSignOut";

export default function HomePage() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className='relative flex flex-col h-screen'>
                <main className='container mx-auto max-w-7xl  px-6 flex-grow'>
                    <HeaderSignOut />
                </main>
            </div>
        </section>
    );
}
