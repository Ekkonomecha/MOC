'use client';

import { useState } from 'react';
import { Activity, Users, CalendarCheck, CalendarRange, Plus, X } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const [selectedInquiry, setSelectedInquiry] = useState<{ user: string, query: string, status: string } | null>(null);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[28px] leading-9 font-normal text-[#1C1B1F]">Dashboard</h1>
          <p className="text-[#49454F] mt-1 text-sm tracking-wide">Welcome back to the Ministry Control Center.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/events" className="bg-[#FFD9E2] text-[#3E0015] px-6 py-3.5 rounded-2xl flex items-center gap-2 transition-all hover:bg-[#ffb4c8] hover:shadow-md font-medium tracking-wide">
            <Plus className="w-5 h-5" />
            New Event
          </Link>
          <button
            onClick={() => alert("Report successfully generated.")}
            className="bg-[#F4EFF4] text-[#8A1538] px-6 py-3.5 rounded-full font-medium transition-all hover:bg-[#E7E0EC] hover:shadow-sm"
          >
            Export Logs
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Registered Users" value="14,235" trend="+12% vs last month" icon={<Users className="w-6 h-6 text-[#8A1538]" />} bg="bg-[#FFFBFE]" />
        <DashboardCard title="Active Events" value="8" trend="3 ending this week" icon={<CalendarRange className="w-6 h-6 text-[#2D1F0D]" />} bg="bg-[#F2D8B3]" />
        <DashboardCard title="Pending Appointments" value="142" trend="Requires action" icon={<CalendarCheck className="w-6 h-6 text-[#3E0015]" />} bg="bg-[#FFD9E2]" />
        <DashboardCard title="System Health" value="99.9%" trend="All systems nominal" icon={<Activity className="w-6 h-6 text-green-700" />} bg="bg-green-50" />
      </div>

      <div className="bg-[#FFFBFE] rounded-[28px] shadow-sm border border-[#E7E0EC] p-8 mt-8">
        <h2 className="text-xl font-medium text-[#1C1B1F] mb-6">Recent AI Context Analytics</h2>
        <div className="space-y-0 divide-y divide-[#E7E0EC]">
          <InquiryRow user="Ahmed M." query="When does the book fair open?" status="Resolved" onClick={() => setSelectedInquiry({ user: "Ahmed M.", query: "When does the book fair open?", status: "Resolved" })} />
          <InquiryRow user="Sarah K." query="How to book an appointment with the licensing dept?" status="Escalated" onClick={() => setSelectedInquiry({ user: "Sarah K.", query: "How to book an appointment with the licensing dept?", status: "Escalated" })} />
          <InquiryRow user="Majed A." query="Cancel my Friday event ticket." status="Resolved" onClick={() => setSelectedInquiry({ user: "Majed A.", query: "Cancel my Friday event ticket.", status: "Resolved" })} />
        </div>
      </div>

      {/* M3 Modal Dialog */}
      {selectedInquiry && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#FFFBFE] rounded-[28px] shadow-xl max-w-sm w-full overflow-hidden">
            <div className="px-6 py-4 border-b border-[#E7E0EC] flex justify-between items-center">
              <h2 className="text-xl font-medium text-[#1C1B1F]">Inquiry Details</h2>
              <button onClick={() => setSelectedInquiry(null)} className="text-[#49454F] hover:bg-[#E7E0EC] p-2 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-xs font-bold text-[#49454F] tracking-wide uppercase mb-1">User</label>
                <p className="text-[#1C1B1F] font-medium">{selectedInquiry.user}</p>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#49454F] tracking-wide uppercase mb-1">Status</label>
                <span className={`px-3 py-1 rounded-lg text-xs font-bold tracking-wide uppercase inline-block ${selectedInquiry.status === 'Resolved' ? 'bg-[#D7F9E9] text-[#005139]' : 'bg-[#FFD9E2] text-[#3E0015]'
                  }`}>
                  {selectedInquiry.status}
                </span>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#49454F] tracking-wide uppercase mb-1">Original Query</label>
                <p className="text-[#1C1B1F] bg-[#F4EFF4] p-4 rounded-xl leading-relaxed">"{selectedInquiry.query}"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DashboardCard({ title, value, trend, icon, bg }: { title: string, value: string, trend: string, icon: React.ReactNode, bg: string }) {
  return (
    <div className={`${bg} p-6 rounded-[24px] shadow-sm border border-[#E7E0EC]/50 flex flex-col justify-between min-h-[160px] transition-all duration-300 hover:shadow-md hover:-translate-y-1`}>
      <div className="flex justify-between items-start">
        <p className="text-[#49454F] text-sm font-medium tracking-wide">{title}</p>
        <div className="p-3 bg-white/40 rounded-full h-12 w-12 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-[32px] leading-tight font-normal text-[#1C1B1F] mt-4">{value}</h3>
        <p className="text-xs text-[#49454F] mt-1 font-medium tracking-wide">{trend}</p>
      </div>
    </div>
  );
}

function InquiryRow({ user, query, status, onClick }: { user: string, query: string, status: string, onClick: () => void }) {
  const isResolved = status === 'Resolved';
  const statusBg = isResolved ? 'bg-[#D7F9E9]' : 'bg-[#FFD9E2]';
  const statusText = isResolved ? 'text-[#005139]' : 'text-[#3E0015]';

  return (
    <div onClick={onClick} className="flex justify-between items-center py-5 transition-colors hover:bg-[#F4EFF4] active:bg-[#E7E0EC] hover:px-4 rounded-xl -mx-4 px-4 cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#E7E0EC] flex items-center justify-center text-[#49454F] font-bold">
          {user.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1C1B1F]">{user}</p>
          <p className="text-sm text-[#49454F] mt-0.5 max-w-sm truncate">"{query}"</p>
        </div>
      </div>
      <span className={`px-3 py-1 rounded-lg text-xs font-bold tracking-wide uppercase ${statusBg} ${statusText}`}>
        {status}
      </span>
    </div>
  );
}
