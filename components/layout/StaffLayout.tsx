import Navbar from '../Navbar'

export default function StaffLayout({ children }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">Staff Sidebar</aside>
      <div className="flex-1">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
