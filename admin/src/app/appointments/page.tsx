'use client';

import { useState } from 'react';
import { CalendarCheck, Eye, Trash2 } from 'lucide-react';

const DUMMY_APPOINTMENTS = [
    { id: 1, name: 'Sara Al-Thani', department: 'Licensing', date: '2026-03-05', time: '10:00 AM', status: 'Pending' },
    { id: 2, name: 'Mohammed Ali', department: 'Events', date: '2026-03-05', time: '11:30 AM', status: 'Confirmed' },
    { id: 3, name: 'Fatima N.', department: 'General Inquiry', date: '2026-03-06', time: '09:00 AM', status: 'Pending' }
];

export default function AppointmentsManager() {
    const [appointments, setAppointments] = useState(DUMMY_APPOINTMENTS);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold font-moc-primary text-gray-900">Appointments</h1>
                    <p className="text-gray-500 mt-1">Manage public bookings and internal schedules.</p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="p-4 font-semibold text-gray-600">Name</th>
                                <th className="p-4 font-semibold text-gray-600">Department</th>
                                <th className="p-4 font-semibold text-gray-600">Date/Time</th>
                                <th className="p-4 font-semibold text-gray-600">Status</th>
                                <th className="p-4 font-semibold text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {appointments.map((appt) => (
                                <tr key={appt.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-medium text-gray-900">{appt.name}</td>
                                    <td className="p-4 text-gray-600">{appt.department}</td>
                                    <td className="p-4 text-gray-600">{appt.date} at {appt.time}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${appt.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                                            }`}>
                                            {appt.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <button className="text-gray-400 hover:text-moc-gold transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="text-gray-400 hover:text-red-500 transition-colors">
                                                <Trash2 className="w-4 h-4" />
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
