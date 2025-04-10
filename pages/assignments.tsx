import { useEffect, useState } from 'react'
import api from '@/lib/api'

export default function AssignmentsPage() {
  const [assignments, setAssignments] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')

  const fetchAssignments = async () => {
    const res = await api.get('/assignments/')
    setAssignments(res.data)
  }

  const createAssignment = async () => {
    await api.post('/assignments/', { title, description, due_date: dueDate, assigned_by: 1 })
    fetchAssignments()
  }

  useEffect(() => {
    fetchAssignments()
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Assignments</h1>
      <div className="mb-6">
        <input className="border p-2 mr-2" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="border p-2 mr-2" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input className="border p-2 mr-2" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        <button className="bg-green-600 text-white px-4 py-2" onClick={createAssignment}>Add</button>
      </div>
      <ul>
        {assignments.map((a) => (
          <li key={a.id} className="mb-2 border p-2 rounded">{a.title} — Due: {a.due_date}</li>
        ))}
      </ul>
    </div>
  )
}
