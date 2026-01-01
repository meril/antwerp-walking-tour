import React from 'react';
import { StopCard } from './StopCard';
import type { TourStop } from '../data/tourData';
import { Info } from 'lucide-react';

interface SidebarProps {
    stops: TourStop[];
    activeStopId: number | null;
    lang: 'en' | 'zh';
    onStopClick: (id: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ stops, activeStopId, lang, onStopClick }) => {
    // Group stops by section if needed, or just list them
    // For simplicity, we just list them but we could add section headers

    return (
        <aside className="bg-cream h-full overflow-y-auto border-l border-stone/10 shadow-inner">
            <div className="sticky top-0 z-10 bg-parchment/95 backdrop-blur-sm border-b border-stone/10 p-4 shadow-sm">
                <h2 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
                    {lang === 'en' ? 'Tour Itinerary' : '導覽行程'}
                    <span className="text-sm font-sans font-normal text-stone bg-stone/10 px-2 py-0.5 rounded-full">
                        {stops.length} stops
                    </span>
                </h2>
                <div className="flex items-center gap-4 mt-2 text-sm text-stone font-medium">
                    <span className="flex items-center gap-1">
                        <Info size={14} className="text-gold" />
                        {lang === 'en' ? '~5km' : '約5公里'}
                    </span>
                    <span>•</span>
                    <span>{lang === 'en' ? '4-5 hours' : '4-5小時'}</span>
                </div>
            </div>

            <div className="p-4 space-y-2">
                {stops.map((stop) => (
                    <StopCard
                        key={stop.id}
                        id={stop.id}
                        content={lang === 'en' ? stop.content.en : stop.content.zh}
                        lang={lang}
                        isActive={activeStopId === stop.id}
                        onClick={() => onStopClick(stop.id)}
                    />
                ))}

                <div className="mt-8 p-6 bg-white border border-dashed border-stone/30 rounded text-center opacity-70">
                    <p className="text-sm font-serif italic text-stone">
                        {lang === 'en' ? 'End of tour' : '行程結束'}
                    </p>
                </div>
            </div>
        </aside>
    );
};
