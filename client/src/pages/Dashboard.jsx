import React, { useState, useEffect } from 'react'

export default function Dashboard(){
  const [list, setList] = useState([])

  useEffect(()=>{ setList(JSON.parse(localStorage.getItem('resume:saved')||'[]')) }, [])

  function load(id){
    const item = list.find(i=>i.id===id)
    if(item){
      localStorage.setItem('resume:draft', JSON.stringify(item.data))
      alert('Loaded into editor draft. Go to Create Resume to edit.')
    }
  }
  function del(id){
    if(!confirm('Delete this resume?')) return
    const next = list.filter(i=>i.id!==id)
    localStorage.setItem('resume:saved', JSON.stringify(next))
    setList(next)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      {list.length===0 && <p className="text-gray-600">No saved resumes yet.</p>}
      <div className="space-y-3">
        {list.map(item=> (
          <div key={item.id} className="p-3 bg-white rounded shadow-sm flex justify-between items-center">
            <div>
              <div className="font-medium">{item.data.personal.fullName || 'Untitled'}</div>
              <div className="text-sm text-gray-500">Saved: {new Date(item.created).toLocaleString()}</div>
            </div>
            <div className="space-x-2">
              <button onClick={()=>load(item.id)} className="px-3 py-1 border rounded">Load</button>
              <button onClick={()=>del(item.id)} className="px-3 py-1 text-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
