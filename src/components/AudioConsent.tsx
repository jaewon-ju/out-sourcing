// components/AudioConsent.tsx
interface Props {
  onConsent: () => void
}

export default function AudioConsent({ onConsent }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <p className="mb-4 text-lg">🎧 사이트에서 음악을 재생해도 괜찮을까요?</p>
        <button
          onClick={onConsent}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          예, 음악을 들을게요
        </button>
      </div>
    </div>
  )
}
