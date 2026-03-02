'use client';

import { useState } from 'react';
import { Eye, Trash2 } from 'lucide-react';

const DUMMY_APPOINTMENTS = [
    { id: 1, name: 'Sara Al-Thani', department: 'Licensing', date: '2026-03-05', time: '10:00 AM', status: 'Pending' },
    { id: 2, name: 'Mohammed Ali', department: 'Events', date: '2026-03-05', time: '11:30 AM', status: 'Confirmed' },
    { id: 3, name: 'Fatima N.', department: 'General Inquiry', date: '2026-03-06', time: '09:00 AM', status: 'Pending' }
];

export default function AppointmentsManager() {
    const [appointments, setAppointments] = useState(DUMMY_APPOINTMENTS);

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center bg-[#F4EFF4] p-8 -mt-8 -mx-8 mb-8 border-b border-[#E7E0EC]">
                <div>
                    <h1 className="text-[28px] leading-9 font-normal text-[#1C1B1F]">Appointments</h1>
                    <p className="text-[#49454F] mt-1 text-sm tracking-wide">Manage public bookings and internal schedules.</p>
                </div>
            </div>

            <div className="bg-[#FFFBFE] rounded-[28px] shadow-sm border border-[#E7E0EC] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#F4EFF4] border-b border-[#E7E0EC]">
                                <th className="px-6 py-4 text-sm font-semibold text-[#1C1B1F]">Name</th>
                                <th className="px-6 py-4 text-sm font-semibold text-[#1C1B1F]">Department</th>
                                <th className="px-6 py-4 text-sm font-semibold text-[#1C1B1F]">Date/Time</th>
                                <th className="px-6 py-4 text-sm font-semibold text-[#1C1B1F]">Status</th>
                                <th className="px-6 py-4 text-sm font-semibold text-[#1C1B1F] text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E7E0EC]/60">
                            {appointments.map((appt) => (
                                <tr key={appt.id} className="hover:bg-[#F4EFF4]/30 transition-colors">
                                    <td className="px-6 py-5 text-sm font-medium text-[#1C1B1F]">{appt.name}</td>
                                    <td className="px-6 py-5 text-sm tracking-wide text-[#49454F]">{appt.department}</td>
                                    <td className="px-6 py-5 text-sm tracking-wide text-[#49454F]">{appt.date} at {appt.time}</td>
                                    <td className="px-6 py-5">
                                        <span className={`px-3 py-1 rounded-lg text-xs font-bold tracking-wide uppercase ${appt.status === 'Confirmed' ? 'bg-[#D7F9E9] text-[#005139]' : 'bg-[#FFD9E2] text-[#3E0015]'
                                            }`}>
                                            {appt.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-[#49454F] hover:text-[#8A1538] hover:bg-[#FFD9E2] rounded-full transition-colors">
                                                <Eye className="w-5 h-5" />
                                            </button>
                                            <button className="p-2 text-[#49454F] hover:text-red-700 hover:bg-red-50 rounded-full transition-colors">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
