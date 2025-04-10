import Navbar from '../Navbar'

export default function StudentLayout({ children }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-blue-800 text-white p-4">Student Sidebar</aside>
      <div className="flex-1">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
