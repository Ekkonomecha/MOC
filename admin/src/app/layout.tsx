import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Calendar, Newspaper } from 'lucide-react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin Portal | Ministry of Culture',
  description: 'Manage Events, Appointments, and Content for the Ministry of Culture, Qatar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-50 flex`}>
        {/* Sidebar Navigation - M3 Navigation Drawer */}
        <aside className="w-72 bg-[#FFFBFE] border-r border-[#E7E0EC] flex-shrink-0 flex flex-col pt-8 pb-4">
          <div className="px-8 pb-6">
            <h1 className="text-2xl font-bold text-[#1C1B1F]">MOC Admin</h1>
            <p className="text-sm text-[#49454F] mt-1 font-medium">Ministry of Culture</p>
          </div>
          <nav className="mt-4 flex flex-col gap-2 px-4 flex-1">
            <Link href="/" className="flex items-center px-4 py-4 rounded-full bg-[#FFD9E2] text-[#3E0015] font-semibold transition-colors">
              <span className="material-icons mr-4">Home</span>
            </Link>
            <Link href="/events" className="flex items-center px-4 py-4 rounded-full text-[#49454F] hover:bg-[#E7E0EC] transition-colors font-semibold">
              <Calendar className="w-6 h-6 mr-4" />
              <span>Events Manager</span>
            </Link>
            <Link href="/appointments" className="flex items-center px-4 py-4 rounded-full text-[#49454F] hover:bg-[#E7E0EC] transition-colors font-semibold">
              <span className="font-medium ml-10">Appointments</span>
            </Link>
            <Link href="/news" className="flex items-center px-4 py-4 rounded-full text-[#49454F] hover:bg-[#E7E0EC] transition-colors font-semibold">
              <Newspaper className="w-6 h-6 mr-4" />
              <span>News Content</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-[#F4EFF4]">
          {/* M3 Top App Bar */}
          <header className="h-20 bg-[#F4EFF4] flex items-center justify-between px-8">
            <h2 className="text-2xl font-normal text-[#1C1B1F]">Overview</h2>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F2D8B3] text-[#2D1F0D] flex items-center justify-center font-bold text-lg shadow-sm">
                A
              </div>
            </div>
          </header>
          {/* Main Workspace */}
          <main className="p-8 flex-1 overflow-auto rounded-tl-[2rem] bg-[#FFFBFE] shadow-[inset_0_4px_6px_-1px_rgba(0,0,0,0.05)] border-t border-l border-[#E7E0EC]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
