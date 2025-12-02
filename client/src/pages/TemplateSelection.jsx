import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ResumePreview from '../templates/ResumePreview'

const templates = [
  { id:'classic', name:'Classic Professional', desc:'Clean and professional' },
  { id:'modern', name:'Modern Sidebar', desc:'Modern with sidebar design' },
  { id:'two-column', name:'Two-Column', desc:'Professional two-column layout' },
  { id:'minimal', name:'Minimalist', desc:'Elegant and minimal' },
  { id:'dark', name:'Dark Modern', desc:'Dark theme with accent colors' }
]

export default function TemplateSelection(){
  const [selected, setSelected] = useState(localStorage.getItem('resume:template')||'classic')
  const navigate = useNavigate()
  const sampleData = {
    personal: { fullName: 'Ishaan Agarwal', title: 'Full Stack Developer', phone: '+91-9876543210', email: 'ishaan@example.com', address: 'Delhi, India', summary: 'Experienced developer with 5+ years in web technologies' },
    experiences: [
      { id: 1, title: 'Senior Developer', company: 'Tech Corp', start: 'Jan 2022', end: 'Present', bullets: ['Led development team', 'Architected scalable solutions'] },
      { id: 2, title: 'Developer', company: 'StartUp Inc', start: 'Jun 2020', end: 'Dec 2021', bullets: ['Built full-stack applications', 'Improved performance by 40%'] }
    ],
    education: [
      { id: 1, degree: 'B.Tech Computer Science', institute: 'IIT Delhi', year: '2020' }
    ],
    skills: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'TypeScript', 'AWS'],
    languages: ['English', 'Hindi'],
    links: { portfolio: '', linkedin: '', github: '' }
  }

  function choose(id){
    setSelected(id)
    localStorage.setItem('resume:template', id)
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">Choose Your Resume Template</h2>
      <p className="text-gray-600 mb-6">Select a professional template for your resume</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Templates List */}
        <div className="space-y-3">
          {templates.map(t=> (
            <div key={t.id} className={`p-4 rounded-lg border-2 cursor-pointer transition ${selected===t.id? 'border-blue-600 bg-blue-50':'border-gray-200 bg-white hover:border-gray-300'}`}>
              <div className="flex justify-between items-start">
                <div className="flex-1" onClick={()=>choose(t.id)}>
                  <h3 className="font-semibold text-gray-800">{t.name}</h3>
                  <p className="text-sm text-gray-600">{t.desc}</p>
                </div>
                <button onClick={()=>choose(t.id)} className={`px-4 py-2 rounded text-sm font-medium transition ${selected===t.id? 'bg-blue-600 text-white':'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                  {selected===t.id ? '✓ Selected' : 'Select'}
                </button>
              </div>
            </div>
          ))}
          
          <div className="mt-8 flex gap-3">
            <button onClick={()=>navigate('/create')} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Back to Editor</button>
            <button onClick={()=>navigate('/preview')} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">View Preview</button>
          </div>
        </div>

        {/* Preview */}
        <div className="border rounded-lg overflow-hidden bg-gray-50 p-2 sticky top-4 h-fit">
          <div className="bg-white rounded text-xs overflow-y-auto" style={{maxHeight: '600px'}}>
            <ResumePreview data={sampleData} template={selected} />
          </div>
        </div>
      </div>
    </div>
  )
}
