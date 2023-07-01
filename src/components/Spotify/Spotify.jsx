import React from "react";

export default function Spotify() {
  return (
    <div className="spotify-wrapper">
      <iframe
        title="spotify"
        src="https://open.spotify.com/embed/playlist/7hO1wP81lo2ntjMT8MYcWg?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
