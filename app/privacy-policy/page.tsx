import React from 'react';
import Hero from '../components/Hero';

export default function PrivacyPolicy() {
  const heroTitle = (
    <>
      Privacy <span className="highlight bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">Policy</span>
    </>
  );

  const heroSubtitle = 'Jaynex IT is committed to protecting your privacy. Please read our Privacy Policy carefully.';

  return (
    <>
      <Hero 
        title={heroTitle} 
        subtitle={heroSubtitle} 
        singleColumn={true}
        className="py-16 md:py-20" // Reduced height
      />
      
      <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Header Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.586-3.414A2 2 0 0118 7.828V6a2 2 0 00-2-2H8a2 2 0 00-2 2v1.828a2 2 0 01-.586 1.414L4 10.828V16a2 2 0 002 2h12a2 2 0 002-2v-5.172l-1.414-1.414z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
                <p className="text-gray-600 mt-1">Last Updated: January 2025</p>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 leading-relaxed">
                Jaynex IT ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">2.1</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Name, email address, phone number',
                    'Company information and job title',
                    'Billing and payment information',
                    'Project requirements and communications'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Technical Information
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'IP addresses and browser information',
                    'Website usage data and analytics',
                    'Cookies and similar tracking technologies'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Project Information
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Files, content, and materials you provide',
                    'Communications regarding your projects',
                    'Feedback and review information'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">2.2</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Provide and improve our services',
                'Communicate about your projects',
                'Process payments and billing',
                'Send important service updates',
                'Analyze website performance and user experience',
                'Comply with legal obligations'
              ].map((use, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{use}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Information Sharing */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">2.3</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Information Sharing</h2>
            </div>
            
            <p className="text-gray-700 mb-4">We may share your information with:</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-gray-900">Service Providers:</span>
                  <span className="text-gray-700"> Third-party tools and platforms necessary for service delivery</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-gray-900">Legal Requirements:</span>
                  <span className="text-gray-700"> When required by law or to protect our rights</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-gray-900">Business Transfer:</span>
                  <span className="text-gray-700"> In case of merger, acquisition, or sale of assets</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">2.4</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Data Security</h2>
            </div>
            
            <p className="text-gray-700 mb-4">We implement appropriate security measures including:</p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Encrypted data transmission and storage',
                'Regular security audits and updates',
                'Limited access to personal information',
                'Secure payment processing systems'
              ].map((security, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.586-3.414A2 2 0 0118 7.828V6a2 2 0 00-2-2H8a2 2 0 00-2 2v1.828a2 2 0 01-.586 1.414L4 10.828V16a2 2 0 002 2h12a2 2 0 002-2v-5.172l-1.414-1.414z" />
                  </svg>
                  <span className="text-gray-700">{security}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">2.5</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Your Rights</h2>
            </div>
            
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Access your personal information',
                'Correct inaccurate information',
                'Request deletion of your data',
                'Opt-out of marketing communications',
                'Data portability (where applicable)'
              ].map((right, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-teal-50 border border-teal-200 rounded-lg">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-gray-700">{right}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cookies and Tracking */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">2.6</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Cookies and Tracking</h2>
            </div>
            
            <p className="text-gray-700 mb-4">We use cookies to:</p>
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {[
                'Remember your preferences',
                'Analyze website traffic',
                'Improve user experience',
                'Enable certain website features'
              ].map((cookie, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">{cookie}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                You can control cookie settings through your browser preferences.
              </p>
            </div>
          </div>

          {/* Remaining Sections */}
          <div className="space-y-8">
            {/* Data Retention */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">2.7</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Data Retention</h2>
              </div>
              
              <p className="text-gray-700 mb-4">We retain your information for:</p>
              <div className="space-y-3">
                {[
                  { label: 'Active projects', duration: 'Duration of project plus 2 years' },
                  { label: 'Financial records', duration: '7 years for tax purposes' },
                  { label: 'Marketing communications', duration: 'Until you unsubscribe' }
                ].map((retention, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-pink-50 border border-pink-200 rounded-lg">
                    <svg className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">{retention.label}:</span>
                      <span className="text-gray-700"> {retention.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* International Data Transfers */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">2.8</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">International Data Transfers</h2>
              </div>
              
              <p className="text-gray-700 bg-cyan-50 border border-cyan-200 p-4 rounded-lg">
                If you're located outside [Your Country], your information may be transferred to and processed in [Your Country] where our servers are located.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-violet-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">2.9</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Children's Privacy</h2>
              </div>
              
              <p className="text-gray-700 bg-violet-50 border border-violet-200 p-4 rounded-lg">
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">2.10</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Changes to This Policy</h2>
              </div>
              
              <p className="text-gray-700 bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
                We may update this Privacy Policy periodically. We'll notify you of significant changes via email or website notice.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-slate-500 to-slate-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">2.11</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Contact Information</h2>
              </div>
              
              <p className="text-gray-700 mb-4">For privacy-related questions, contact us at:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-700">jaynex.tech28@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-700">+92 319 0409030</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-700">The Platform 2nd Floor, Hariyanwala Chowk, D Ground, People Colony #1, Faisalabad, PUNJAB, PAKISTAN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Privacy Questions?</h3>
              <p className="text-green-100 mb-4">
                If you have any questions about our privacy practices, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:jaynex.tech28@gmail.com" className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Email our Team
                </a>
                <a href="/contact" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}