import { useEffect, useState } from 'react'
import { getUserRole } from '@/lib/auth'
import AdminLayout from '@/components/layout/AdminLayout'
import StaffLayout from '@/components/layout/StaffLayout'
import StudentLayout from '@/components/layout/StudentLayout'
import api from '@/lib/api'

const Dashboard = () => {
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    api.get('/dashboard/summary/')
      .then(res => setSummary(res.data))
  }, [])

  const role = getUserRole()

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {summary && (
        <ul className="space-y-2 text-sm sm:text-base">
          {role === 'admin' && (
            <>
              <li>Total Students: {summary.total_students}</li>
              <li>Total Assignments: {summary.total_assignments}</li>
            </>
          )}
          {role === 'staff' && (
            <>
              <li>Total Attendance: {summary.total_attendance_records}</li>
              <li>Present Today: {summary.present_today}</li>
            </>
          )}
          {role === 'student' && (
            <li>Welcome! Check assignments and attendance records from menu.</li>
          )}
        </ul>
      )}
    </div>
  )
}

Dashboard.getLayout = (page) => {
  const role = getUserRole()
  switch (role) {
    case 'admin': return <AdminLayout>{page}</AdminLayout>
    case 'staff': return <StaffLayout>{page}</StaffLayout>
    case 'student': return <StudentLayout>{page}</StudentLayout>
    default: return <>{page}</>
  }
}

export default Dashboard
