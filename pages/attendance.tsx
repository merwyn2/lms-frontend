import { useEffect, useState } from 'react'
import api from '@/lib/api'

export default function AttendancePage() {
  const [records, setRecords] = useState([])
  const [rollNo, setRollNo] = useState('')
  const [status, setStatus] = useState('present')
  const [date, setDate] = useState('')

  const fetchAttendance = async () => {
    const res = await api.get('/attendance/')
    setRecords(res.data)
  }

  const submitAttendance = async () => {
    await api.post('/attendance/', { student: rollNo, status, date })
    fetchAttendance()
  }

  useEffect(() => {
    fetchAttendance()
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Attendance</h1>
      <div className="mb-6">
        <input className="border p-2 mr-2" placeholder="Student ID" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
        <select className="border p-2 mr-2" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="present">Present</option>
          <option value="absent">Absent</option>
        </select>
        <input className="border p-2 mr-2" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <button className="bg-blue-600 text-white px-4 py-2" onClick={submitAttendance}>Submit</button>
      </div>
      <ul>
        {records.map((r, idx) => (
          <li key={idx} className="border p-2 mb-2">
            Student {r.student} - {r.status} on {r.date}
          </li>
        ))}
      </ul>
    </div>
  )
}
