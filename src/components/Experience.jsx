import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

const achievements = [
  {
    category: 'Integration & Architecture',
    color: 'indigo',
    items: [
      'Developed and maintained a dedicated integration layer connecting the P2P Lending Platform (P2PL) with ONDC Buyer App Middleware, enabling reliable API-based communication for borrower loan operations.',
      'Implemented Kafka-based event-driven architecture for unsolicited API calls from P2PL to ONDC middleware, enabling async processing of loan status updates, repayments, and IGM ticket events.',
      'Designed Supplier module APIs for P2P Lending system to support purchase financing within the loan-raising workflow.',
    ],
  },
  {
    category: 'Backend Services',
    color: 'violet',
    items: [
      'Built backend services for user registration, loan requests, repayments, and IGM ticket APIs.',
      'Developed a Kafka-based scheduler-driven EMI reminder microservice for automated Email and SMS notifications.',
      'Improved backend API and database efficiency; performed distributed system debugging and code reviews.',
      'Proficient in Java 8/11/17 development with Gradle — build optimization, dependency management, modular project structure.',
    ],
  },
  {
    category: 'Frontend & KYC',
    color: 'cyan',
    items: [
      'Developed React components for KYC, E-Mandate, and Loan-Agreement modules, integrating backend data for dynamic content rendering and document preview.',
      'Implemented Agent and Customer Video KYC module with liveness detection and maker-checker verification.',
    ],
  },
  {
    category: 'Security & Authentication',
    color: 'rose',
    items: [
      'Experienced with Keycloak for implementing secure authentication and authorization of users.',
      'Implemented role-based access control (RBAC) and JWT-based token security for secure API access.',
    ],
  },
  {
    category: 'DevOps & Monitoring',
    color: 'emerald',
    items: [
      'GitLab CI/CD: hands-on with pipelines for on-prem deployments (UAT, Staging, Prod) and microservices deployment.',
      'Familiar with Kubernetes Dashboard and Elasticsearch monitoring via Kibana for observability.',
    ],
  },
  {
    category: 'Testing & Agile',
    color: 'orange',
    items: [
      'Hands-on with Manual, Unit, and API testing — including test case design and execution.',
      'Validated backend services and RESTful APIs to ensure functional correctness and reliability.',
      'Familiar with Agile practices: sprint planning, daily stand-ups, and continuous delivery.',
    ],
  },
]

const colorMap = {
  indigo: {
    dot: 'bg-indigo-500',
    badge: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/50',
    bullet: 'text-indigo-500 dark:text-indigo-400',
    card: 'hover:border-indigo-300 dark:hover:border-indigo-700',
  },
  violet: {
    dot: 'bg-violet-500',
    badge: 'bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800/50',
    bullet: 'text-violet-500 dark:text-violet-400',
    card: 'hover:border-violet-300 dark:hover:border-violet-700',
  },
  cyan: {
    dot: 'bg-cyan-500',
    badge: 'bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/50',
    bullet: 'text-cyan-500 dark:text-cyan-400',
    card: 'hover:border-cyan-300 dark:hover:border-cyan-700',
  },
  rose: {
    dot: 'bg-rose-500',
    badge: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/50',
    bullet: 'text-rose-500 dark:text-rose-400',
    card: 'hover:border-rose-300 dark:hover:border-rose-700',
  },
  emerald: {
    dot: 'bg-emerald-500',
    badge: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50',
    bullet: 'text-emerald-500 dark:text-emerald-400',
    card: 'hover:border-emerald-300 dark:hover:border-emerald-700',
  },
  orange: {
    dot: 'bg-orange-500',
    badge: 'bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800/50',
    bullet: 'text-orange-500 dark:text-orange-400',
    card: 'hover:border-orange-300 dark:hover:border-orange-700',
  },
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.05 })

  return (
    <section id="experience" className="py-10 sm:py-16 px-5" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Experience" title="Work History" subtitle="My professional journey building real-world fintech systems." inView={inView} />

        {/* Company card */}
        <div
          className={`mt-8 sm:mt-12 p-5 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 dark:from-indigo-700 dark:to-violet-800 text-white shadow-2xl shadow-indigo-500/25 dark:shadow-indigo-900/50
            transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Briefcase size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-xl sm:text-2xl">Software Engineer</h3>
                  <p className="text-indigo-200 font-medium">Integra Micro Systems Pvt Ltd</p>
                </div>
              </div>
              <p className="text-indigo-100 text-sm leading-relaxed max-w-2xl">
                IFPL — an NBFC-P2P that offers peer-to-peer lending in India through web and mobile platforms,
                enabling loan facilitation in a virtual P2P lending marketplace.
              </p>
            </div>
            <div className="flex flex-row sm:flex-col gap-3 sm:text-right shrink-0">
              <span className="inline-flex items-center gap-1.5 text-sm text-indigo-200">
                <Calendar size={14} />
                Sep 2023 – Present
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-indigo-200">
                <MapPin size={14} />
                Bangalore · Full-time
              </span>
            </div>
          </div>

          {/* Tenure badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold">3 Years · Currently Employed</span>
          </div>
        </div>

        {/* Achievement grid */}
        <div className="mt-5 grid sm:grid-cols-2 gap-4">
          {achievements.map(({ category, color, items }, i) => {
            const c = colorMap[color]
            return (
              <div
                key={category}
                className={`p-6 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 ${c.card}
                  transition-all duration-700 hover:shadow-lg hover:-translate-y-1
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className={`w-2 h-2 rounded-full ${c.dot} flex-shrink-0`} />
                  <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${c.badge}`}>
                    {category}
                  </span>
                </div>
                <ul className="space-y-3">
                  {items.map((item, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      <ChevronRight size={14} className={`${c.bullet} flex-shrink-0 mt-0.5`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
