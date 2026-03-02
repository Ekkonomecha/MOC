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
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-primary text-white flex-shrink-0">
          <div className="p-6">
            <h1 className="text-xl font-bold">MOC Admin.</h1>
            <p className="text-sm text-secondary mt-1 opacity-80">Ministry of Culture</p>
          </div>
          <nav className="mt-6">
            <Link href="/" className="flex items-center px-6 py-3 bg-primary-hover border-r-4 border-secondary">
              <span className="font-medium">Dashboard</span>
            </Link>
            {/* Updated Events Link */}
            <Link href="/events" className="flex items-center px-6 py-3 hover:bg-primary-hover transition-colors opacity-80">
              <Calendar className="w-5 h-5 mr-3" />
              <span className="font-medium">Events</span>
            </Link>
            {/* Updated Appointments Link */}
            <Link href="/appointments" className="flex items-center px-6 py-3 hover:bg-primary-hover transition-colors opacity-80">
              <span className="font-medium">Appointments</span>
            </Link>
            {/* Updated Content Manager Link */}
            <Link href="/news" className="flex items-center px-6 py-3 hover:bg-primary-hover transition-colors opacity-80">
              <Newspaper className="w-5 h-5 mr-3" />
              <span className="font-medium">Content Manager</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          <header className="h-16 bg-white border-b flex items-center justify-between px-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800">Welcome, Administrator</h2>
            <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center font-bold">A</div>
          </header>
          <main className="p-8 flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
