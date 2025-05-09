// components/MusicController.tsx
import { useAudioPlayer } from '../hooks/useAudioPlayer'

interface Props {
  src: string
}

export default function MusicController() {
  const { toggle, isPlaying } = useAudioPlayer()

  return (
    <div className="fixed top-4 right-4 bg-white shadow-lg rounded p-3 z-50">
      <p className="text-sm mb-2">🎵 재생 중</p>
      <button onClick={toggle} className="px-2 py-1 bg-blue-500 text-white rounded">
        {isPlaying ? '⏸ 일시정지' : '▶ 재생'}
      </button>
    </div>
  )
}
