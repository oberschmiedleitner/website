export interface NowPlayingResponse {
  title: string;
  artist?: string;
  show?: string;
  startedAt?: string;
}

export async function fetchNowPlaying(): Promise<NowPlayingResponse> {
  // Platzhalter-Implementation für die Offline-Demo. In einem echten Setup
  // würde hier eine Anfrage an die Now-Playing-API von Radio Volare erfolgen.
  return Promise.resolve({
    title: 'Volare – Il Meglio della Musica Italiana',
    artist: 'Radio Volare Team',
    show: 'Mattinata Italiana',
    startedAt: new Date().toISOString()
  });
}
