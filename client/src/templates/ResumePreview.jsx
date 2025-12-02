import React from 'react'

export default function ResumePreview({ data, template='classic' }){
  const p = data.personal || {}
  const experiences = data.experiences || []
  const education = data.education || []
  const skills = data.skills || []
  const languages = data.languages || []

  // Template components
  const TemplateClassic = () => (
    <div className="max-w-3xl mx-auto text-sm leading-relaxed bg-white p-8">
      <header className="mb-6 border-b-2 border-gray-300 pb-4">
        <h1 className="text-3xl font-bold text-gray-800">{p.fullName || 'Your Name'}</h1>
        <p className="text-lg text-gray-600 font-semibold">{p.title || 'Professional Title'}</p>
        <div className="text-xs text-gray-600 mt-2 flex gap-3">
          {p.phone && <span>📞 {p.phone}</span>}
          {p.email && <span>📧 {p.email}</span>}
          {p.address && <span>📍 {p.address}</span>}
        </div>
      </header>

      {p.summary && <section className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Professional Summary</h3>
        <p className="text-gray-700 leading-relaxed">{p.summary}</p>
      </section>}

      <section className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-3">Experience</h3>
        {experiences.map((e, i)=> (
          <div key={i} className="mb-4">
            <div className="flex justify-between items-baseline">
              <p className="font-semibold text-gray-800">{e.title}</p>
              <span className="text-xs text-gray-500">{e.start} – {e.end}</span>
            </div>
            <p className="text-gray-600 italic">{e.company}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              {(e.bullets || []).filter(b=>b).map((b,bi)=> <li key={bi}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-3">Education</h3>
        {education.map((ed,i)=> (
          <div key={i} className="mb-3">
            <div className="flex justify-between items-baseline">
              <p className="font-semibold text-gray-800">{ed.degree}</p>
              <span className="text-xs text-gray-500">{ed.year}</span>
            </div>
            <p className="text-gray-600">{ed.institute}</p>
          </div>
        ))}
      </section>

      {skills.length>0 && <section className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((s,i)=> <span key={i} className="px-3 py-1 bg-gray-200 text-gray-800 rounded text-xs font-medium">{s}</span>)}
        </div>
      </section>}

      {languages.length>0 && <section>
        <h3 className="text-lg font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-3">Languages</h3>
        <div className="flex flex-wrap gap-2">
          {languages.map((l,i)=> <span key={i} className="px-3 py-1 bg-gray-200 text-gray-800 rounded text-xs font-medium">{l}</span>)}
        </div>
      </section>}
    </div>
  )

  const TemplateModern = () => (
    <div className="max-w-3xl mx-auto text-sm leading-relaxed bg-white flex">
      {/* Sidebar */}
      <div className="w-1/3 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">{p.fullName || 'Your Name'}</h1>
          <p className="text-blue-100 text-sm">{p.title || 'Professional Title'}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-bold uppercase mb-3 text-blue-100">Contact</h4>
          <div className="space-y-2 text-xs">
            {p.phone && <p>📞 {p.phone}</p>}
            {p.email && <p>📧 {p.email}</p>}
            {p.address && <p>📍 {p.address}</p>}
          </div>
        </div>

        {skills.length>0 && <div className="mb-6">
          <h4 className="text-sm font-bold uppercase mb-3 text-blue-100">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((s,i)=> <span key={i} className="px-2 py-1 bg-blue-500 rounded text-xs">{s}</span>)}
          </div>
        </div>}

        {languages.length>0 && <div>
          <h4 className="text-sm font-bold uppercase mb-3 text-blue-100">Languages</h4>
          <div className="space-y-1 text-xs">
            {languages.map((l,i)=> <p key={i}>{l}</p>)}
          </div>
        </div>}
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-6">
        {p.summary && <section className="mb-6">
          <h3 className="text-sm font-bold uppercase text-blue-600 mb-2">Summary</h3>
          <p className="text-gray-700 text-xs leading-relaxed">{p.summary}</p>
        </section>}

        <section className="mb-6">
          <h3 className="text-sm font-bold uppercase text-blue-600 mb-3">Experience</h3>
          {experiences.map((e, i)=> (
            <div key={i} className="mb-4">
              <div className="flex justify-between">
                <p className="font-semibold text-gray-800 text-xs">{e.title} at {e.company}</p>
                <span className="text-xs text-gray-500">{e.start} – {e.end}</span>
              </div>
              <ul className="list-disc pl-4 mt-1 text-xs text-gray-600">
                {(e.bullets || []).filter(b=>b).map((b,bi)=> <li key={bi}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h3 className="text-sm font-bold uppercase text-blue-600 mb-3">Education</h3>
          {education.map((ed,i)=> (
            <div key={i} className="mb-2">
              <p className="font-semibold text-gray-800 text-xs">{ed.degree}</p>
              <p className="text-gray-600 text-xs">{ed.institute}, {ed.year}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )

  const TemplateTwoColumn = () => (
    <div className="max-w-3xl mx-auto text-sm leading-relaxed bg-white p-8">
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-1 border-r-2 border-gray-300 pr-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">{p.fullName || 'Your Name'}</h1>
          <p className="text-xs text-blue-600 font-semibold uppercase mb-6">{p.title || 'Title'}</p>

          {(p.phone || p.email || p.address) && <div className="mb-6">
            <h4 className="text-xs font-bold uppercase text-gray-800 mb-2">Contact</h4>
            <div className="space-y-1 text-xs text-gray-600">
              {p.phone && <p>{p.phone}</p>}
              {p.email && <p>{p.email}</p>}
              {p.address && <p>{p.address}</p>}
            </div>
          </div>}

          {skills.length>0 && <div className="mb-6">
            <h4 className="text-xs font-bold uppercase text-gray-800 mb-2">Skills</h4>
            <div className="space-y-1">
              {skills.map((s,i)=> <div key={i} className="text-xs text-gray-700">• {s}</div>)}
            </div>
          </div>}

          {languages.length>0 && <div>
            <h4 className="text-xs font-bold uppercase text-gray-800 mb-2">Languages</h4>
            <div className="space-y-1">
              {languages.map((l,i)=> <div key={i} className="text-xs text-gray-700">• {l}</div>)}
            </div>
          </div>}
        </div>

        {/* Right Column */}
        <div className="col-span-2">
          {p.summary && <section className="mb-6">
            <h3 className="text-xs font-bold uppercase text-gray-800 border-b border-gray-300 pb-1 mb-2">Summary</h3>
            <p className="text-xs text-gray-700 leading-relaxed">{p.summary}</p>
          </section>}

          <section className="mb-6">
            <h3 className="text-xs font-bold uppercase text-gray-800 border-b border-gray-300 pb-1 mb-3">Experience</h3>
            {experiences.map((e, i)=> (
              <div key={i} className="mb-3">
                <div className="flex justify-between">
                  <p className="font-semibold text-gray-800 text-xs">{e.title}</p>
                  <span className="text-xs text-gray-500">{e.start}–{e.end}</span>
                </div>
                <p className="text-xs text-gray-600 mb-1">{e.company}</p>
                <ul className="list-disc pl-4 text-xs text-gray-700">
                  {(e.bullets || []).filter(b=>b).map((b,bi)=> <li key={bi}>{b}</li>)}
                </ul>
              </div>
            ))}
          </section>

          <section>
            <h3 className="text-xs font-bold uppercase text-gray-800 border-b border-gray-300 pb-1 mb-2">Education</h3>
            {education.map((ed,i)=> (
              <div key={i} className="mb-1">
                <p className="font-semibold text-gray-800 text-xs">{ed.degree}</p>
                <p className="text-xs text-gray-600">{ed.institute} • {ed.year}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  )

  const TemplateMinimal = () => (
    <div className="max-w-3xl mx-auto text-sm leading-relaxed bg-white p-10">
      <header className="mb-8">
        <h1 className="text-4xl font-light text-gray-900 tracking-tight">{p.fullName || 'Your Name'}</h1>
        <p className="text-lg text-gray-600 font-light mt-1">{p.title || 'Professional Title'}</p>
        <div className="text-xs text-gray-500 mt-3 space-x-4">
          {p.phone && <span>{p.phone}</span>}
          {p.email && <span>{p.email}</span>}
          {p.address && <span>{p.address}</span>}
        </div>
      </header>

      {p.summary && <section className="mb-8">
        <p className="text-gray-700 leading-relaxed">{p.summary}</p>
      </section>}

      {experiences.length>0 && <section className="mb-8">
        <h3 className="text-xs font-semibold uppercase text-gray-900 tracking-widest mb-4">Experience</h3>
        {experiences.map((e, i)=> (
          <div key={i} className="mb-5">
            <div className="flex justify-between items-baseline">
              <p className="font-semibold text-gray-900">{e.title}</p>
              <span className="text-xs text-gray-500">{e.start} – {e.end}</span>
            </div>
            <p className="text-gray-600 text-xs">{e.company}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 text-xs space-y-1">
              {(e.bullets || []).filter(b=>b).map((b,bi)=> <li key={bi}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>}

      {education.length>0 && <section className="mb-8">
        <h3 className="text-xs font-semibold uppercase text-gray-900 tracking-widest mb-3">Education</h3>
        {education.map((ed,i)=> (
          <div key={i} className="mb-2">
            <p className="font-semibold text-gray-900 text-xs">{ed.degree}</p>
            <p className="text-gray-600 text-xs">{ed.institute}, {ed.year}</p>
          </div>
        ))}
      </section>}

      <div className="grid grid-cols-2 gap-8">
        {skills.length>0 && <section>
          <h3 className="text-xs font-semibold uppercase text-gray-900 tracking-widest mb-2">Skills</h3>
          <div className="space-y-1">
            {skills.map((s,i)=> <p key={i} className="text-gray-700 text-xs">{s}</p>)}
          </div>
        </section>}

        {languages.length>0 && <section>
          <h3 className="text-xs font-semibold uppercase text-gray-900 tracking-widest mb-2">Languages</h3>
          <div className="space-y-1">
            {languages.map((l,i)=> <p key={i} className="text-gray-700 text-xs">{l}</p>)}
          </div>
        </section>}
      </div>
    </div>
  )

  const TemplateDark = () => (
    <div className="max-w-3xl mx-auto text-sm leading-relaxed bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <header className="mb-6 border-b border-gray-700 pb-4">
        <h1 className="text-3xl font-bold">{p.fullName || 'Your Name'}</h1>
        <p className="text-lg text-gray-300 font-semibold mt-1">{p.title || 'Professional Title'}</p>
        <div className="text-xs text-gray-400 mt-3 flex gap-3">
          {p.phone && <span>📞 {p.phone}</span>}
          {p.email && <span>📧 {p.email}</span>}
          {p.address && <span>📍 {p.address}</span>}
        </div>
      </header>

      {p.summary && <section className="mb-6">
        <h3 className="text-sm font-bold uppercase text-cyan-400 mb-2">Summary</h3>
        <p className="text-gray-300 leading-relaxed">{p.summary}</p>
      </section>}

      <section className="mb-6">
        <h3 className="text-sm font-bold uppercase text-cyan-400 mb-3">Experience</h3>
        {experiences.map((e, i)=> (
          <div key={i} className="mb-4 border-l-2 border-cyan-400 pl-4">
            <div className="flex justify-between">
              <p className="font-semibold text-white">{e.title}</p>
              <span className="text-xs text-gray-400">{e.start} – {e.end}</span>
            </div>
            <p className="text-gray-400 text-xs mb-2">{e.company}</p>
            <ul className="list-disc pl-4 text-gray-300 text-xs">
              {(e.bullets || []).filter(b=>b).map((b,bi)=> <li key={bi}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h3 className="text-sm font-bold uppercase text-cyan-400 mb-3">Education</h3>
        {education.map((ed,i)=> (
          <div key={i} className="mb-2 border-l-2 border-cyan-400 pl-4">
            <p className="font-semibold text-white">{ed.degree}</p>
            <p className="text-gray-400 text-xs">{ed.institute}, {ed.year}</p>
          </div>
        ))}
      </section>

      {(skills.length>0 || languages.length>0) && <div className="grid grid-cols-2 gap-6">
        {skills.length>0 && <section>
          <h3 className="text-sm font-bold uppercase text-cyan-400 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((s,i)=> <span key={i} className="px-2 py-1 bg-cyan-900 text-cyan-100 rounded text-xs">{s}</span>)}
          </div>
        </section>}

        {languages.length>0 && <section>
          <h3 className="text-sm font-bold uppercase text-cyan-400 mb-2">Languages</h3>
          <div className="space-y-1">
            {languages.map((l,i)=> <p key={i} className="text-gray-300 text-xs">{l}</p>)}
          </div>
        </section>}
      </div>}
    </div>
  )

  // Template selector
  const templates = {
    classic: <TemplateClassic />,
    modern: <TemplateModern />,
    'two-column': <TemplateTwoColumn />,
    minimal: <TemplateMinimal />,
    dark: <TemplateDark />
  }

  return (
    <div className="max-w-5xl mx-auto text-sm leading-relaxed">
      {templates[template] || templates.classic}
    </div>
  )
}
