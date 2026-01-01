import { Map as MapIcon, Globe } from 'lucide-react';

interface HeaderProps {
    lang: 'en' | 'zh';
    onToggleLang: () => void;
    onViewMapMobile: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onToggleLang, onViewMapMobile }) => {
    return (
        <header className="bg-ink text-parchment p-6 relative overflow-hidden shadow-lg z-20">
            {/* Texture Overlay */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60M0 30L60 30' stroke='%23b8860b' stroke-width='0.5' opacity='0.5'/%3E%3C/svg%3E")`
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-2 text-gold-light">
                        {lang === 'en' ? 'Antwerp Walking Tour' : '安特衛普步行導覽'}
                    </h1>
                    <p className="font-light opacity-90 text-lg">
                        {lang === 'en' ? 'A Journey Through Art, History & Architecture' : '藝術、歷史與建築之旅'}
                    </p>
                    <div className="inline-block bg-gold text-ink px-3 py-1 text-sm font-semibold mt-3 rounded-sm">
                        {lang === 'en' ? 'January 1, 2026' : '2026年1月1日'}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={onToggleLang}
                        className="flex items-center gap-2 bg-stone/20 hover:bg-gold/20 border border-gold/30 px-4 py-2 rounded transition-all duration-300 backdrop-blur-sm"
                    >
                        <Globe size={18} className="text-gold" />
                        <span className="font-medium text-cream">
                            {lang === 'en' ? '中文' : 'English'}
                        </span>
                    </button>

                    <button
                        onClick={onViewMapMobile}
                        className="md:hidden flex items-center gap-2 bg-gold text-ink px-4 py-2 rounded font-bold hover:bg-gold-light transition-colors shadow-md"
                    >
                        <MapIcon size={18} />
                        {lang === 'en' ? 'Map' : '地圖'}
                    </button>
                </div>
            </div>
        </header>
    );
};
