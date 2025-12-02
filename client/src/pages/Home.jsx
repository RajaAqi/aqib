import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Build Your Resume in Minutes</h1>
        <p className="text-lg text-gray-600 mb-6">Fast, beautiful, and ATS-friendly resume templates. Create, preview, and export to PDF.</p>
        <div className="space-x-4">
          <Link to="/create" className="px-6 py-3 bg-blue-600 text-white rounded">Create Resume</Link>
          <Link to="/templates" className="px-6 py-3 border rounded">Choose Template</Link>
        </div>

        <section className="mt-12 text-left">
          <h2 className="text-2xl font-semibold mb-3">Features</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Dynamic form builder — add multiple experiences, education entries, skills, languages.</li>
            <li>5 professional templates with live preview.</li>
            <li>Export as PDF using client-side HTML→PDF.</li>
            <li>Save resumes locally in your browser dashboard.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
