import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const emptyExperience = () => ({ id: Date.now() + Math.random(), title:'', company:'', start:'', end:'', bullets:[''] })
const emptyEducation = () => ({ id: Date.now() + Math.random(), degree:'', institute:'', year:'' })

export default function CreateResume(){
  const navigate = useNavigate()
  const [data, setData] = useState(() => {
    try{ return JSON.parse(localStorage.getItem('resume:draft')) }catch(e){ return null }
  } || {
    personal: { fullName:'', title:'', phone:'', email:'', address:'', summary:'' },
    experiences: [ emptyExperience() ],
    education: [ emptyEducation() ],
    skills: [],
    languages: [],
    links: { portfolio:'', linkedin:'', github:'' },
    custom: []
  })

  useEffect(()=>{ localStorage.setItem('resume:draft', JSON.stringify(data)) }, [data])

  function updatePersonal(field, val){
    setData(d => ({ ...d, personal:{ ...d.personal, [field]: val } }))
  }

  function addExperience(){ setData(d => ({ ...d, experiences: [...d.experiences, emptyExperience()] })) }
  function removeExperience(id){ setData(d => ({ ...d, experiences: d.experiences.filter(e=>e.id!==id) })) }
  function updateExperience(id, field, val){ setData(d=>({ ...d, experiences: d.experiences.map(e=> e.id===id ? {...e, [field]: val} : e) })) }
  function updateBullet(id, idx, val){ setData(d=>({ ...d, experiences: d.experiences.map(e=> e.id===id ? {...e, bullets: e.bullets.map((b,i)=> i===idx ? val : b)} : e) })) }
  function addBullet(id){ setData(d=>({ ...d, experiences: d.experiences.map(e=> e.id===id ? {...e, bullets:[...e.bullets,'']} : e) })) }
  function removeBullet(id, idx){ setData(d=>({ ...d, experiences: d.experiences.map(e=> e.id===id ? {...e, bullets: e.bullets.filter((_,i)=>i!==idx)} : e) })) }

  function addEducation(){ setData(d => ({ ...d, education: [...d.education, emptyEducation()] })) }
  function removeEducation(id){ setData(d => ({ ...d, education: d.education.filter(e=>e.id!==id) })) }
  function updateEducation(id, field, val){ setData(d=>({ ...d, education: d.education.map(e=> e.id===id ? {...e, [field]: val} : e) })) }

  function addSkill(tag){ if(!tag) return; setData(d=>({ ...d, skills: [...d.skills, tag] })) }
  function removeSkill(idx){ setData(d=>({ ...d, skills: d.skills.filter((_,i)=>i!==idx) })) }

  function addLanguage(lang){ if(!lang) return; setData(d=>({ ...d, languages: [...d.languages, lang] })) }
  function removeLanguage(idx){ setData(d=>({ ...d, languages: d.languages.filter((_,i)=>i!==idx) })) }

  function saveDraftAsResume(){
    const saved = JSON.parse(localStorage.getItem('resume:saved')||'[]')
    const id = 'r_'+Date.now()
    saved.unshift({ id, created: Date.now(), data })
    localStorage.setItem('resume:saved', JSON.stringify(saved))
    navigate('/dashboard')
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Create Resume</h2>

      <section className="mb-6 bg-white p-4 rounded shadow-sm">
        <h3 className="font-medium mb-2">Personal Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input value={data.personal.fullName} onChange={e=>updatePersonal('fullName', e.target.value)} placeholder="Full Name" className="input" />
          <input value={data.personal.title} onChange={e=>updatePersonal('title', e.target.value)} placeholder="Job Title" className="input" />
          <input value={data.personal.phone} onChange={e=>updatePersonal('phone', e.target.value)} placeholder="Phone" className="input" />
          <input value={data.personal.email} onChange={e=>updatePersonal('email', e.target.value)} placeholder="Email" className="input" />
          <input value={data.personal.address} onChange={e=>updatePersonal('address', e.target.value)} placeholder="Address" className="input col-span-1 md:col-span-2" />
          <textarea value={data.personal.summary} onChange={e=>updatePersonal('summary', e.target.value)} placeholder="Summary/About Me" className="input col-span-1 md:col-span-2" />
        </div>
      </section>

      <section className="mb-6">
        <h3 className="font-medium mb-2">Experience</h3>
        <div className="space-y-4">
          {data.experiences.map((exp, idx)=> (
            <div key={exp.id} className="bg-white p-4 rounded shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <strong>Experience #{idx+1}</strong>
                <button className="text-sm text-red-600" onClick={()=>removeExperience(exp.id)}>Remove</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input value={exp.title} onChange={e=>updateExperience(exp.id,'title', e.target.value)} placeholder="Job Title" className="input" />
                <input value={exp.company} onChange={e=>updateExperience(exp.id,'company', e.target.value)} placeholder="Company" className="input" />
                <input value={exp.start} onChange={e=>updateExperience(exp.id,'start', e.target.value)} placeholder="Start (e.g., Jan 2020)" className="input" />
                <input value={exp.end} onChange={e=>updateExperience(exp.id,'end', e.target.value)} placeholder="End (e.g., Present)" className="input" />
              </div>
              <div className="mt-3">
                <label className="block mb-1 font-sm">Responsibilities</label>
                {exp.bullets.map((b,i)=> (
                  <div key={i} className="flex gap-2 mb-2">
                    <input value={b} onChange={e=>updateBullet(exp.id,i,e.target.value)} className="input flex-1" placeholder={`Bullet ${i+1}`} />
                    <button onClick={()=>removeBullet(exp.id,i)} className="px-2 text-red-600">x</button>
                  </div>
                ))}
                <button onClick={()=>addBullet(exp.id)} className="mt-1 text-sm text-blue-600">+ Add bullet</button>
              </div>
            </div>
          ))}
          <button onClick={addExperience} className="px-3 py-2 bg-gray-100 rounded">+ Add Experience</button>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="font-medium mb-2">Education</h3>
        <div className="space-y-3">
          {data.education.map((ed, idx)=> (
            <div key={ed.id} className="bg-white p-3 rounded shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <strong>Education #{idx+1}</strong>
                <button className="text-red-600" onClick={()=>removeEducation(ed.id)}>Remove</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input value={ed.degree} onChange={e=>updateEducation(ed.id,'degree', e.target.value)} placeholder="Degree" className="input" />
                <input value={ed.institute} onChange={e=>updateEducation(ed.id,'institute', e.target.value)} placeholder="Institute" className="input" />
                <input value={ed.year} onChange={e=>updateEducation(ed.id,'year', e.target.value)} placeholder="Passing Year" className="input" />
              </div>
            </div>
          ))}
          <button onClick={addEducation} className="px-3 py-2 bg-gray-100 rounded">+ Add Education</button>
        </div>
      </section>

      <section className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <h4 className="font-medium mb-2">Skills</h4>
          <SkillInput skills={data.skills} onAdd={tag=>addSkill(tag)} onRemove={i=>removeSkill(i)} />
        </div>
        <div className="bg-white p-4 rounded shadow-sm">
          <h4 className="font-medium mb-2">Languages</h4>
          <LanguageInput languages={data.languages} onAdd={l=>addLanguage(l)} onRemove={i=>removeLanguage(i)} />
        </div>
      </section>

      <section className="mb-6 bg-white p-4 rounded shadow-sm">
        <h4 className="font-medium mb-2">Links</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input value={data.links.portfolio} onChange={e=>setData(d=>({...d,links:{...d.links,portfolio:e.target.value}}))} placeholder="Portfolio URL" className="input" />
          <input value={data.links.linkedin} onChange={e=>setData(d=>({...d,links:{...d.links,linkedin:e.target.value}}))} placeholder="LinkedIn" className="input" />
          <input value={data.links.github} onChange={e=>setData(d=>({...d,links:{...d.links,github:e.target.value}}))} placeholder="GitHub" className="input" />
        </div>
      </section>

      <div className="flex gap-3 mb-6">
        <button onClick={()=>navigate('/preview')} className="px-4 py-2 bg-blue-600 text-white rounded">Preview</button>
        <button onClick={saveDraftAsResume} className="px-4 py-2 border rounded">Save to Dashboard</button>
      </div>
    </div>
  )
}

function SkillInput({ skills, onAdd, onRemove }){
  const [val,setVal] = useState('')
  return (
    <div>
      <div className="flex gap-2">
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Type skill and press Enter" className="input flex-1" onKeyDown={e=>{ if(e.key==='Enter'){ e.preventDefault(); onAdd(val); setVal('') } }} />
        <button className="px-3 py-2 bg-gray-100 rounded" onClick={()=>{ onAdd(val); setVal('') }}>Add</button>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.map((s,i)=> <span key={i} className="px-2 py-1 bg-gray-200 rounded flex items-center gap-2">{s} <button onClick={()=>onRemove(i)} className="text-red-600">x</button></span>)}
      </div>
    </div>
  )
}

function LanguageInput({ languages, onAdd, onRemove }){
  const [val,setVal] = useState('')
  return (
    <div>
      <div className="flex gap-2">
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Add language and press Enter" className="input flex-1" onKeyDown={e=>{ if(e.key==='Enter'){ e.preventDefault(); onAdd(val); setVal('') } }} />
        <button className="px-3 py-2 bg-gray-100 rounded" onClick={()=>{ onAdd(val); setVal('') }}>Add</button>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {languages.map((s,i)=> <span key={i} className="px-2 py-1 bg-gray-200 rounded flex items-center gap-2">{s} <button onClick={()=>onRemove(i)} className="text-red-600">x</button></span>)}
      </div>
    </div>
  )
}
