import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateResume from './pages/CreateResume'
import TemplateSelection from './pages/TemplateSelection'
import Preview from './pages/Preview'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<CreateResume/>} />
          <Route path="/templates" element={<TemplateSelection/>} />
          <Route path="/preview" element={<Preview/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
