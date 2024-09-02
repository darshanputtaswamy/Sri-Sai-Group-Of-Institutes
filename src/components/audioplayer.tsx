"use client";
import { useEffect, useRef } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Set the audio volume to 60%
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.play();
    }
  }, []);

  return (
    <div className="audio-container">
      <audio ref={audioRef} controls loop>
        <source src="/bg.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <style jsx>{`
        .audio-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
        }

        audio {
          width: 300px; /* Adjust the width as needed */
          height: 40px; /* Adjust the height as needed */
        }
      `}</style>
    </div>
  );
}