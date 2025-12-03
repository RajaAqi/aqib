import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Resume Builder</h3>
            <p className="text-sm leading-relaxed mb-4">
              Create professional resumes in minutes with our beautiful templates and powerful editor.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="text-xl">f</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="text-xl">𝕏</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="text-xl">in</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="text-xl">📷</span>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/create" className="text-gray-400 hover:text-white transition">Create Resume</Link></li>
              <li><Link to="/templates" className="text-gray-400 hover:text-white transition">Templates</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-white transition">Dashboard</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-white transition">Help & FAQ</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Video Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Best Practices</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/profile" className="text-gray-400 hover:text-white transition">Profile</Link></li>
              <li><Link to="/settings" className="text-gray-400 hover:text-white transition">Settings</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Resume Builder. All rights reserved. Made with ❤️ for job seekers.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Contact</a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800 rounded-lg p-6 mt-8">
          <h3 className="text-white font-bold mb-2">Subscribe to our newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">Get tips and updates about resume best practices</p>
          <form className="flex flex-col md:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}
