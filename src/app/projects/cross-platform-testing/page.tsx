import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Github, Monitor, Smartphone, TestTube, BarChart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cross-Platform Testing Framework - Hasib Ahmed',
  description: 'Python-based testing framework supporting web, API, and mobile testing with detailed reporting and CI/CD integration capabilities.'
}

export default function CrossPlatformTestingFramework() {
  const technologies = [
    'Python', 'Pytest', 'Selenium', 'Appium', 'Requests', 'Allure Reports'
  ]

  const features = [
    {
      icon: Monitor,
      title: 'Web Testing',
      description: 'Cross-browser web application testing with Selenium WebDriver and parallel execution'
    },
    {
      icon: Smartphone,
      title: 'Mobile Testing',
      description: 'Native and hybrid mobile app testing for iOS and Android using Appium framework'
    },
    {
      icon: TestTube,
      title: 'API Testing',
      description: 'RESTful API testing with comprehensive validation and performance monitoring'
    },
    {
      icon: BarChart,
      title: 'Detailed Reporting',
      description: 'Rich test reports with screenshots, logs, and metrics for stakeholder visibility'
    }
  ]

  return (
    <div className="min-h-screen py-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 shadow-lg border transition-all duration-300 hover:bg-white/20 hover:scale-105"
            style={{borderColor: '#B7C9E2', color: '#104F8F'}}
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#104F8F'}}>
              Cross-Platform Testing Framework
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8" style={{color: '#104F8F'}}>
              Python-based testing framework supporting web, API, and mobile testing with detailed reporting 
              and CI/CD integration capabilities for comprehensive quality assurance.
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-md bg-white/10 shadow-lg"
                  style={{borderColor: '#B7C9E2', color: '#104F8F'}}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://github.com/hasib2k/cross-platform-testing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-2xl transform hover:scale-105 shadow-xl"
              style={{backgroundColor: '#104F8F'}}
            >
              <Github size={20} />
              View Code
            </a>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
                style={{borderColor: '#B7C9E2'}}
              >
                <feature.icon size={32} style={{color: '#104F8F'}} className="mb-4" />
                <h3 className="text-xl font-bold mb-3" style={{color: '#104F8F'}}>
                  {feature.title}
                </h3>
                <p className="leading-relaxed" style={{color: '#104F8F'}}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Details */}
          <div className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-8" style={{borderColor: '#B7C9E2'}}>
            <h2 className="text-3xl font-bold mb-6" style={{color: '#104F8F'}}>
              Framework Architecture
            </h2>
            <div className="space-y-6" style={{color: '#104F8F'}}>
              <div>
                <h3 className="text-xl font-semibold mb-3">Multi-Platform Support</h3>
                <p className="leading-relaxed">
                  Unified testing framework supporting web browsers, mobile devices (iOS/Android), and API endpoints. 
                  Built with Python for maintainability and extensive library ecosystem integration.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Testing Capabilities</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Cross-browser testing (Chrome, Firefox, Safari, Edge) with Selenium Grid</li>
                  <li>Mobile testing for native and hybrid apps using Appium</li>
                  <li>REST API testing with comprehensive validation and monitoring</li>
                  <li>Parallel test execution for faster feedback cycles</li>
                  <li>Data-driven testing with external data sources</li>
                  <li>CI/CD integration with Jenkins, GitHub Actions, and Azure DevOps</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Enterprise Impact</h3>
                <p className="leading-relaxed">
                  This framework has streamlined testing processes across multiple teams, reducing testing 
                  cycle time by 65% and improving defect detection rates through comprehensive coverage. 
                  The unified approach has standardized testing practices and improved team collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
