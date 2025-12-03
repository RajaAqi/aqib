import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard(){
  const navigate = useNavigate()
  const [resumes, setResumes] = useState(() => {
    const saved = localStorage.getItem('resume:saved') || '[]'
    return JSON.parse(saved)
  })

  const editResume = (id) => {
    const resume = resumes.find(r => r.id === id)
    if(resume) {
      localStorage.setItem('resume:draft', JSON.stringify(resume.data))
      navigate('/create')
    }
  }

  const deleteResume = (id) => {
    if(confirm('Are you sure you want to delete this resume?')) {
      setResumes(r => {
        const updated = r.filter(x => x.id !== id)
        localStorage.setItem('resume:saved', JSON.stringify(updated))
        return updated
      })
    }
  }

  const viewPreview = (id) => {
    const resume = resumes.find(r => r.id === id)
    if(resume) {
      localStorage.setItem('resume:draft', JSON.stringify(resume.data))
      navigate('/preview')
    }
  }

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-IN', { 
      year: 'numeric', month: 'short', day: 'numeric', 
      hour: '2-digit', minute: '2-digit'
    })
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">📋 My Resumes</h1>
          <p className="text-gray-600 mt-2">Manage and edit your saved resumes</p>
        </div>
        <button
          onClick={() => navigate('/create')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
        >
          ➕ Create New
        </button>
      </div>

      {resumes.length === 0 ? (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-300 rounded-lg p-12 text-center">
          <p className="text-6xl mb-4">📄</p>
          <h2 className="text-3xl font-bold mb-2 text-gray-800">No Resumes Yet</h2>
          <p className="text-gray-600 mb-8 text-lg">Create your first resume to get started. It's quick and easy!</p>
          <button
            onClick={() => navigate('/create')}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
          >
            🚀 Create Your First Resume
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume) => (
            <div key={resume.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-5 text-white">
                <h3 className="text-lg font-bold truncate">{resume.data?.personal?.fullName || 'Untitled Resume'}</h3>
                <p className="text-sm text-blue-100 truncate">{resume.data?.personal?.title || 'Job Title'}</p>
              </div>
              
              {/* Details */}
              <div className="p-5">
                <div className="mb-5 space-y-2 text-sm text-gray-700">
                  <p className="flex items-center gap-2">
                    <span>📅</span> {formatDate(resume.created)}
                  </p>
                  {resume.data?.personal?.email && (
                    <p className="flex items-center gap-2 truncate">
                      <span>📧</span> {resume.data.personal.email}
                    </p>
                  )}
                  {resume.data?.personal?.phone && (
                    <p className="flex items-center gap-2">
                      <span>📞</span> {resume.data.personal.phone}
                    </p>
                  )}
                  {resume.data?.personal?.address && (
                    <p className="flex items-center gap-2">
                      <span>📍</span> {resume.data.personal.address}
                    </p>
                  )}
                </div>

                {/* Stats */}
                <div className="border-t border-gray-200 pt-4 mb-4 flex gap-4 text-center text-xs text-gray-600">
                  <div>
                    <p className="font-bold text-gray-800">{resume.data?.experiences?.length || 0}</p>
                    <p>Experiences</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{resume.data?.education?.length || 0}</p>
                    <p>Education</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{resume.data?.skills?.length || 0}</p>
                    <p>Skills</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="border-t border-gray-200 pt-4 flex gap-2">
                  <button
                    onClick={() => viewPreview(resume.id)}
                    className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition text-sm font-medium"
                    title="View resume preview"
                  >
                    👁️ View
                  </button>
                  <button
                    onClick={() => editResume(resume.id)}
                    className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm font-medium"
                    title="Edit resume"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => deleteResume(resume.id)}
                    className="flex-1 px-3 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 transition text-sm font-medium"
                    title="Delete resume"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Stats Footer */}
      {resumes.length > 0 && (
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-center">
          <p className="text-gray-700">
            <span className="font-bold text-blue-600 text-2xl">{resumes.length}</span>
            <span className="ml-2">Resume{resumes.length !== 1 ? 's' : ''} saved</span>
          </p>
        </div>
      )}
    </div>
  )
}
