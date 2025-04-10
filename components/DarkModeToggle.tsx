import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', enabled)
  }, [enabled])

  return (
    <button
      className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded"
      onClick={() => setEnabled(!enabled)}
    >
      {enabled ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}
