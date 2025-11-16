import React from 'react'
import { CheckCircle2, ShieldCheck, Lock, Clock, Users, Server, BookOpenText, FileCode2, ArrowRight, Code2 } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const Nav = () => (
  <header className="sticky top-0 z-20 backdrop-blur bg-white/60 border-b border-black/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 rounded-xl grid place-items-center text-white font-black">V</div>
          <span className="font-semibold text-gray-900">Veiled</span>
          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 hidden sm:inline">AGCOM 96/25/CONS</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#how" className="hover:text-gray-900">How It Works</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#docs" className="hover:text-gray-900">Documentation</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#login" className="text-sm text-gray-700 hover:text-gray-900">Login</a>
          <a href="#get-started" className="text-sm bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg transition">Get Started</a>
        </div>
      </div>
    </div>
  </header>
)

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-black/5 text-gray-900 text-xs">
    {children}
  </span>
)

const Stat = ({ value, label }) => (
  <div className="text-center p-4 rounded-2xl bg-white/70 border border-black/5">
    <div className="text-2xl sm:text-3xl font-bold text-gray-900">{value}</div>
    <div className="text-xs sm:text-sm text-gray-600 mt-1">{label}</div>
  </div>
)

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-40 -right-32 h-96 w-96 bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-indigo-500/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -left-32 h-96 w-96 bg-gradient-to-tr from-indigo-500/10 via-sky-400/10 to-blue-500/10 blur-3xl rounded-full" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge><ShieldCheck className="h-4 w-4 text-blue-600"/> AGCOM 96/25/CONS Compliant</Badge>
          <Badge><Lock className="h-4 w-4 text-blue-600"/> Double Anonymity</Badge>
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900">
          Age Verification Made Simple
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
          Intermediary between adult sites and KYC providers. Guarantee complete anonymity and AGCOM compliance.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="#get-started" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm">
            Start Integration <ArrowRight className="h-4 w-4"/>
          </a>
          <a href="#docs" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-gray-50 text-gray-900 text-sm font-semibold border border-black/10">
            View Documentation <BookOpenText className="h-4 w-4"/>
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Stat value="15min" label="Integration Time" />
          <Stat value="100%" label="Anonymous" />
          <Stat value="2" label="KYC Providers" />
          <Stat value="99.9%" label="Uptime SLA" />
        </div>
      </div>

      <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] rounded-3xl border border-black/10 bg-white/60">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  </section>
)

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="max-w-3xl">
    {eyebrow && <p className="text-xs font-semibold tracking-widest uppercase text-blue-600">{eyebrow}</p>}
    <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{title}</h2>
    {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
  </div>
)

const Pill = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-gray-800 text-xs">
    <CheckCircle2 className="h-4 w-4 text-green-600" /> {children}
  </div>
)

const HowItWorks = () => (
  <section id="how" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-transparent to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Age Verification Compliance"
        title="Modern regulations require age verification with double anonymity protection"
        subtitle={
          <>
            <p className="mb-2"><span className="font-semibold">Legal Requirement</span>: AGCOM Resolution 96/25/CONS: Double anonymity is mandatory. Fines up to €250,000 + site blocking.</p>
            <p className="mb-2"><span className="font-semibold">Direct Integration = Privacy Violation</span>: Integrating Yoti/Namirial directly violates double anonymity: your site would see user data.</p>
            <p className="mb-2"><span className="font-semibold">Complex Implementation</span>: Building your own anonymity layer is complex, time-consuming, and error-prone.</p>
            <p className="mt-4"><span className="font-semibold">Double anonymity means</span>: The KYC provider doesn't know which site you visit, and your site doesn't know who the user is.</p>
          </>
        }
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2 p-6 rounded-2xl border border-black/10 bg-white/70">
          <h3 className="font-semibold text-gray-900">Double Anonymity Guaranteed</h3>
          <p className="mt-2 text-sm text-gray-600">1. KYC Provider → Veiled: Provider sees user identity but not which adult site they want to access.</p>
          <p className="mt-2 text-sm text-gray-600">2. Veiled → Your Site: Your site receives only a verification confirmation without any personal data.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>Fully Compliant</Pill>
            <Pill>GDPR Compliant</Pill>
            <Pill>Integrated with Certified Partners</Pill>
            <Pill>Double Anonymity Guaranteed</Pill>
          </div>
        </div>

        <ol className="lg:col-span-3 grid sm:grid-cols-2 gap-6 list-decimal list-inside">
          <li className="p-6 rounded-2xl border border-black/10 bg-white/70">
            <p className="text-xs font-semibold text-gray-500">1</p>
            <h4 className="mt-1 font-semibold text-gray-900">User Visits Your Adult Site</h4>
            <p className="mt-1 text-sm text-gray-600">Your site requests age verification via Veiled SDK → User is redirected to Veiled verification page.</p>
            <div className="mt-3 inline-flex items-center gap-2 text-xs text-blue-700 bg-blue-50 border border-blue-200 px-2 py-1 rounded-full">Simple SDK Integration • One Line of Code</div>
          </li>
          <li className="p-6 rounded-2xl border border-black/10 bg-white/70">
            <p className="text-xs font-semibold text-gray-500">2</p>
            <h4 className="mt-1 font-semibold text-gray-900">User Chooses KYC Provider</h4>
            <p className="mt-1 text-sm text-gray-600">On Veiled page, user selects Yoti or Namirial → Provider doesn't know which site user wants to access.</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded-full bg-white border border-black/10">Yoti Integration</span>
              <span className="px-2 py-1 rounded-full bg-white border border-black/10">Namirial Integration</span>
              <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">First Anonymity Layer</span>
            </div>
          </li>
          <li className="p-6 rounded-2xl border border-black/10 bg-white/70">
            <p className="text-xs font-semibold text-gray-500">3</p>
            <h4 className="mt-1 font-semibold text-gray-900">Provider Verifies Age</h4>
            <p className="mt-1 text-sm text-gray-600">KYC verifies identity and age → Returns to Veiled only "18+ verified" (no personal data).</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded-full bg-white border border-black/10">Certified KYC</span>
              <span className="px-2 py-1 rounded-full bg-white border border-black/10">No Data Shared</span>
            </div>
          </li>
          <li className="p-6 rounded-2xl border border-black/10 bg-white/70">
            <p className="text-xs font-semibold text-gray-500">4</p>
            <h4 className="mt-1 font-semibold text-gray-900">Veiled Issues Anonymous Token</h4>
            <p className="mt-1 text-sm text-gray-600">Anonymous JWT with only age_verified: true. No personal information included.</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded-full bg-white border border-black/10">Anonymous JWT</span>
              <span className="px-2 py-1 rounded-full bg-white border border-black/10">Zero PII</span>
              <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">Second Anonymity Layer</span>
            </div>
          </li>
          <li className="p-6 rounded-2xl border border-black/10 bg-white/70 sm:col-span-2">
            <p className="text-xs font-semibold text-gray-500">5</p>
            <h4 className="mt-1 font-semibold text-gray-900">Your Site Grants Access</h4>
            <p className="mt-1 text-sm text-gray-600">Your backend validates token with Veiled API → Access granted based only on age verification.</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded-full bg-white border border-black/10">Compliant</span>
              <span className="px-2 py-1 rounded-full bg-white border border-black/10">Anonymous</span>
              <span className="px-2 py-1 rounded-full bg-white border border-black/10">AGCOM Certified</span>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
)

const WhyChoose = () => (
  <section className="py-16 sm:py-20" id="why">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Why Choose Veiled"
        title="The only API/SDK that guarantees double anonymity and AGCOM compliance"
      />
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border border-black/10 bg-white/70">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-blue-600"/>
            <h4 className="font-semibold text-gray-900">100% Compliant</h4>
          </div>
          <ul className="mt-3 text-sm text-gray-600 space-y-2 list-disc list-inside">
            <li>AGCOM 96/25/CONS certified</li>
            <li>Double anonymity guaranteed</li>
            <li>GDPR compliant</li>
            <li>Zero personal data stored</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl border border-black/10 bg-white/70">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-blue-600"/>
            <h4 className="font-semibold text-gray-900">15min Integration</h4>
          </div>
          <ul className="mt-3 text-sm text-gray-600 space-y-2 list-disc list-inside">
            <li>Simple JavaScript SDK</li>
            <li>TypeScript support included</li>
            <li>Developer-friendly documentation</li>
            <li>Framework agnostic</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl border border-black/10 bg-white/70">
          <div className="flex items-center gap-3">
            <Server className="h-5 w-5 text-blue-600"/>
            <h4 className="font-semibold text-gray-900">Transparent Pricing</h4>
          </div>
          <ul className="mt-3 text-sm text-gray-600 space-y-2 list-disc list-inside">
            <li>Pay only for verified traffic</li>
            <li>Prepaid credit model</li>
            <li>No subscription fees</li>
            <li>See pricing in dashboard</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

const Pricing = () => (
  <section id="pricing" className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        title="Simple, Transparent Pricing"
        subtitle="Pay only for verified traffic. No subscriptions. No hidden fees."
      />
      <div className="mt-10 grid lg:grid-cols-2 gap-6 items-stretch">
        <div className="p-6 rounded-2xl border border-black/10 bg-white/70">
          <h4 className="font-semibold text-gray-900">Prepaid Credits</h4>
          <p className="mt-2 text-sm text-gray-600">Load credits and pay only for traffic you verify.</p>
          <h4 className="mt-6 font-semibold text-gray-900">No Subscriptions</h4>
          <p className="mt-2 text-sm text-gray-600">No monthly fees. No commitments. Pure pay-as-you-go.</p>
          <h4 className="mt-6 font-semibold text-gray-900">Full Transparency</h4>
          <p className="mt-2 text-sm text-gray-600">See exact costs and usage in your dashboard.</p>
          <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-sm">Create Account to See Pricing</div>
        </div>
        <div className="p-6 rounded-2xl border border-black/10 bg-white/70">
          <h4 className="font-semibold text-gray-900">Integration in 15 Minutes</h4>
          <p className="mt-2 text-sm text-gray-600">Simple JavaScript SDK. Production-ready in minutes.</p>
          <div className="mt-4 rounded-xl overflow-hidden border border-black/10 bg-gray-900 text-gray-100">
            <div className="px-4 py-2 text-xs text-gray-400 border-b border-white/10 flex items-center gap-2"><Code2 className="h-4 w-4"/> your-site.js</div>
            <pre className="p-4 text-xs overflow-auto">
{`// 1. Install SDK
npm install @veiled/sdk

// 2. Initialize with your API key
import Veiled from '@veiled/sdk';

const veiled = new Veiled({
  apiKey: 'your_api_key_here',
  onSuccess: (token) => {
    // User verified: Grant access to adult content
    // Token contains ONLY age verification (no personal data)
    grantAccess(token);
  },
  onError: (error) => {
    // User not verified or error occurred
    showErrorMessage(error);
  }
});

// 3. Trigger age verification
veiled.verify();

// That's it! ✅ AGCOM compliant with double anonymity
`}
            </pre>
            <div className="px-4 py-3 border-t border-white/10 text-xs text-gray-400 flex flex-wrap gap-3">
              <span className="px-2 py-1 rounded bg-white/10">JavaScript/TypeScript</span>
              <span className="px-2 py-1 rounded bg-white/10">Framework agnostic</span>
              <span className="px-2 py-1 rounded bg-white/10">15 min integration</span>
              <a href="#docs" className="px-2 py-1 rounded bg-blue-600 text-white">View Full Documentation</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a href="#get-started" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm">Create Free Account</a>
        <a href="#docs" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-gray-50 text-gray-900 text-sm font-semibold border border-black/10">Read Documentation</a>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="py-12 border-t border-black/10 bg-white" id="contact">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 rounded-xl grid place-items-center text-white font-black">V</div>
            <span className="font-semibold text-gray-900">Veiled</span>
          </div>
          <p className="mt-3 text-gray-600">Age verification for the modern web</p>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900">Product</h5>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><a href="#how" className="hover:text-gray-900">How It Works</a></li>
            <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
            <li><a href="#integration" className="hover:text-gray-900">Integration</a></li>
          </ul>
        </div>
        <div id="docs">
          <h5 className="font-semibold text-gray-900">Resources</h5>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><a href="#docs" className="hover:text-gray-900">Documentation</a></li>
            <li><a href="#docs" className="hover:text-gray-900">API Reference</a></li>
            <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900">Support</h5>
          <p className="mt-3 text-gray-600">Support: <a className="underline decoration-dotted" href="mailto:support@veiled.id">support@veiled.id</a></p>
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-500">© 2025 Veiled. All rights reserved.</p>
        <p className="text-xs text-gray-500">Made with <span className="text-pink-500">❤</span> for a compliant web</p>
      </div>
    </div>
  </footer>
)

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white text-gray-900">
      <Nav />
      <Hero />
      <HowItWorks />
      <WhyChoose />
      <Pricing />
      <Footer />
    </div>
  )
}
