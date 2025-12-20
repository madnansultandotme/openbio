// Landing page
// Main homepage with hero section and features

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import {
  ArrowRight,
  BarChart3,
  Github,
  Layers,
  Palette,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

const featureCards = [
  {
    title: 'Tailored Branding',
    description:
      'Use theme tokens and granular controls to deliver a branded link-in-bio experience without touching raw CSS.',
    icon: Palette,
  },
  {
    title: 'Enterprise-Grade Privacy',
    description:
      'Self-host on your own infrastructure to ensure audience data never leaves your control.',
    icon: ShieldCheck,
  },
  {
    title: 'Actionable Analytics',
    description:
      'Monitor link performance, retention, and referrers with privacy-aware insights that inform decisions.',
    icon: BarChart3,
  },
  {
    title: 'Modular Architecture',
    description:
      'Extend OpenBio with serverless functions, custom domains, and integrations that fit your workflow.',
    icon: Layers,
  },
  {
    title: 'Team-Ready Access',
    description:
      'Invite collaborators with role-based permissions to keep your digital identity current and consistent.',
    icon: Users,
  },
  {
    title: 'Open Source Velocity',
    description:
      'Contribute through GitHub, audit the codebase, and ship improvements with a transparent roadmap.',
    icon: Sparkles,
  },
];

const credibilityMetrics = [
  { value: '5 min', label: 'Average setup time' },
  { value: '100%', label: 'Self-hosted control' },
  { value: 'MIT', label: 'Open-source license' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      <header className="border-b border-slate-800/60 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <span className="text-lg font-semibold tracking-tight">OpenBio</span>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <Link href="/dashboard" className="hover:text-white transition-colors">
              Product
            </Link>
            <Link href="/docs" className="hover:text-white transition-colors">
              Documentation
            </Link>
            <a
              href="https://github.com/madnansultandotme/openbio"
              className="hover:text-white transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Sign in
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-blue-500 hover:bg-blue-400">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1 text-sm font-medium text-blue-200">
                  Open Source | Built by madnansultandotme
                </div>
                <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                  Professional link-in-bio infrastructure you control.
                </h1>
                <p className="mt-5 text-lg text-slate-300">
                  OpenBio lets you orchestrate every touchpoint—links, content, themes, and analytics—under a single,
                  self-hosted platform. Design polished public profiles while retaining the transparency of open source.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="/register" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full bg-blue-500 hover:bg-blue-400">
                      Launch Dashboard
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a
                    href="https://github.com/madnansultandotme/openbio"
                    className="w-full sm:w-auto"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-slate-700 bg-slate-900 text-slate-100 hover:border-slate-500 hover:bg-slate-800"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Explore the code
                    </Button>
                  </a>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-3">
                  {credibilityMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-lg border border-slate-800 bg-slate-900/60 px-6 py-5 shadow-lg shadow-blue-500/5"
                    >
                      <p className="text-2xl font-semibold text-white">{metric.value}</p>
                      <p className="mt-2 text-sm uppercase tracking-wide text-slate-400">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-400 opacity-40 blur-2xl" />
                <Card className="relative border-slate-800 bg-slate-900/90 text-left shadow-2xl shadow-blue-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium text-white">
                      Analytics snapshot
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      Monitor engagement, channel attribution, and link conversions in real time.
                    </CardDescription>
                  </CardHeader>
                  <div className="space-y-4 px-6 pb-6">
                    <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span>Weekly visits</span>
                        <span className="text-blue-300">+28%</span>
                      </div>
                      <div className="mt-3 h-24 rounded-md bg-gradient-to-r from-blue-600/30 via-blue-500/40 to-cyan-400/40" />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-4">
                        <p className="text-xs uppercase tracking-wide text-slate-400">Top link</p>
                        <p className="mt-1 text-sm font-medium text-white">Newsletter signup</p>
                        <p className="mt-2 text-xl font-semibold text-blue-300">63%</p>
                      </div>
                      <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-4">
                        <p className="text-xs uppercase tracking-wide text-slate-400">Audience region</p>
                        <p className="mt-1 text-sm font-medium text-white">North America</p>
                        <p className="mt-2 text-xl font-semibold text-blue-300">42%</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-950/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="pr-0 lg:pr-12">
              <h2 className="text-3xl font-semibold text-white">Designed for modern creators and teams</h2>
              <p className="mt-4 text-slate-300">
                OpenBio pairs a streamlined editing experience with a technical foundation tailored for uptime,
                governance, and scalability. Build once and keep every channel updated from a single command center.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-sm font-medium text-white">Supabase integration</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Ship instantly with Supabase Auth and PostgreSQL syncing for your profile data.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-sm font-medium text-white">Composable API routes</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Extend functionality using typed Next.js routes and serverless functions.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {featureCards.map((feature) => (
                <Card key={feature.title} className="border-slate-800 bg-slate-900/70">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base text-white">{feature.title}</CardTitle>
                    <CardDescription className="text-slate-400">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold text-white">Own your identity from domain to data</h2>
            <p className="mt-4 text-lg text-slate-300">
              Configure OpenBio around your brand assets, automate releases with CI, and deliver curated experiences to
              every audience segment. No black-box vendor lock-in—just a transparent codebase you can trust.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-6">
                <h3 className="text-lg font-semibold text-white">Workflow friendly</h3>
                <p className="mt-3 text-sm text-slate-400">
                  Sync link updates from GitHub Actions or your preferred CI/CD pipeline.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-6">
                <h3 className="text-lg font-semibold text-white">Accessible by default</h3>
                <p className="mt-3 text-sm text-slate-400">
                  Built with semantic HTML, keyboard navigation, and WCAG-conscious color contrast.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-6">
                <h3 className="text-lg font-semibold text-white">Community backed</h3>
                <p className="mt-3 text-sm text-slate-400">
                  Join contributors shaping the roadmap and aligning features with real creator needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800 bg-slate-950/60 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-cyan-500/10 p-10 text-center">
            <h2 className="text-3xl font-semibold text-white">Deploy OpenBio in minutes</h2>
            <p className="mt-3 text-lg text-slate-200">
              Clone the repository, connect Supabase, and customize themes directly from the GitHub project stewarded by
              madnansultandotme.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/register" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-blue-500 hover:bg-blue-400">
                  Start now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="mailto:info.adnansultan@gmail.com"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-slate-700 bg-slate-900 text-slate-100 hover:border-slate-500 hover:bg-slate-800"
                >
                  Contact directly
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">OpenBio</p>
            <p className="mt-2 text-sm text-slate-400">Open-source link-in-bio platform maintained by madnansultandotme.</p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:items-center sm:gap-6">
            <a href="https://github.com/madnansultandotme/openbio" rel="noopener noreferrer" target="_blank" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="mailto:info.adnansultan@gmail.com" className="hover:text-white transition-colors">
              info.adnansultan@gmail.com
            </a>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} OpenBio. Released under the MIT License.</p>
        </div>
      </footer>
    </div>
  );
}