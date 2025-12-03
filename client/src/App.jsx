import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateResume from './pages/CreateResume'
import TemplateSelection from './pages/TemplateSelection'
import Preview from './pages/Preview'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import Help from './pages/Help'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<CreateResume/>} />
          <Route path="/templates" element={<TemplateSelection/>} />
          <Route path="/preview" element={<Preview/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/help" element={<Help/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
