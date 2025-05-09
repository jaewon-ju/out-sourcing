// hooks/useAudioPlayer.ts
import { useRef, useState } from 'react'

export function useAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const play = (src: string) => {
    if (!audioRef.current || audioRef.current.src !== src) {
      audioRef.current = new Audio(src)
    }
    audioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch(console.warn)
  }

  const pause = () => {
    audioRef.current?.pause()
    setIsPlaying(false)
  }

  const toggle = () => {
    console.log("toggle");
    if (!audioRef.current) {
      console.log("no audioRef.current");
      return
    }
    if (audioRef.current.paused) {
        console.log("play");
      audioRef.current.play().then(() => setIsPlaying(true))
    } else {
      console.log("pause");
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  return {
    play,
    pause,
    toggle,
    isPlaying,
  }
}
