import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
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
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-[#F4EFF4]">
          {/* M3 Top App Bar */}
          <header className="h-20 bg-[#F4EFF4] flex items-center justify-between px-8">
            <h2 className="text-xl font-medium text-[#1C1B1F] tracking-tight">Ministry Control Center</h2>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F2D8B3] text-[#2D1F0D] flex items-center justify-center font-bold text-lg shadow-sm border border-[#e4c294]/50">
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
