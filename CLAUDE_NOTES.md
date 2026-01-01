# Claude Session Notes - Antwerp Walking Tour

## Project Overview
Walking tour webapp for Antwerp on Jan 1, 2026. User is traveling with partner James and mom (who speaks Chinese).

## Current State

### Folder Structure
```
/antwerp-walking-tour/
├── antwerp-tour/           # Gemini's React app (USE THIS)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx      # Has language toggle (EN/ZH)
│   │   │   ├── Sidebar.tsx
│   │   │   ├── StopCard.tsx    # NEEDS AUDIO PLAYER ADDED
│   │   │   └── MapComponent.tsx
│   │   ├── data/
│   │   │   └── tourData.ts     # Combined EN/ZH content for all 12 stops
│   │   └── App.tsx
│   ├── public/
│   │   └── audio/              # Audio files copied here (24 MP3s)
│   └── package.json            # React + Vite + Tailwind
├── audio/                      # Original audio files (can delete after confirming)
├── scripts/                    # Text scripts (12 EN + 12 ZH .txt files)
├── antwerp-walking-tour.html   # Old English-only version (can delete)
├── antwerp-walking-tour-zh.html # Old Chinese-only version (can delete)
├── generate_audio.py           # Audio generation script
└── venv/                       # Python virtual environment
```

### Audio Files
- 24 MP3 files generated (12 English + 12 Chinese)
- English: ElevenLabs (eleven_multilingual_v2, voice 21m00Tcm4TlvDq8ikWAM)
- Chinese: Cartesia (sonic-3, voice 7a5d4663-88ae-47b7-808e-8f9b9ee4127b)
- File naming: `{stop_number}_{stop_name}_{lang}.mp3`
  - e.g., `01_cathedral_en.mp3`, `01_cathedral_zh.mp3`
- Files are now in: `/antwerp-tour/public/audio/`

### What's Done
- ✅ 12 English audio scripts written
- ✅ 12 Chinese audio scripts rewritten (natural-sounding, not literal translation)
- ✅ All 24 audio files generated
- ✅ Gemini created React app with language toggle
- ✅ Audio files copied to React app's public folder

### What's Left TO DO
1. **Add audio player to StopCard.tsx** with:
   - Play/pause button
   - Playback speed control (0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x)
   - Audio path should be: `/audio/{stop_id}_{stop_name}_{lang}.mp3`

2. **Clean up old files** (optional):
   - Can delete: `antwerp-walking-tour.html`, `antwerp-walking-tour-zh.html`
   - Can delete: root `/audio/` folder after verifying public/audio works

3. **Deploy to Vercel**:
   - The React app is in `/antwerp-tour/`
   - User wants to deploy this to Vercel

### Audio File Mapping
```
Stop 1: 01_cathedral_{en|zh}.mp3
Stop 2: 02_vlaeykensgang_{en|zh}.mp3
Stop 3: 03_grotemarkt_{en|zh}.mp3
Stop 4: 04_vleeshuis_{en|zh}.mp3
Stop 5: 05_groenplaats_{en|zh}.mp3
Stop 6: 06_rubenshuis_{en|zh}.mp3
Stop 7: 07_sintcarolus_{en|zh}.mp3
Stop 8: 08_hetsteen_{en|zh}.mp3
Stop 9: 09_mas_{en|zh}.mp3
Stop 10: 10_kmska_{en|zh}.mp3
Stop 11: 11_hetzuid_{en|zh}.mp3
Stop 12: 12_centraal_{en|zh}.mp3
```

### API Keys (for reference if audio needs regenerating)
- ElevenLabs: fc7ad8dcb372f58a9ebf753b66f9d937
- Cartesia: sk_car_Yr7JkZXASRou8bpiazwL22

### Key Files to Edit
- `/antwerp-tour/src/components/StopCard.tsx` - Add audio player here
- Audio player should respect the current `lang` prop to play correct language file

### Implementation Notes for Audio Player
The StopCard component receives:
- `id: number` (stop number 1-12)
- `content: StopContent` (has title, subtitle, details, highlight)
- `isActive: boolean`
- `onClick: () => void`

Need to also pass `lang: 'en' | 'zh'` from Sidebar to StopCard to know which audio file to play.

Audio player should only show when card is active (expanded).
