'use client';

import { useState } from 'react';
import { Plus, Edit2, Trash2, Eye, X } from 'lucide-react';

const DUMMY_NEWS = [
    { id: 1, title: 'Ministry Announces New Digital Decoupling Strategy', date: '2026-03-02', author: 'IT Dept', views: 450 },
    { id: 2, title: 'Upcoming Doha Book Fair Details Revealed', date: '2026-02-28', author: 'PR Dept', views: 1200 },
];

export default function NewsManager() {
    const [news, setNews] = useState(DUMMY_NEWS);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newArticle, setNewArticle] = useState({ title: '', author: '' });

    const handleCreateArticle = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newArticle.title || !newArticle.author) return;

        // Add item to front
        const articleToAdd = {
            id: news.length + 1,
            title: newArticle.title,
            date: new Date().toISOString().split('T')[0], // Today's date
            author: newArticle.author,
            views: 0
        };

        setNews([articleToAdd, ...news]);
        setIsModalOpen(false);
        setNewArticle({ title: '', author: '' });
    };

    const handleDelete = (id: number) => {
        setNews(news.filter(n => n.id !== id));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold font-moc-primary text-gray-900">Content Manager</h1>
                    <p className="text-gray-500 mt-1">Publish news, announcements, and press releases.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-moc-gold hover:bg-[#b0966a] text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors font-medium"
                >
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
                            <button onClick={() => handleDelete(item.id)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
                {news.length === 0 && (
                    <div className="bg-white p-8 rounded-xl text-center text-gray-500 border border-gray-100">
                        No articles found. Create your first news post!
                    </div>
                )}
            </div>

            {/* Modal overlays */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-lg max-w-md w-full overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-900">Draft New Article</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <form onSubmit={handleCreateArticle} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Headline</label>
                                <input
                                    type="text"
                                    value={newArticle.title}
                                    onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-moc-gold/50 focus:border-moc-gold"
                                    placeholder="e.g. New Initiative Launched"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Author / Department</label>
                                <input
                                    type="text"
                                    value={newArticle.author}
                                    onChange={(e) => setNewArticle({ ...newArticle, author: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-moc-gold/50 focus:border-moc-gold"
                                    placeholder="e.g. Press Office"
                                    required
                                />
                            </div>
                            <div className="pt-4 flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-moc-gold hover:bg-[#b0966a] text-gray-900 rounded-lg transition-colors font-medium"
                                >
                                    Publish Article
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
