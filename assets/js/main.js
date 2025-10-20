(() => {
  const FALLBACK_STREAM = "https://radiorho.streaming.deliver.media/radiorho_aac_128";

  const streamUrl =
    (typeof window !== "undefined" && typeof window.STREAM_URL === "string" && window.STREAM_URL.trim()) ||
    FALLBACK_STREAM;

  const player = document.getElementById("radio-player");
  const heroPlayButton = document.querySelector('[data-action="toggle-play"]');
  const playerPlayButton = document.querySelector('[data-action="player-play"]');
  const playerStopButton = document.querySelector('[data-action="player-stop"]');
  const volumeSlider = document.getElementById("volume");
  const playerStatus = document.getElementById("player-status");
  const nowPlayingTrack = document.getElementById("now-playing-track");
  const nowPlayingHost = document.getElementById("now-playing-host");

  if (player) {
    player.src = streamUrl;
    player.setAttribute("data-loaded-stream", streamUrl);
  }

  const setStatus = (message) => {
    if (playerStatus) {
      playerStatus.textContent = message;
    }
  };

  const setPlayState = (isPlaying) => {
    [heroPlayButton, playerPlayButton].forEach((button) => {
      if (!button) return;
      button.setAttribute("aria-pressed", String(isPlaying));
      button.classList.toggle("is-playing", isPlaying);
      if (button === heroPlayButton) {
        button.querySelector(".play-label").textContent = isPlaying
          ? "Livestream pausieren"
          : "Livestream starten";
      }
    });
    if (playerStatus) {
      playerStatus.textContent = isPlaying ? "Live" : "Bereit";
    }
  };

  const handlePlay = async () => {
    if (!player) return;
    try {
      await player.play();
      setPlayState(true);
    } catch (error) {
      console.error("Fehler beim Starten des Streams", error);
      setStatus("Stream konnte nicht gestartet werden. Bitte erneut versuchen.");
    }
  };

  const handlePause = () => {
    if (!player) return;
    player.pause();
    setPlayState(false);
  };

  if (heroPlayButton) {
    heroPlayButton.addEventListener("click", (event) => {
      event.preventDefault();
      const isPressed = heroPlayButton.getAttribute("aria-pressed") === "true";
      if (isPressed) {
        handlePause();
      } else {
        handlePlay();
      }
    });
  }

  if (playerPlayButton) {
    playerPlayButton.addEventListener("click", () => {
      const isPressed = playerPlayButton.getAttribute("aria-pressed") === "true";
      if (isPressed) {
        handlePause();
      } else {
        handlePlay();
      }
    });
  }

  if (playerStopButton) {
    playerStopButton.addEventListener("click", () => {
      handlePause();
      if (player) {
        player.currentTime = 0;
      }
      setStatus("Gestoppt");
    });
  }

  if (volumeSlider && player) {
    player.volume = parseFloat(volumeSlider.value ?? "0.75");
    volumeSlider.addEventListener("input", () => {
      player.volume = parseFloat(volumeSlider.value ?? "0.75");
    });
  }

  if (player) {
    player.addEventListener("playing", () => setStatus("Live"));
    player.addEventListener("pause", () => setStatus("Pausiert"));
    player.addEventListener("stalled", () => setStatus("Verbindung wird überprüft …"));
    player.addEventListener("waiting", () => setStatus("Puffern …"));
    player.addEventListener("error", () => setStatus("Stream nicht verfügbar"));
  }

  const rotateNowPlaying = () => {
    const items = [
      { track: "Claudio Villa – Volare", host: "Giulia Conti" },
      { track: "Laura Pausini – Tra te e il mare", host: "Marco Rinaldi" },
      { track: "Jovanotti – A te", host: "Chiara Romano" },
      { track: "Måneskin – Torna a casa", host: "Luca Ferri" },
      { track: "Eros Ramazzotti – Più bella cosa", host: "Sara Leone" }
    ];

    let index = 0;

    const render = () => {
      const item = items[index];
      if (nowPlayingTrack) nowPlayingTrack.textContent = item.track;
      if (nowPlayingHost) nowPlayingHost.textContent = item.host;
      index = (index + 1) % items.length;
    };

    render();
    window.setInterval(render, 15000);
  };

  rotateNowPlaying();

  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector(".nav-toggle");
  const navigation = document.getElementById("primary-navigation");
  if (navToggle && navigation) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navigation.setAttribute("aria-expanded", String(!expanded));
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 768px)").matches) {
          navToggle.setAttribute("aria-expanded", "false");
          navigation.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  const header = document.querySelector(".site-header");
  if (header) {
    const toggleShadow = () => {
      const shouldElevate = window.scrollY > 10;
      header.classList.toggle("is-scrolled", shouldElevate);
    };
    toggleShadow();
    window.addEventListener("scroll", toggleShadow, { passive: true });
  }
})();
