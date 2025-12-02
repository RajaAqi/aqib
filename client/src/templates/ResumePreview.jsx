import React from 'react'

export default function ResumePreview({ data, template='classic' }){
  const p = data.personal || {}
  const experiences = data.experiences || []
  const education = data.education || []
  const skills = data.skills || []
  const languages = data.languages || []

  const tplClass = {
    classic: 'template-classic',
    modern: 'template-modern',
    blue: 'template-blue',
    'two-column': 'template-two-column',
    minimal: 'template-minimal',
    dark: 'template-dark'
  }[template] || 'template-classic'

  return (
    <div className={`max-w-3xl mx-auto text-sm leading-relaxed ${tplClass}`}>
      <header className="mb-4">
        <h1 className="text-2xl font-bold">{p.fullName || 'Your Name'}</h1>
        <div className="text-gray-600">{p.title}</div>
        <div className="text-xs text-gray-500 mt-1">{p.phone} • {p.email} {p.address && '• '+p.address}</div>
      </header>

      {p.summary && <section className="mb-4">
        <h4 className="font-semibold">Summary</h4>
        <p>{p.summary}</p>
      </section>}

      <section className="mb-4">
        <h4 className="font-semibold">Experience</h4>
        {experiences.map((e, i)=> (
          <div key={i} className="mb-2">
            <div className="flex justify-between">
              <div>
                <div className="font-medium">{e.title} — {e.company}</div>
                <div className="text-xs text-gray-500">{e.start} — {e.end}</div>
              </div>
            </div>
            <ul className="list-disc pl-5 mt-1">
              {(e.bullets || []).map((b,bi)=> <li key={bi}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-4">
        <h4 className="font-semibold">Education</h4>
        {education.map((ed,i)=> (
          <div key={i} className="mb-1">
            <div className="font-medium">{ed.degree} — {ed.institute}</div>
            <div className="text-xs text-gray-500">{ed.year}</div>
          </div>
        ))}
      </section>

      {(skills.length>0 || languages.length>0) && <section className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold">Skills</h4>
          <div className="flex flex-wrap gap-2 mt-1">
            {skills.map((s,i)=> <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs">{s}</span>)}
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Languages</h4>
          <div className="flex flex-wrap gap-2 mt-1">
            {languages.map((l,i)=> <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs">{l}</span>)}
          </div>
        </div>
      </section>}

      <footer className="text-xs text-gray-500 mt-6">Generated with Resume Builder</footer>
    </div>
  )
}
