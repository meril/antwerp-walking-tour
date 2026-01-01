#!/usr/bin/env python3
"""
Generate audio files for Antwerp Walking Tour.
- English: ElevenLabs (eleven_multilingual_v2)
- Chinese: Cartesia (sonic-3)
"""

import os
import requests
from pathlib import Path
from cartesia import Cartesia

# === ElevenLabs Config (English) ===
ELEVENLABS_API_KEY = os.environ.get("ELEVENLABS_API_KEY", "fc7ad8dcb372f58a9ebf753b66f9d937")
ELEVENLABS_MODEL = "eleven_multilingual_v2"
ELEVENLABS_VOICE = "21m00Tcm4TlvDq8ikWAM"
ELEVENLABS_URL = f"https://api.elevenlabs.io/v1/text-to-speech/{ELEVENLABS_VOICE}"

# === Cartesia Config (Chinese) ===
CARTESIA_API_KEY = os.environ.get("CARTESIA_API_KEY", "sk_car_Yr7JkZXASRou8bpiazwL22")
CARTESIA_MODEL = "sonic-3"
CARTESIA_VOICE_ZH = "7a5d4663-88ae-47b7-808e-8f9b9ee4127b"

# Script files mapping
SCRIPTS = [
    ("01_cathedral", "Cathedral of Our Lady"),
    ("02_vlaeykensgang", "Vlaeykensgang"),
    ("03_grotemarkt", "Grote Markt"),
    ("04_vleeshuis", "Vleeshuis"),
    ("05_groenplaats", "Groenplaats"),
    ("06_rubenshuis", "Rubenshuis"),
    ("07_sintcarolus", "Sint-Carolus Borromeus"),
    ("08_hetsteen", "Het Steen & Scheldt"),
    ("09_mas", "MAS & Het Eilandje"),
    ("10_kmska", "KMSKA"),
    ("11_hetzuid", "Het Zuid"),
    ("12_centraal", "Antwerp Centraal"),
]


def generate_audio_elevenlabs(text: str, output_path: Path) -> bool:
    """Generate English audio using ElevenLabs."""
    print(f"  [ElevenLabs] Generating audio ({len(text)} chars)...")

    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": ELEVENLABS_API_KEY,
    }

    data = {
        "text": text,
        "model_id": ELEVENLABS_MODEL,
        "language_code": "en",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.75,
        }
    }

    response = requests.post(ELEVENLABS_URL, json=data, headers=headers)

    if response.status_code == 200:
        with open(output_path, "wb") as f:
            f.write(response.content)
        print(f"  Saved: {output_path}")
        return True
    else:
        print(f"  ERROR: {response.status_code} - {response.text}")
        return False


def generate_audio_cartesia(client: Cartesia, text: str, output_path: Path) -> bool:
    """Generate Chinese audio using Cartesia."""
    print(f"  [Cartesia] Generating audio ({len(text)} chars)...")

    try:
        with open(output_path, "wb") as f:
            audio_bytes = client.tts.bytes(
                model_id=CARTESIA_MODEL,
                transcript=text,
                voice={"mode": "id", "id": CARTESIA_VOICE_ZH},
                language="zh",
                output_format={
                    "container": "mp3",
                    "sample_rate": 44100,
                    "bit_rate": 128000,
                },
            )
            for chunk in audio_bytes:
                f.write(chunk)

        print(f"  Saved: {output_path}")
        return True
    except Exception as e:
        print(f"  ERROR: {e}")
        return False


def main():
    # Create directories
    scripts_dir = Path(__file__).parent / "scripts"
    audio_dir = Path(__file__).parent / "audio"
    audio_dir.mkdir(exist_ok=True)

    # Initialize Cartesia client for Chinese
    cartesia_client = Cartesia(api_key=CARTESIA_API_KEY)

    success_count = 0
    fail_count = 0

    # Generate audio for each script in both languages
    for script_name, title in SCRIPTS:
        print(f"\n{'='*60}")
        print(f"Processing: {title}")
        print(f"{'='*60}")

        for lang in ["en", "zh"]:
            script_file = scripts_dir / f"{script_name}_{lang}.txt"
            output_file = audio_dir / f"{script_name}_{lang}.mp3"

            if not script_file.exists():
                print(f"  WARNING: Script file not found: {script_file}")
                fail_count += 1
                continue

            # Skip if audio file already exists
            if output_file.exists():
                print(f"\n  Language: {lang.upper()}")
                print(f"  SKIPPED: {output_file} already exists")
                success_count += 1
                continue

            # Read script
            with open(script_file, "r", encoding="utf-8") as f:
                text = f.read().strip()

            print(f"\n  Language: {lang.upper()}")

            try:
                if lang == "en":
                    success = generate_audio_elevenlabs(text, output_file)
                else:  # zh
                    success = generate_audio_cartesia(cartesia_client, text, output_file)

                if success:
                    success_count += 1
                else:
                    fail_count += 1
            except Exception as e:
                print(f"  ERROR: {e}")
                fail_count += 1

    print(f"\n{'='*60}")
    print("Audio generation complete!")
    print(f"Success: {success_count} | Failed: {fail_count}")
    print(f"Files saved to: {audio_dir}")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
