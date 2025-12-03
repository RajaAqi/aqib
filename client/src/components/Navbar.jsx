import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path) => {
    return location.pathname === path
  }

  const navLinks = [
    { path: '/', label: '🏠 Home' },
    { path: '/create', label: '✏️ Create' },
    { path: '/templates', label: '🎨 Templates' },
    { path: '/dashboard', label: '📊 Dashboard' },
    { path: '/help', label: '❓ Help' },
  ]

  const userLinks = [
    { path: '/profile', label: '👤 Profile' },
    { path: '/settings', label: '⚙️ Settings' },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
            <span className="text-2xl">📄</span>
            Resume Builder
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  isActive(link.path)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop User Menu */}
          <div className="hidden md:flex items-center gap-3">
            {userLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  isActive(link.path)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-gray-50 py-2">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-semibold transition ${
                  isActive(link.path)
                    ? 'bg-blue-600 text-white m-2'
                    : 'text-gray-700 hover:bg-gray-200 m-2'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="border-t my-2"></div>
            
            {userLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-semibold transition ${
                  isActive(link.path)
                    ? 'bg-blue-600 text-white m-2'
                    : 'text-gray-700 hover:bg-gray-200 m-2'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
