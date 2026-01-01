import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MapComponent } from './components/MapComponent';
import { stops } from './data/tourData';
import { clsx } from 'clsx'; // Assuming clsx is installed, or valid replacement
import { X } from 'lucide-react';

function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const [activeStopId, setActiveStopId] = useState<number>(1);
  const [isMobileMapOpen, setIsMobileMapOpen] = useState(false);

  // Scroll to active card in sidebar when it changes
  useEffect(() => {
    const card = document.getElementById(`stop-card-${activeStopId}`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeStopId]);

  const handleStopClick = (id: number) => {
    setActiveStopId(id);
    // On mobile, if we click a stop in the list, we might want to stay in list view 
    // or switch to map might be annoying. Let's keep loop simple for now.
  };

  const handleMarkerClick = (id: number) => {
    setActiveStopId(id);
    // Behave like "view details" - on mobile close map to show details
    if (window.innerWidth < 768) {
      setIsMobileMapOpen(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-parchment overflow-hidden selection:bg-gold/30 selection:text-ink">
      <Header
        lang={lang}
        onToggleLang={() => setLang(prev => prev === 'en' ? 'zh' : 'en')}
        onViewMapMobile={() => setIsMobileMapOpen(true)}
      />

      <main className="flex-1 relative md:grid md:grid-cols-[1fr_420px] lg:grid-cols-[1fr_480px]">

        {/* Map Container */}
        <div className={clsx(
          "absolute inset-0 z-0 md:relative md:block transition-all duration-300 ease-in-out",
          "md:order-1", // Map on left/main area
          isMobileMapOpen ? "translate-x-0 opacity-100 z-30" : "-translate-x-full md:translate-x-0 opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto"
        )}>
          <MapComponent
            stops={stops}
            activeStopId={activeStopId}
            onMarkerClick={handleMarkerClick}
          />

          {/* Mobile Close Map Button */}
          <button
            onClick={() => setIsMobileMapOpen(false)}
            className="absolute top-4 right-4 z-[500] md:hidden bg-white text-ink p-3 rounded-full shadow-lg border border-gold"
            aria-label="Close Map"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Container */}
        <div className={clsx(
          "absolute inset-0 md:relative z-10 bg-parchment md:block",
          "md:order-2", // Sidebar on right
          // On mobile, sidebar is the "base" view. When map is open, sidebar is hidden or covered?
          // Actually, let's make sidebar default view. Map slides over.
          // So sidebar is always "there" but covered by map if isMobileMapOpen is true.
          // This div is just normal flow.
        )}>
          <Sidebar
            stops={stops}
            activeStopId={activeStopId}
            lang={lang}
            onStopClick={handleStopClick}
          />
        </div>

      </main>
    </div>
  );
}

export default App;
