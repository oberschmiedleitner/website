'use client';

import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from 'react';

export interface NowPlayingInfo {
  title: string;
  artist?: string;
  show?: string;
}

interface AudioContextValue {
  streamUrl: string;
  isPlaying: boolean;
  nowPlaying: NowPlayingInfo;
  togglePlayback: () => void;
  setNowPlaying: (info: NowPlayingInfo) => void;
  registerAudio: (node: HTMLAudioElement | null) => void;
  setIsPlaying: (state: boolean) => void;
}

const defaultNowPlaying: NowPlayingInfo = {
  title: 'Radio Volare Live',
  artist: 'Radio Volare'
};

const AudioContext = createContext<AudioContextValue | undefined>(undefined);

const STREAM_URL = 'https://ice16.fluidstream.net/rvolare.aac';

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [nowPlaying, setNowPlaying] = useState<NowPlayingInfo>(defaultNowPlaying);

  const registerAudio = useCallback((node: HTMLAudioElement | null) => {
    audioRef.current = node;
  }, []);

  const togglePlayback = useCallback(() => {
    const element = audioRef.current;
    if (!element) return;

    if (element.paused) {
      void element.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      element.pause();
    }
  }, []);

  const value = useMemo<AudioContextValue>(
    () => ({
      streamUrl: STREAM_URL,
      isPlaying,
      nowPlaying,
      togglePlayback,
      setNowPlaying,
      registerAudio,
      setIsPlaying
    }),
    [isPlaying, nowPlaying, registerAudio]
  );

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return ctx;
}
