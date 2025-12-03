import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home(){
  const navigate = useNavigate()
  
  const features = [
    { icon: '⚡', title: 'Fast & Easy', desc: 'Create a professional resume in minutes' },
    { icon: '🎨', title: '5+ Templates', desc: 'Choose from modern, professional designs' },
    { icon: '📥', title: 'Download PDF', desc: 'Export as high-quality PDF instantly' },
    { icon: '💾', title: 'Auto Save', desc: 'Your data is saved automatically' },
    { icon: '🔄', title: 'Easy Edit', desc: 'Update anytime, switch templates freely' },
    { icon: '📱', title: 'Responsive', desc: 'Perfect on mobile, tablet, and desktop' }
  ]

  const testimonials = [
    { name: 'Arjun Singh', role: 'Software Engineer', text: 'Got 5 interview calls within a week using this resume!' },
    { name: 'Priya Sharma', role: 'Product Manager', text: 'Love how easy it is to customize and export. Highly recommended!' },
    { name: 'Rahul Patel', role: 'UI Designer', text: 'The templates are stunning and very professional. Best tool ever!' }
  ]

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Create Your Perfect Resume
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Stand out from the crowd with a professionally designed resume
        </p>
        <p className="text-gray-500 mb-8">Join thousands who got hired using our platform</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={()=>navigate('/create')} 
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-lg shadow-lg"
          >
            🚀 Create Resume Now
          </button>
          <button 
            onClick={()=>navigate('/templates')} 
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition text-lg"
          >
            🎨 Browse Templates
          </button>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-lg max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-12 rounded-lg text-center">
            <p className="text-4xl mb-2">📄</p>
            <p className="text-gray-700">Beautiful Resume Preview Will Appear Here</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '1', title: 'Fill Info', desc: 'Enter your details' },
            { step: '2', title: 'Choose Template', desc: 'Pick your favorite' },
            { step: '3', title: 'Customize', desc: 'Personalize it' },
            { step: '4', title: 'Export', desc: 'Download PDF' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Land Your Dream Job?</h2>
          <p className="text-blue-100 mb-8 text-lg">Start creating your resume now - it's free and takes less than 5 minutes</p>
          <button 
            onClick={()=>navigate('/create')} 
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            ✨ Create Your Resume Now
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { q: 'Is it really free?', a: 'Yes! Creating and downloading resumes is completely free.' },
            { q: 'Can I edit my resume later?', a: 'Absolutely! All your resumes are saved and can be edited anytime.' },
            { q: 'Which format does it export?', a: 'We export as PDF which is accepted by all companies.' },
            { q: 'Can I use multiple templates?', a: 'Yes, you can switch templates for the same resume instantly.' },
            { q: 'Is my data safe?', a: 'Your data is stored securely in your browser (localStorage).' },
            { q: 'Do you have mobile app?', a: 'The website is fully responsive and works great on mobile!' }
          ].map((item, i) => (
            <div key={i} className="border-b pb-6">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">❓ {item.q}</h3>
              <p className="text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
