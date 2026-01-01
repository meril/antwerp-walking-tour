// Mapping from stop ID to audio file name prefix
const audioFileNames: Record<number, string> = {
    1: 'cathedral',
    2: 'vlaeykensgang',
    3: 'grotemarkt',
    4: 'vleeshuis',
    5: 'groenplaats',
    6: 'rubenshuis',
    7: 'sintcarolus',
    8: 'hetsteen',
    9: 'mas',
    10: 'kmska',
    11: 'hetzuid',
    12: 'centraal'
};

export function getAudioPath(stopId: number, lang: 'en' | 'zh'): string {
    const paddedId = stopId.toString().padStart(2, '0');
    const fileName = audioFileNames[stopId];
    if (!fileName) {
        console.warn(`No audio file mapping for stop ${stopId}`);
        return '';
    }
    return `/audio/${paddedId}_${fileName}_${lang}.mp3`;
}

export function formatTime(seconds: number): string {
    if (!isFinite(seconds) || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}
