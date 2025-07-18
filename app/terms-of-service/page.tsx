import React from 'react';
import Hero from '../components/Hero';

export default function TermsOfService() {
  const heroTitle = (
    <>
      Terms of <span className="highlight bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">Service</span>
    </>
  );

  const heroSubtitle = 'Welcome to Jaynex IT. Please read our Terms of Service carefully.';

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
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Terms of Service</h1>
                <p className="text-gray-600 mt-1">Last Updated: January 2025</p>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 leading-relaxed">
                These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">1.1</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">About Our Services</h2>
            </div>
            
            <p className="text-gray-700 mb-4">Jaynex IT provides:</p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Web Development Services',
                'UI/UX Design',
                'Web Content Writing',
                'Social Media Management',
                'Digital Media Management',
                'Business Development Services'
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Agreement Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">1.2</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Service Agreement</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Project Scope
                </h3>
                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">
                  All projects require a detailed scope of work document signed by both parties before commencement.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Payment Terms
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    '50% advance payment required for all projects',
                    'Remaining balance due upon project completion',
                    'Payment terms: Net 30 days from invoice date',
                    'Late payments may incur 1.5% monthly service charge'
                  ].map((term, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{term}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Timelines
                </h3>
                <div className="space-y-2">
                  {[
                    'Project timelines are estimates and may vary based on client feedback and revisions',
                    'Delays caused by client feedback or content provision may extend delivery dates',
                    'Force majeure events may affect delivery schedules'
                  ].map((timeline, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{timeline}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Client Responsibilities */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">1.3</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Client Responsibilities</h2>
            </div>
            
            <p className="text-gray-700 mb-4">You agree to:</p>
            <div className="grid gap-3">
              {[
                'Provide accurate project requirements and necessary materials',
                'Respond to communications within 48 hours during business days',
                'Provide timely feedback and approvals',
                'Ensure all provided content is original or properly licensed',
                'Make payments according to agreed terms'
              ].map((responsibility, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{responsibility}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">1.4</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Intellectual Property</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  Client Content
                </h3>
                <p className="text-gray-700 bg-green-50 border border-green-200 p-4 rounded-lg">
                  You retain ownership of all content, trademarks, and materials you provide.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  Our Work Product
                </h3>
                <p className="text-gray-700 mb-3">Upon full payment, you receive ownership of the final deliverables, excluding:</p>
                <div className="grid gap-2">
                  {[
                    'Third-party components, plugins, or frameworks',
                    'Our proprietary methodologies and processes',
                    'Any code or designs we use across multiple projects'
                  ].map((exclusion, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{exclusion}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  Portfolio Rights
                </h3>
                <p className="text-gray-700 bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  We reserve the right to showcase completed work in our portfolio and marketing materials.
                </p>
              </div>
            </div>
          </div>

          {/* Remaining Sections with Improved Styling */}
          <div className="space-y-8">
            {/* Revisions and Changes */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">1.5</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Revisions and Changes</h2>
              </div>
              
              <div className="grid gap-3">
                {[
                  'Minor revisions are included as specified in project scope',
                  'Major changes may require additional fees and timeline adjustments',
                  'Change requests must be submitted in writing'
                ].map((revision, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-teal-50 border border-teal-200 rounded-lg">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{revision}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">1.6</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Warranties and Disclaimers</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                    Limited Warranty
                  </h3>
                  <p className="text-gray-700 bg-green-50 border border-green-200 p-4 rounded-lg">
                    We warrant that services will be performed in a professional manner consistent with industry standards.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                    Disclaimer
                  </h3>
                  <p className="text-gray-700 bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    Services are provided "as is" without warranties of any kind, express or implied. We do not guarantee specific results or performance metrics.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-rose-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">1.7</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Limitation of Liability</h2>
              </div>
              
              <p className="text-gray-700 mb-4 bg-rose-50 border border-rose-200 p-4 rounded-lg">
                Our liability is limited to the amount paid for the specific service. We are not liable for:
              </p>
              <div className="grid gap-3">
                {[
                  'Indirect, incidental, or consequential damages',
                  'Loss of profits, data, or business opportunities',
                  'Third-party claims or infringement issues'
                ].map((liability, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-rose-50 border border-rose-200 rounded-lg">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{liability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Termination */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">1.8</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Termination</h2>
              </div>
              
              <p className="text-gray-700 mb-4">Either party may terminate the agreement with 30 days written notice. Upon termination:</p>
              <div className="grid gap-3">
                {[
                  'Client pays for all completed work',
                  'We deliver all completed materials',
                  'Both parties return confidential information'
                ].map((termination, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{termination}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Governing Law */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-violet-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">1.9</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Governing Law</h2>
              </div>
              
              <p className="text-gray-700 bg-violet-50 border border-violet-200 p-4 rounded-lg">
                These Terms are governed by the laws of Pakistan. Any disputes will be resolved through binding arbitration.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Questions About Our Terms?</h3>
              <p className="text-blue-100 mb-4">
                If you have any questions about these Terms of Service, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:jaynex.tech28@gmail.com" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Email Us
                </a>
                <a href="/contact" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Contact Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}