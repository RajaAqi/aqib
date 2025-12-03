import React, { useState } from 'react'

export default function Settings(){
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('resume:settings')
    return saved ? JSON.parse(saved) : {
      theme: 'light',
      language: 'en',
      autoSave: true,
      notifications: true,
      exportFormat: 'pdf'
    }
  })

  const updateSetting = (key, value) => {
    const updated = { ...settings, [key]: value }
    setSettings(updated)
    localStorage.setItem('resume:settings', JSON.stringify(updated))
  }

  const clearAllData = () => {
    if(confirm('⚠️ WARNING: This will delete all your saved resumes and settings. Are you absolutely sure?')) {
      localStorage.clear()
      alert('All data cleared!')
      window.location.reload()
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">⚙️ Settings</h1>
      <p className="text-gray-600 mb-8">Customize your resume builder experience</p>

      <div className="space-y-6">
        {/* Appearance Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">🎨 Appearance</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Theme</label>
              <select 
                value={settings.theme}
                onChange={(e) => updateSetting('theme', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="light">☀️ Light</option>
                <option value="dark">🌙 Dark</option>
                <option value="auto">🔄 Auto (System)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Language Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">🌐 Language</h2>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Language</label>
            <select 
              value={settings.language}
              onChange={(e) => updateSetting('language', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="en">🇺🇸 English</option>
              <option value="hi">🇮🇳 Hindi</option>
              <option value="es">🇪🇸 Spanish</option>
              <option value="fr">🇫🇷 French</option>
              <option value="de">🇩🇪 German</option>
            </select>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">✨ Features</h2>
          
          <div className="space-y-3">
            <label className="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={settings.autoSave}
                onChange={(e) => updateSetting('autoSave', e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded"
              />
              <span className="ml-3 text-gray-700">💾 Auto-save draft as I type</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={settings.notifications}
                onChange={(e) => updateSetting('notifications', e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded"
              />
              <span className="ml-3 text-gray-700">🔔 Enable notifications</span>
            </label>
          </div>
        </div>

        {/* Export Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">📥 Export Settings</h2>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Default Export Format</label>
            <select 
              value={settings.exportFormat}
              onChange={(e) => updateSetting('exportFormat', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="pdf">📄 PDF (Recommended)</option>
              <option value="docx">📝 Word (.docx)</option>
            </select>
          </div>
        </div>

        {/* Data & Privacy */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">🔒 Data & Privacy</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Your data is safe:</strong> All resumes are stored locally in your browser. We never send your data to any server.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">📊 Storage Info</h3>
              <p className="text-sm text-gray-600">
                Storage used: <span className="font-bold">{(JSON.stringify(localStorage).length / 1024).toFixed(2)} KB</span> of ~5 MB available
              </p>
            </div>

            <button 
              onClick={clearAllData}
              className="w-full px-4 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
            >
              🗑️ Clear All Data (Dangerous)
            </button>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">ℹ️ About</h2>
          
          <div className="space-y-3 text-gray-700">
            <p><strong>Resume Builder</strong> v1.0</p>
            <p>Create professional resumes with 5+ beautiful templates.</p>
            <p>© 2025 - Made with ❤️ for job seekers</p>
          </div>
        </div>
      </div>
    </div>
  )
}
