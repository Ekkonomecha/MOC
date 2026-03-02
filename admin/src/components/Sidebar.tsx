'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Calendar, CalendarCheck, Newspaper } from 'lucide-react';

export default function Sidebar() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Dashboard', href: '/', icon: LayoutDashboard },
        { name: 'Events Manager', href: '/events', icon: Calendar },
        { name: 'Appointments', href: '/appointments', icon: CalendarCheck },
        { name: 'News Content', href: '/news', icon: Newspaper },
    ];

    return (
        <aside className="w-72 bg-[#FFFBFE] border-r border-[#E7E0EC] flex-shrink-0 flex flex-col pt-8 pb-4">
            <div className="px-8 pb-6">
                <h1 className="text-2xl font-bold text-[#1C1B1F]">MOC Admin</h1>
                <p className="text-sm text-[#49454F] mt-1 font-medium">Ministry of Culture</p>
            </div>
            <nav className="mt-4 flex flex-col gap-2 px-4 flex-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center px-4 py-4 rounded-full font-semibold transition-colors ${isActive
                                    ? 'bg-[#FFD9E2] text-[#3E0015]'
                                    : 'text-[#49454F] hover:bg-[#E7E0EC]'
                                }`}
                        >
                            <Icon className={`w-6 h-6 mr-4 ${isActive ? 'text-[#8A1538]' : 'text-[#49454F]'}`} />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
