# Claude Session Notes - Antwerp Walking Tour

## Project Overview
Walking tour webapp for Antwerp on Jan 1, 2026. User is traveling with partner James and mom (who speaks Chinese).

## Current State (Updated Jan 1, 2026)

### Deployments
- **Vercel (LIVE):** https://antwerp-walking-tour.vercel.app
  - Fully functional with audio files
  - Audio files were uploaded directly to Vercel (not via git)

- **GitHub:** https://github.com/meril/antwerp-walking-tour
  - Code only (no audio files due to slow internet during initial push)
  - Audio files are in `.gitignore`

### Folder Structure (Flattened)
```
/antwerp-walking-tour/
├── src/
│   ├── components/
│   │   ├── AudioPlayer.tsx    # Full audio player with play/pause, speed, progress
│   │   ├── Header.tsx         # Language toggle (EN/ZH), mobile map button
│   │   ├── Sidebar.tsx        # Tour stop list
│   │   ├── StopCard.tsx       # Expandable cards with audio player
│   │   └── MapComponent.tsx   # Leaflet map with markers
│   ├── data/
│   │   └── tourData.ts        # All 12 stops with EN/ZH content
│   ├── utils/
│   │   └── audioUtils.ts      # Audio file path mapping
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── audio/                 # 24 MP3 files (~45MB total) - LOCAL ONLY
├── package.json               # React 19 + Vite 5 + Tailwind
├── vite.config.ts
└── [config files]
```

### What's Done
- [x] React app with interactive map (Leaflet)
- [x] 12 tour stops with bilingual content (EN/ZH)
- [x] AudioPlayer component with:
  - Play/pause button
  - Progress bar (clickable to seek)
  - Playback speed (0.75x, 1x, 1.25x, 1.5x)
  - Mute toggle
  - Time display
- [x] Language switching (audio reloads correctly)
- [x] Mobile responsive design
- [x] Deployed to Vercel (with audio)
- [x] Code pushed to GitHub (without audio)

### TODO: Upload Audio Files to GitHub
The audio files (~45MB) were excluded from git due to slow internet.

**When you have better internet, run:**
```bash
# 1. Remove the audio exclusion from .gitignore
# Edit .gitignore and remove this line:
#   public/audio/*.mp3

# 2. Add and commit the audio files
git add public/audio/*.mp3
git commit -m "Add audio files for tour narration"

# 3. Push to GitHub
git push

# 4. (Optional) Set up Git LFS for cleaner history
# If you want to use Git LFS instead:
brew install git-lfs
git lfs install
git lfs track "*.mp3"
git add .gitattributes
git add public/audio/*.mp3
git commit -m "Add audio files with LFS"
git push
```

**Note:** Vercel deployment already has the audio files and works fine. This is just to have a complete backup on GitHub.

### Audio Files
- 24 MP3 files (12 English + 12 Chinese)
- English: ElevenLabs (eleven_multilingual_v2)
- Chinese: Cartesia (sonic-3)
- Naming: `{NN}_{stopname}_{lang}.mp3` (e.g., `01_cathedral_en.mp3`)

### Audio File Mapping (in audioUtils.ts)
```
Stop 1:  01_cathedral_{en|zh}.mp3
Stop 2:  02_vlaeykensgang_{en|zh}.mp3
Stop 3:  03_grotemarkt_{en|zh}.mp3
Stop 4:  04_vleeshuis_{en|zh}.mp3
Stop 5:  05_groenplaats_{en|zh}.mp3
Stop 6:  06_rubenshuis_{en|zh}.mp3
Stop 7:  07_sintcarolus_{en|zh}.mp3
Stop 8:  08_hetsteen_{en|zh}.mp3
Stop 9:  09_mas_{en|zh}.mp3
Stop 10: 10_kmska_{en|zh}.mp3
Stop 11: 11_hetzuid_{en|zh}.mp3
Stop 12: 12_centraal_{en|zh}.mp3
```

### API Keys (if audio needs regenerating)
- ElevenLabs: fc7ad8dcb372f58a9ebf753b66f9d937
- Cartesia: sk_car_Yr7JkZXASRou8bpiazwL22

### Tech Stack
- React 19.2 + TypeScript
- Vite 5.x (downgraded from 7 for Node 21 compatibility)
- Tailwind CSS with custom colors (parchment, ink, gold, burgundy, stone)
- Leaflet / react-leaflet for maps
- Lucide React for icons

### Known Issues Fixed
- Chinese audio not loading when switching languages → Fixed by adding `key` prop to audio element
- Audio player not showing on mobile → Fixed by increasing max-height from 800px to 2000px
