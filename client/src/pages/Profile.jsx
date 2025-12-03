import React, { useState } from 'react'

export default function Profile(){
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('resume:profile')
    return saved ? JSON.parse(saved) : {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '+1-234-567-8900'
    }
  })

  const [passwordForm, setPasswordForm] = useState({
    current: '',
    new: '',
    confirm: ''
  })

  const [showPassword, setShowPassword] = useState(false)

  const updateProfile = (e) => {
    const { name, value } = e.target
    const updated = { ...profile, [name]: value }
    setProfile(updated)
    localStorage.setItem('resume:profile', JSON.stringify(updated))
  }

  const handlePasswordChange = (e) => {
    e.preventDefault()
    
    if(passwordForm.new !== passwordForm.confirm) {
      alert('❌ Passwords do not match!')
      return
    }
    
    if(passwordForm.new.length < 8) {
      alert('❌ Password must be at least 8 characters')
      return
    }

    // Simulate password change
    alert('✅ Password changed successfully!')
    setPasswordForm({ current: '', new: '', confirm: '' })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">👤 Your Profile</h1>
      <p className="text-gray-600 mb-8">Manage your account information</p>

      <div className="space-y-6">
        {/* Personal Information */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">📋 Personal Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
              <input 
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={updateProfile}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
              <input 
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={updateProfile}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input 
                type="email"
                name="email"
                value={profile.email}
                onChange={updateProfile}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={updateProfile}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-50 rounded-lg text-sm text-green-700">
            ✅ Profile updated automatically
          </div>
        </div>

        {/* Account Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-sm text-gray-700">📄 Resumes Created</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">3</div>
            <div className="text-sm text-gray-700">📌 Starred Resumes</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
            <div className="text-sm text-gray-700">💾 Templates Used</div>
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">🔐 Change Password</h2>
          
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Current Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  value={passwordForm.current}
                  onChange={(e) => setPasswordForm({...passwordForm, current: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
              <input 
                type={showPassword ? "text" : "password"}
                value={passwordForm.new}
                onChange={(e) => setPasswordForm({...passwordForm, new: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm New Password</label>
              <input 
                type={showPassword ? "text" : "password"}
                value={passwordForm.confirm}
                onChange={(e) => setPasswordForm({...passwordForm, confirm: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <label className="flex items-center cursor-pointer">
              <input 
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Show passwords</span>
            </label>

            <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-800">
              <strong>Password requirements:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>At least 8 characters</li>
                <li>Mix of uppercase and lowercase letters</li>
                <li>At least one number</li>
              </ul>
            </div>

            <button 
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Update Password
            </button>
          </form>
        </div>

        {/* Account Actions */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">⚡ Account Actions</h2>
          
          <div className="space-y-3">
            <button className="w-full px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
              📥 Export My Data
            </button>

            <button className="w-full px-6 py-3 border-2 border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition">
              ❌ Delete Account
            </button>
          </div>
        </div>

        {/* Support */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-blue-200">
          <h2 className="text-xl font-bold text-gray-800 mb-3">💬 Need Help?</h2>
          <p className="text-gray-700 mb-4">Check our help center or contact support for account-related questions.</p>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
              📖 Help Center
            </button>
            <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50">
              ✉️ Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
