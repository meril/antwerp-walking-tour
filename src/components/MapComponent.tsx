import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { TourStop } from '../data/tourData';

// Fix for default Leaflet marker icons in React
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface MapComponentProps {
    stops: TourStop[];
    activeStopId: number | null;
    onMarkerClick: (id: number) => void;
}

// Subcomponent to handle map movements
const MapController: React.FC<{ center: [number, number] }> = ({ center }) => {
    const map = useMap();
    useEffect(() => {
        map.flyTo(center, 15, {
            duration: 1.5,
            easeLinearity: 0.25
        });
    }, [center, map]);
    return null;
};

export const MapComponent: React.FC<MapComponentProps> = ({ stops, activeStopId, onMarkerClick }) => {
    const activeStop = stops.find(s => s.id === activeStopId) || stops[0];
    const routeCoordinates = stops.map(s => [s.lat, s.lng] as [number, number]);

    const createCustomIcon = (id: number, isActive: boolean) => {
        return L.divIcon({
            className: 'bg-transparent border-none',
            html: `<div class="custom-marker ${isActive ? 'active' : ''} w-7 h-7 flex items-center justify-center rounded-sm font-serif font-bold text-sm shadow-md transition-all duration-300 ${isActive
                ? 'bg-gold text-ink border-2 border-white scale-110 z-50'
                : 'bg-ink text-parchment border-2 border-gold hover:bg-gold hover:text-ink'
                }">${id}</div>`,
            iconSize: [28, 28],
            iconAnchor: [14, 14],
            popupAnchor: [0, -10]
        });
    };

    return (
        <div className="h-full w-full relative z-0">
            <MapContainer
                center={[activeStop.lat, activeStop.lng]}
                zoom={14}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%', background: '#f4f1ea' }}
                zoomControl={false} // We'll add custom position if needed or use default
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                <MapController center={[activeStop.lat, activeStop.lng]} />

                <Polyline
                    positions={routeCoordinates}
                    pathOptions={{
                        color: '#b8860b',
                        weight: 3,
                        opacity: 0.6,
                        dashArray: '10, 10'
                    }}
                />

                {stops.map((stop) => (
                    <Marker
                        key={stop.id}
                        position={[stop.lat, stop.lng]}
                        icon={createCustomIcon(stop.id, stop.id === activeStopId)}
                        eventHandlers={{
                            click: () => onMarkerClick(stop.id),
                        }}
                    >
                        <Popup className="font-sans">
                            <div className="text-center">
                                <strong className="font-serif block text-lg mb-1 text-ink">{stop.content.en.title}</strong>
                                <span className="text-xs text-stone uppercase tracking-wider">Stop {stop.id}</span>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

            {/* Gradient Overlay for texture */}
            <div className="absolute inset-0 pointer-events-none border-inner-shadow z-[400]" />
        </div>
    );
};
