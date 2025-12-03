import React, { useRef } from 'react'
import ResumePreview from '../templates/ResumePreview'
import { useNavigate } from 'react-router-dom'
import html2pdf from 'html2pdf.js'

export default function Preview(){
  const data = JSON.parse(localStorage.getItem('resume:draft') || JSON.stringify({}))
  const template = localStorage.getItem('resume:template') || 'classic'
  const ref = useRef()
  const navigate = useNavigate()

  function exportPdf(){
    if(!ref.current) return
    const opt = {
      margin:       0.5,
      filename:     `${(data?.personal?.fullName || 'resume').replace(/\s+/g,'_')}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      // Use A4 paper size for CV exports
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    }
    try{
      html2pdf().set(opt).from(ref.current).save()
    }catch(e){
      console.error('PDF export failed', e)
      alert('PDF export failed. Check console for details.')
    }
  }

  if(!data || !data.personal) return (
    <div className="max-w-3xl mx-auto text-center py-12">
      <p className="text-gray-600">No resume data found. Please create your resume first.</p>
      <div className="mt-4"><button onClick={()=>navigate('/create')} className="px-4 py-2 bg-blue-600 text-white rounded">Create Resume</button></div>
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex gap-4 mb-4">
        <button onClick={()=>navigate('/templates')} className="px-3 py-2 border rounded">Change Template</button>
        <button onClick={exportPdf} className="px-3 py-2 bg-green-600 text-white rounded">Export as PDF</button>
      </div>

      <div ref={ref} className="resume-container">
        <ResumePreview data={data} template={template} />
      </div>
    </div>
  )
}
