'use client';

import { useState } from 'react';
import { Plus, Edit2, Trash2, X, Calendar } from 'lucide-react';

const DUMMY_EVENTS = [
    { id: 1, title: 'Doha International Book Fair', date: '2026-05-10', status: 'Published', registrations: 1240 },
    { id: 2, title: 'Traditional Pearl Diving Exhibition', date: '2026-06-05', status: 'Draft', registrations: 0 },
    { id: 3, title: 'Arabic Calligraphy Workshop', date: '2026-08-12', status: 'Published', registrations: 45 },
];

export default function EventsManager() {
    const [events, setEvents] = useState(DUMMY_EVENTS);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({ title: '', date: '', status: 'Draft' });

    const handleCreateEvent = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newEvent.title || !newEvent.date) return;

        const eventToAdd = {
            id: events.length + 1,
            title: newEvent.title,
            date: newEvent.date,
            status: newEvent.status,
            registrations: 0
        };

        setEvents([eventToAdd, ...events]);
        setIsModalOpen(false);
        setNewEvent({ title: '', date: '', status: 'Draft' });
    };

    const handleDelete = (id: number) => {
        setEvents(events.filter(e => e.id !== id));
    };

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center bg-[#F4EFF4] p-8 -mt-8 -mx-8 mb-8 border-b border-[#E7E0EC]">
                <div>
                    <h1 className="text-[28px] leading-9 font-normal text-[#1C1B1F]">Event Management</h1>
                    <p className="text-[#49454F] mt-1 text-sm tracking-wide">Create, update, and monitor Ministry events.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#8A1538] text-white px-6 py-4 rounded-2xl flex items-center gap-2 transition-all hover:bg-[#6c102a] hover:shadow-md font-medium tracking-wide"
                >
                    <Plus className="w-5 h-5" />
                    Create Event
                </button>
            </div>

            <div className="bg-[#FFFBFE] rounded-[28px] shadow-sm border border-[#E7E0EC] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#F4EFF4] border-b border-[#E7E0EC]">
                                <th className="px-6 py-4 text-sm font-semibold text-[#1C1B1F]">Event Name</th>
                                <th className="px-6 py-4 text-sm font-semibold text-[#1C1B1F]">Date</th>
                                <th className="px-6 py-4 text-sm font-semibold text-[#1C1B1F]">Status</th>
                                <th className="px-6 py-4 text-sm font-semibold text-[#1C1B1F]">Registrations</th>
                                <th className="px-6 py-4 text-sm font-semibold text-[#1C1B1F] text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E7E0EC]/60">
                            {events.map((event) => (
                                <tr key={event.id} className="hover:bg-[#F4EFF4]/30 transition-colors">
                                    <td className="px-6 py-5 text-sm font-medium text-[#1C1B1F]">{event.title}</td>
                                    <td className="px-6 py-5 text-sm tracking-wide text-[#49454F]">{event.date}</td>
                                    <td className="px-6 py-5">
                                        <span className={`px-3 py-1 rounded-lg text-xs font-bold tracking-wide uppercase ${event.status === 'Published' ? 'bg-[#D7F9E9] text-[#005139]' : 'bg-[#E7E0EC] text-[#49454F]'
                                            }`}>
                                            {event.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-[#49454F]">{event.registrations}</td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-[#49454F] hover:text-[#8A1538] hover:bg-[#FFD9E2] rounded-full transition-colors">
                                                <Edit2 className="w-5 h-5" />
                                            </button>
                                            <button onClick={() => handleDelete(event.id)} className="p-2 text-[#49454F] hover:text-red-700 hover:bg-red-50 rounded-full transition-colors">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {events.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="p-12 text-center text-[#49454F] text-sm">No events found. Create one!</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* M3 Modal Dialog */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-[#FFFBFE] rounded-[28px] shadow-xl max-w-sm w-full overflow-hidden">
                        <div className="px-6 pt-6 pb-4">
                            <div className="flex justify-center mb-4 text-[#8A1538]">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-normal text-center text-[#1C1B1F]">Create New Event</h2>
                        </div>
                        <form onSubmit={handleCreateEvent} className="p-6 pt-0 space-y-6">
                            <div>
                                <input
                                    type="text"
                                    value={newEvent.title}
                                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                                    className="w-full px-4 py-4 bg-[#F4EFF4] border-b-2 border-[#49454F] rounded-t-[4px] focus:outline-none focus:border-[#8A1538] text-[#1C1B1F] placeholder-[#49454F]"
                                    placeholder="Event Title"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="date"
                                    value={newEvent.date}
                                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                                    className="w-full px-4 py-4 bg-[#F4EFF4] border-b-2 border-[#49454F] rounded-t-[4px] focus:outline-none focus:border-[#8A1538] text-[#1C1B1F] placeholder-[#49454F]"
                                    required
                                />
                            </div>
                            <div>
                                <select
                                    value={newEvent.status}
                                    onChange={(e) => setNewEvent({ ...newEvent, status: e.target.value })}
                                    className="w-full px-4 py-4 bg-[#F4EFF4] border-b-2 border-[#49454F] rounded-t-[4px] focus:outline-none focus:border-[#8A1538] text-[#1C1B1F]"
                                >
                                    <option value="Draft">Draft</option>
                                    <option value="Published">Published</option>
                                </select>
                            </div>
                            <div className="pt-6 flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-6 py-2.5 text-[#8A1538] hover:bg-[#FFD9E2]/50 rounded-full transition-colors font-medium text-sm tracking-wide"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 bg-[#8A1538] hover:bg-[#6c102a] text-white rounded-full transition-colors font-medium text-sm tracking-wide"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
