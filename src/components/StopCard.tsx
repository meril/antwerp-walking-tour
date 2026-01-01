import React from 'react';
import type { StopContent } from '../data/tourData';
import { clsx } from 'clsx';
import { ChevronDown } from 'lucide-react';
import { AudioPlayer } from './AudioPlayer';

interface StopCardProps {
    id: number;
    content: StopContent;
    lang: 'en' | 'zh';
    isActive: boolean;
    onClick: () => void;
}

export const StopCard: React.FC<StopCardProps> = ({ id, content, lang, isActive, onClick }) => {
    return (
        <div
            id={`stop-card-${id}`}
            onClick={onClick}
            className={clsx(
                "group relative bg-white border mb-3 transition-all duration-300 cursor-pointer overflow-hidden rounded-sm",
                isActive
                    ? "border-gold shadow-lg ring-1 ring-gold/20"
                    : "border-stone/20 hover:border-gold/50 hover:shadow-md"
            )}
        >
            <div className="flex items-start p-4 gap-3">
                <div
                    className={clsx(
                        "w-8 h-8 flex items-center justify-center font-serif font-bold text-lg shrink-0 transition-colors duration-300 rounded-sm",
                        isActive ? "bg-gold text-ink" : "bg-ink text-parchment group-hover:bg-gold/80 group-hover:text-ink"
                    )}
                >
                    {id}
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg font-bold text-ink leading-tight mb-1">
                        {content.title}
                    </h3>
                    <p className="text-stone text-sm truncate">{content.subtitle}</p>
                </div>

                <ChevronDown
                    className={clsx(
                        "text-stone transition-transform duration-300",
                        isActive ? "rotate-180 text-gold" : "group-hover:text-gold"
                    )}
                />
            </div>

            <div
                className={clsx(
                    "transition-all duration-500 ease-in-out border-t border-stone/10 bg-cream/30",
                    isActive ? "max-h-[2000px] opacity-100 p-4" : "max-h-0 opacity-0 overflow-hidden"
                )}
            >
                {content.details.map((section, idx) => (
                    <div key={idx} className="mb-4 last:mb-0">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-burgundy mb-2">
                            {section.title}
                        </h4>
                        <ul className="space-y-2">
                            {section.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="text-sm text-ink/90 pl-4 relative leading-relaxed">
                                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-gold/60 rotate-45" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {content.highlight && (
                    <div className="mt-4 p-3 bg-gold/10 border-l-2 border-gold text-sm italic text-ink/80 rounded-r-sm">
                        {content.highlight}
                    </div>
                )}

                <AudioPlayer stopId={id} lang={lang} isActive={isActive} />
            </div>
        </div>
    );
};
