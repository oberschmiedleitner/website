'use client';

import { useEffect, useRef, useState } from 'react';
import { useAudio } from '@/context/audio-context';

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M4 3.5v13l12-6.5-12-6.5z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M5 4h4v12H5V4zm6 0h4v12h-4V4z" fill="currentColor" />
    </svg>
  );
}

function SpeakerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M4 9v6h3l4 4V5L7 9H4zm12.5 3a2.5 2.5 0 0 0-1.2-2.13v4.25c.73-.45 1.2-1.25 1.2-2.12zm-1.2-6.04v2.1A4.5 4.5 0 0 1 19 12a4.5 4.5 0 0 1-3.7 4.37v2.1A6.5 6.5 0 0 0 21 12a6.5 6.5 0 0 0-5.7-6.04z"
      />
    </svg>
  );
}

export function AudioPlayer() {
  const { streamUrl, togglePlayback, isPlaying, registerAudio, setIsPlaying, nowPlaying } = useAudio();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState(0.9);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const node = audioRef.current;
    if (!node) return;
    node.volume = volume;
  }, [volume]);

  useEffect(() => {
    registerAudio(audioRef.current);
  }, [registerAudio]);

  const handlePlay = () => {
    setIsPlaying(true);
    setErrorMessage(null);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleError = () => {
    setIsPlaying(false);
    setErrorMessage('Stream im Moment nicht erreichbar. Bitte später erneut versuchen.');
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 border-t border-emerald-200/60 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <SpeakerIcon className="h-7 w-7" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium uppercase tracking-wide text-muted">Jetzt live</p>
            <p className="truncate text-lg font-semibold text-text">{nowPlaying.title}</p>
            {nowPlaying.artist && (
              <p className="truncate text-sm text-muted">{nowPlaying.artist}</p>
            )}
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="player-volume" className="sr-only">
              Lautstärke anpassen
            </label>
            <input
              id="player-volume"
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={volume}
              onChange={(event) => setVolume(Number(event.target.value))}
              className="h-2 w-32 cursor-pointer accent-primary"
            />
          </div>
          <button
            type="button"
            onClick={togglePlayback}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={isPlaying ? 'Livestream pausieren' : 'Livestream starten'}
          >
            {isPlaying ? <PauseIcon className="h-6 w-6" /> : <PlayIcon className="h-6 w-6 translate-x-[1px]" />}
          </button>
        </div>
      </div>
      {errorMessage && (
        <p className="bg-red-50 px-4 py-2 text-sm text-red-700">{errorMessage}</p>
      )}
      <audio
        ref={audioRef}
        src={streamUrl}
        preload="none"
        onPlay={handlePlay}
        onPause={handlePause}
        onError={handleError}
      />
    </div>
  );
}
