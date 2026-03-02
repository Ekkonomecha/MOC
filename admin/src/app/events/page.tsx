import { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

const DUMMY_EVENTS = [
    { id: 1, title: 'Doha International Book Fair', date: '2026-05-10', status: 'Published', registrations: 1240 },
    { id: 2, title: 'Traditional Pearl Diving Exhibition', date: '2026-06-05', status: 'Draft', registrations: 0 },
    { id: 3, title: 'Arabic Calligraphy Workshop', date: '2026-08-12', status: 'Published', registrations: 45 },
];

export default function EventsManager() {
    const [events, setEvents] = useState(DUMMY_EVENTS);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold font-moc-primary text-gray-900">Event Management</h1>
                    <p className="text-gray-500 mt-1">Create, update, and monitor Ministry events.</p>
                </div>
                <button className="bg-moc-maroon hover:bg-[#6c102a] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                    <Plus className="w-4 h-4" />
                    Create Event
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="p-4 font-semibold text-gray-600">Event Name</th>
                                <th className="p-4 font-semibold text-gray-600">Date</th>
                                <th className="p-4 font-semibold text-gray-600">Status</th>
                                <th className="p-4 font-semibold text-gray-600">Registrations</th>
                                <th className="p-4 font-semibold text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {events.map((event) => (
                                <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-medium text-gray-900">{event.title}</td>
                                    <td className="p-4 text-gray-600">{event.date}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${event.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                            }`}>
                                            {event.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-600">{event.registrations}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <button className="text-gray-400 hover:text-moc-gold transition-colors">
                                                <Edit2 className="w-4 h-4" />
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
