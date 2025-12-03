import React, { useState } from 'react'

export default function Help(){
  const [expandedFaq, setExpandedFaq] = useState(null)

  const faqItems = [
    {
      id: 1,
      category: 'Getting Started',
      q: 'How do I create my first resume?',
      a: 'Click the "Create Resume" button on the home page. Fill in your personal information, education, experience, and skills. Choose a template you like, then preview and download your resume as a PDF!'
    },
    {
      id: 2,
      category: 'Getting Started',
      q: 'Can I save my resume and edit it later?',
      a: 'Yes! Your resume is automatically saved to your browser\'s local storage. You can edit it anytime from your Dashboard. Click "Edit" next to any saved resume to continue editing.'
    },
    {
      id: 3,
      category: 'Templates',
      q: 'How many resume templates are available?',
      a: 'We offer 5 professionally designed templates: Classic, Modern, Two-Column, Minimalist, and Dark Modern. Each template is fully responsive and print-ready.'
    },
    {
      id: 4,
      category: 'Templates',
      q: 'Can I customize the template colors?',
      a: 'Currently, each template has fixed professional colors. You can download the PDF and edit it in other tools if you need custom colors. We\'re working on color customization for future updates!'
    },
    {
      id: 5,
      category: 'Export & PDF',
      q: 'What file formats can I export to?',
      a: 'You can export your resume as a PDF (recommended) or Word Document (.docx). PDFs maintain formatting best and are universally accepted by recruiters and ATS systems.'
    },
    {
      id: 6,
      category: 'Export & PDF',
      q: 'Is the PDF formatted for A4 paper size?',
      a: 'Yes! All PDFs are generated in A4 format (210mm × 297mm) with 12mm margins, which is the standard for international applications. Perfect for printing or digital submissions.'
    },
    {
      id: 7,
      category: 'Features',
      q: 'Can I add multiple languages to my resume?',
      a: 'Absolutely! In the resume creation form, you can add multiple languages and specify your proficiency level (Basic, Conversational, Fluent, or Native) for each one.'
    },
    {
      id: 8,
      category: 'Features',
      q: 'How do I add certifications and achievements?',
      a: 'Scroll to the Certifications section in the resume form to add professional certifications, training, or achievements. You can add as many as needed and they\'ll appear in your resume template.'
    },
    {
      id: 9,
      category: 'Data & Privacy',
      q: 'Where is my data stored?',
      a: 'All your resume data is stored locally in your browser\'s storage. We do NOT send any of your information to external servers. Your data is completely private and secure.'
    },
    {
      id: 10,
      category: 'Data & Privacy',
      q: 'What happens if I clear my browser data?',
      a: 'Your saved resumes are stored in browser local storage. If you clear cookies/cache, your data will be deleted. We recommend exporting your resume as a PDF for backup.'
    },
    {
      id: 11,
      category: 'Troubleshooting',
      q: 'My resume didn\'t save. What should I do?',
      a: 'Try refreshing the page. If the problem persists, check that your browser hasn\'t disabled JavaScript. Also check if you have enough storage space (browser local storage quota is usually 5-10MB).'
    },
    {
      id: 12,
      category: 'Troubleshooting',
      q: 'The PDF looks different than the preview',
      a: 'This can happen due to browser rendering differences. Try using a different browser or clearing cache. If sections overlap, reduce the font size or use a different template.'
    }
  ]

  const categories = ['All', ...new Set(faqItems.map(item => item.category))]
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredFaqs = selectedCategory === 'All' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">❓ Help & FAQ</h1>
      <p className="text-gray-600 mb-8">Find answers to common questions about Resume Builder</p>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-4 mb-12">
        {filteredFaqs.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => setExpandedFaq(expandedFaq === item.id ? null : item.id)}
              className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
            >
              <div className="text-left">
                <div className="text-sm text-blue-600 font-semibold">{item.category}</div>
                <div className="text-lg font-bold text-gray-800">{item.q}</div>
              </div>
              <span className="text-2xl ml-4">{expandedFaq === item.id ? '−' : '+'}</span>
            </button>

            {expandedFaq === item.id && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-blue-200 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">💬 Still Have Questions?</h2>
        <p className="text-gray-700 mb-6">
          Can't find what you're looking for? Reach out to our support team and we'll be happy to help!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            📧 Email Support
          </button>
          <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
            💬 Live Chat
          </button>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-4xl mb-4">📖</div>
          <h3 className="font-bold text-gray-800 mb-2">Video Tutorials</h3>
          <p className="text-gray-600 text-sm mb-4">Learn how to use Resume Builder with step-by-step video guides</p>
          <button className="text-blue-600 font-semibold hover:underline">Watch Videos →</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-4xl mb-4">🎓</div>
          <h3 className="font-bold text-gray-800 mb-2">Best Practices</h3>
          <p className="text-gray-600 text-sm mb-4">Tips and tricks to create a resume that gets interviews</p>
          <button className="text-blue-600 font-semibold hover:underline">Learn More →</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-4xl mb-4">🐛</div>
          <h3 className="font-bold text-gray-800 mb-2">Report a Bug</h3>
          <p className="text-gray-600 text-sm mb-4">Found an issue? Help us improve by reporting it</p>
          <button className="text-blue-600 font-semibold hover:underline">Report Bug →</button>
        </div>
      </div>

      {/* Status & Performance */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-6">📊 System Status</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Application Status</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">🟢 All Systems Operational</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Local Storage</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">🟢 Available</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">PDF Export</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">🟢 Working</span>
          </div>
        </div>
      </div>
    </div>
  )
}
