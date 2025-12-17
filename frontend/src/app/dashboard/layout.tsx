import { Sidebar } from "@/components/layout/Sidebar";
import { CommandPalette } from "@/components/ui/command-palette";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background text-foreground overflow-hidden">

            <CommandPalette />

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col relative overflow-y-auto h-screen">
                {/* Top Header Placeholder (can be extracted to Header.tsx) */}
                <header className="h-20 flex items-center justify-between px-8 border-b border-white/5 bg-background/50 backdrop-blur-md sticky top-0 z-30">
                    <h1 className="text-xl font-semibold text-white">Dashboard Overview</h1>
                    <div className="flex items-center space-x-4">
                        <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                            <span className="sr-only">Notifications</span>
                            🔔
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
