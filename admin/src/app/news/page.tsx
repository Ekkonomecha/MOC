'use client';

import { useState } from 'react';
import { Plus, Edit2, Trash2, Eye } from 'lucide-react';

const DUMMY_NEWS = [
    { id: 1, title: 'Ministry Announces New Digital Decoupling Strategy', date: '2026-03-02', author: 'IT Dept', views: 450 },
    { id: 2, title: 'Upcoming Doha Book Fair Details Revealed', date: '2026-02-28', author: 'PR Dept', views: 1200 },
];

export default function NewsManager() {
    const [news, setNews] = useState(DUMMY_NEWS);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold font-moc-primary text-gray-900">Content Manager</h1>
                    <p className="text-gray-500 mt-1">Publish news, announcements, and press releases.</p>
                </div>
                <button className="bg-moc-gold hover:bg-[#b0966a] text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors font-medium">
                    <Plus className="w-4 h-4" />
                    New Article
                </button>
            </div>

            <div className="grid gap-4">
                {news.map((item) => (
                    <div key={item.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-moc-gold/30 transition-colors">
                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span>Published: {item.date}</span>
                                <span>•</span>
                                <span>Author: {item.author}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {item.views}</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 text-gray-400 hover:text-moc-maroon hover:bg-gray-50 rounded-lg transition-colors">
                                <Edit2 className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
