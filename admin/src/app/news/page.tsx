'use client';

import { useState } from 'react';
import { Plus, Edit2, Trash2, Eye, X, Newspaper } from 'lucide-react';

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

        const articleToAdd = {
            id: news.length + 1,
            title: newArticle.title,
            date: new Date().toISOString().split('T')[0],
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
        <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center bg-[#F4EFF4] p-8 -mt-8 -mx-8 mb-8 border-b border-[#E7E0EC]">
                <div>
                    <h1 className="text-[28px] leading-9 font-normal text-[#1C1B1F]">Content Manager</h1>
                    <p className="text-[#49454F] mt-1 text-sm tracking-wide">Publish news, announcements, and press releases.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#F2D8B3] text-[#2D1F0D] px-6 py-4 rounded-2xl flex items-center gap-2 transition-all hover:bg-[#e4c294] hover:shadow-md font-medium tracking-wide"
                >
                    <Plus className="w-5 h-5" />
                    New Article
                </button>
            </div>

            <div className="grid gap-4">
                {news.map((item) => (
                    <div key={item.id} className="bg-[#FFFBFE] p-6 rounded-[24px] shadow-sm border border-[#E7E0EC]/50 flex items-center justify-between hover:shadow-md hover:-translate-y-0.5 transition-all">
                        <div className="flex flex-col gap-2 relative">
                            <h3 className="text-xl font-medium text-[#1C1B1F] leading-tight">{item.title}</h3>
                            <div className="flex items-center gap-4 text-sm font-medium text-[#49454F] tracking-wide">
                                <span>Published: {item.date}</span>
                                <span>•</span>
                                <span>Author: {item.author}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {item.views} views</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-3 text-[#49454F] hover:text-[#8A1538] hover:bg-[#F4EFF4] rounded-full transition-colors bg-white">
                                <Edit2 className="w-5 h-5" />
                            </button>
                            <button onClick={() => handleDelete(item.id)} className="p-3 text-[#49454F] hover:text-red-700 hover:bg-red-50 rounded-full transition-colors bg-white">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
                {news.length === 0 && (
                    <div className="bg-[#FFFBFE] p-12 rounded-[24px] text-center text-[#49454F] font-medium border border-[#E7E0EC]/50">
                        No articles found. Create your first news post!
                    </div>
                )}
            </div>

            {/* M3 Modal Dialog */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-[#FFFBFE] rounded-[28px] shadow-xl max-w-sm w-full overflow-hidden">
                        <div className="px-6 pt-6 pb-4">
                            <div className="flex justify-center mb-4 text-[#2D1F0D]">
                                <Newspaper className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-normal text-center text-[#1C1B1F]">Draft New Article</h2>
                        </div>
                        <form onSubmit={handleCreateArticle} className="p-6 pt-0 space-y-6">
                            <div>
                                <input
                                    type="text"
                                    value={newArticle.title}
                                    onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                                    className="w-full px-4 py-4 bg-[#F4EFF4] border-b-2 border-[#49454F] rounded-t-[4px] focus:outline-none focus:border-[#2D1F0D] text-[#1C1B1F] placeholder-[#49454F]"
                                    placeholder="Insert Headline"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={newArticle.author}
                                    onChange={(e) => setNewArticle({ ...newArticle, author: e.target.value })}
                                    className="w-full px-4 py-4 bg-[#F4EFF4] border-b-2 border-[#49454F] rounded-t-[4px] focus:outline-none focus:border-[#2D1F0D] text-[#1C1B1F] placeholder-[#49454F]"
                                    placeholder="Publishing Department"
                                    required
                                />
                            </div>
                            <div className="pt-6 flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-6 py-2.5 text-[#49454F] hover:bg-[#E7E0EC] rounded-full transition-colors font-medium text-sm tracking-wide"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 bg-[#F2D8B3] hover:bg-[#e4c294] text-[#2D1F0D] rounded-full transition-colors font-medium text-sm tracking-wide shadow-sm"
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
