export const getUserRole = (): string | null => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null
  if (!token) return null
  const payload = JSON.parse(atob(token.split('.')[1]))
  return payload.role || null
}
