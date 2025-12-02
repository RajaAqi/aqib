import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold">Resume Builder</Link>
        <div className="space-x-4">
          <Link to="/create" className="px-3 py-2 rounded bg-blue-600 text-white">Create Resume</Link>
          <Link to="/templates" className="px-3 py-2 rounded border">Templates</Link>
          <Link to="/dashboard" className="px-3 py-2 rounded border">Dashboard</Link>
        </div>
      </div>
    </nav>
  )
}
