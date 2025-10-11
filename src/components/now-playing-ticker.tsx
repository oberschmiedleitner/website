'use client';

import { useEffect, useState } from 'react';
import { fetchNowPlaying, type NowPlayingResponse } from '@/lib/now-playing';
import { useAudio } from '@/context/audio-context';

export function NowPlayingTicker() {
  const { setNowPlaying } = useAudio();
  const [data, setData] = useState<NowPlayingResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        const response = await fetchNowPlaying();
        if (isMounted) {
          setData(response);
          setNowPlaying({ title: response.title, artist: response.artist, show: response.show });
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void load();

    const interval = setInterval(load, 60_000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [setNowPlaying]);

  return (
    <div className="overflow-hidden rounded-xl border border-emerald-200/70 bg-white/70">
      <div className="flex items-center gap-3 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary">
        <span className="inline-flex h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
        Jetzt läuft
      </div>
      <div className="px-4 py-3 text-sm text-text">
        {isLoading && <span>Wird geladen …</span>}
        {!isLoading && data && (
          <div className="flex flex-col gap-1">
            <span className="text-base font-semibold text-text">{data.title}</span>
            {data.artist && <span className="text-muted">{data.artist}</span>}
            {data.show && <span className="text-xs uppercase tracking-wide text-muted">Sendung: {data.show}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
