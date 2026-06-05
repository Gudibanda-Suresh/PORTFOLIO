import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { User, Zap, Target, Layers } from 'lucide-react'

const highlights = [
  {
    icon: Zap,
    title: 'Backend Engineering',
    desc: 'Specialized in Java, Spring Boot, and event-driven microservices with Kafka.',
    color: 'from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/50',
    border: 'border-indigo-200 dark:border-indigo-800/50',
  },
  {
    icon: Layers,
    title: 'Full-Stack Dev',
    desc: 'Building responsive frontends with React alongside robust backend APIs.',
    color: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50 dark:bg-violet-950/50',
    border: 'border-violet-200 dark:border-violet-800/50',
  },
  {
    icon: Target,
    title: 'DevOps & Cloud',
    desc: 'GitLab CI/CD, Docker, Kubernetes, AWS (EC2, S3) — from dev to production.',
    color: 'from-cyan-500 to-cyan-600',
    bg: 'bg-cyan-50 dark:bg-cyan-950/50',
    border: 'border-cyan-200 dark:border-cyan-800/50',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="about" className="py-10 sm:py-16 px-5" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="About Me"
          title="Who I Am"
          inView={inView}
        />

        <div className="mt-8 sm:mt-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: text */}
          <div className={`space-y-6 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/50">
              <User size={16} className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Software Engineer · 3 Years</span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
              I'm a passionate Software Engineer with <strong className="text-gray-900 dark:text-white">3 years of experience</strong> delivering
              production-grade solutions at Integra Micro Systems. My work centers on building reliable P2P lending
              infrastructure connecting platforms with ONDC middleware.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I've architected <strong className="text-gray-900 dark:text-white">Kafka-driven microservices</strong>, implemented
              secure Keycloak-based auth, built React components for KYC flows, and shipped features from loan origination
              to EMI reminders — all while collaborating across Agile sprints.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My MCA background in Computer Applications (GPA 80, Dravidian University) gives me a strong theoretical
              foundation, and I continuously explore prompt engineering and LLM-based workflows to enhance product intelligence.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {['Problem Solver', 'Team Player', 'Fast Learner', 'Agile Practitioner'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: cards */}
          <div className="grid gap-4">
            {highlights.map(({ icon: Icon, title, desc, color, bg, border }, i) => (
              <div
                key={title}
                className={`p-5 rounded-2xl ${bg} border ${border} flex gap-4 items-start
                  transition-all duration-700 hover:-translate-y-1 hover:shadow-lg
                  ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({ label, title, subtitle, inView }) {
  return (
    <div className={`text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-800/50 mb-4">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-500 dark:text-gray-500 max-w-xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="h-0.5 w-12 bg-gradient-to-r from-transparent to-indigo-500 rounded-full" />
        <span className="w-2 h-2 rounded-full bg-indigo-500" />
        <span className="h-0.5 w-12 bg-gradient-to-l from-transparent to-indigo-500 rounded-full" />
      </div>
    </div>
  )
}
