import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const templates = [
  { id:'classic', name:'Classic Simple' },
  { id:'modern', name:'Modern Clean' },
  { id:'two-column', name:'Two-Column Professional' },
  { id:'blue', name:'Creative Blue Accent' },
  { id:'minimal', name:'Minimalist' }
]

export default function TemplateSelection(){
  const [selected, setSelected] = useState(localStorage.getItem('resume:template')||'classic')
  const navigate = useNavigate()

  function choose(id){
    setSelected(id)
    localStorage.setItem('resume:template', id)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Choose a Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map(t=> (
          <div key={t.id} className={`p-4 rounded border ${selected===t.id? 'border-blue-600':''}`}>
            <div className="h-40 bg-white flex items-center justify-center mb-3">Preview: {t.name}</div>
            <div className="flex justify-between">
              <button onClick={()=>choose(t.id)} className="px-3 py-1 border rounded">Select</button>
              <button onClick={()=>navigate('/preview')} className="px-3 py-1 bg-blue-600 text-white rounded">Preview</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
