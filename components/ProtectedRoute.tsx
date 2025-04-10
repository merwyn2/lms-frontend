import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ProtectedRoute({ children }) {
  const router = useRouter()

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (!token) {
      router.push('/login')
    }
  }, [router])

  return <>{children}</>
}
