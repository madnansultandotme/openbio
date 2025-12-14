// Landing page
// Main homepage with hero section and features

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { 
  Zap, 
  Palette, 
  BarChart3, 
  Code, 
  Shield, 
  Globe,
  ArrowRight,
  Github,
  Star
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">OpenBio</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Sign In
              </Link>
              <Link href="/register">
                <Button size="sm">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your open-source{' '}
            <span className="text-blue-600">link-in-bio</span>{' '}
            builder
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create a beautiful, customizable profile page for all your links. 
            Self-hosted, open-source, and completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Create Your Profile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a
              href="https://github.com/madnansultandotme/openbio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </a>
          </div>
          
          {/* Demo Preview */}
          <div className="mt-16">
            <div className="relative max-w-sm mx-auto">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">John Doe</h3>
                <p className="text-sm opacity-90 mb-6">Creator & Developer</p>
                <div className="space-y-3">
                  <div className="bg-white/20 rounded-lg p-3 text-sm">My Website</div>
                  <div className="bg-white/20 rounded-lg p-3 text-sm">Instagram</div>
                  <div className="bg-white/20 rounded-lg p-3 text-sm">YouTube</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              OpenBio focuses on simplicity and performance while giving you full control over your data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Pages load in under 200ms with optimized performance and minimal JavaScript.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Customizable Themes</CardTitle>
                <CardDescription>
                  Choose from beautiful themes or customize colors to match your brand.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Built-in Analytics</CardTitle>
                <CardDescription>
                  Track page views, link clicks, and understand your audience better.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Open Source</CardTitle>
                <CardDescription>
                  MIT licensed, fully transparent, and community-driven development.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Privacy First</CardTitle>
                <CardDescription>
                  Your data stays yours. Self-host or use our privacy-focused hosting.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Easy Deployment</CardTitle>
                <CardDescription>
                  Deploy anywhere with Docker, Vercel, or your favorite hosting platform.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Create your profile in under 5 minutes. No credit card required.
          </p>
          <Link href="/register">
            <Button size="lg">
              Create Your Profile
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <h3 className="text-lg font-bold text-gray-900 mr-4">OpenBio</h3>
              <div className="flex items-center text-sm text-gray-600">
                <Star className="h-4 w-4 mr-1" />
                <span>Star us on GitHub</span>
              </div>
            </div>
            <div className="flex space-x-6 text-sm text-gray-600">
              <Link href="/docs" className="hover:text-gray-900 transition-colors">
                Documentation
              </Link>
              <a 
                href="https://github.com/madnansultandotme/openbio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <Link href="/privacy" className="hover:text-gray-900 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-gray-900 transition-colors">
                Terms
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>&copy; 2024 OpenBio. Open source under MIT license.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}