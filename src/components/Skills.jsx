import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'

const categories = [
  {
    label: 'Backend',
    color: 'indigo',
    gradient: 'from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/40',
    border: 'border-indigo-200/70 dark:border-indigo-800/40',
    tagBg: 'bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/60',
    skills: ['Java 8/11/17', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'Microservices', 'Kafka', 'Redis', 'Keycloak', 'REST APIs', 'Gradle'],
  },
  {
    label: 'Frontend',
    color: 'violet',
    gradient: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50 dark:bg-violet-950/40',
    border: 'border-violet-200/70 dark:border-violet-800/40',
    tagBg: 'bg-violet-100 dark:bg-violet-900/60 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800/60',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Component Design', 'API Integration'],
  },
  {
    label: 'Databases',
    color: 'cyan',
    gradient: 'from-cyan-500 to-cyan-600',
    bg: 'bg-cyan-50 dark:bg-cyan-950/40',
    border: 'border-cyan-200/70 dark:border-cyan-800/40',
    tagBg: 'bg-cyan-100 dark:bg-cyan-900/60 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/60',
    skills: ['PostgreSQL', 'SQL', 'NoSQL', 'Elasticsearch'],
  },
  {
    label: 'DevOps & Cloud',
    color: 'emerald',
    gradient: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/40',
    border: 'border-emerald-200/70 dark:border-emerald-800/40',
    tagBg: 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60',
    skills: ['GitLab CI/CD', 'Docker', 'Kubernetes', 'AWS EC2', 'AWS S3', 'Kibana'],
  },
  {
    label: 'Testing & QA',
    color: 'orange',
    gradient: 'from-orange-500 to-orange-600',
    bg: 'bg-orange-50 dark:bg-orange-950/40',
    border: 'border-orange-200/70 dark:border-orange-800/40',
    tagBg: 'bg-orange-100 dark:bg-orange-900/60 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800/60',
    skills: ['Manual Testing', 'Unit Testing', 'API Testing', 'Test Case Design'],
  },
  {
    label: 'Security & Auth',
    color: 'rose',
    gradient: 'from-rose-500 to-rose-600',
    bg: 'bg-rose-50 dark:bg-rose-950/40',
    border: 'border-rose-200/70 dark:border-rose-800/40',
    tagBg: 'bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60',
    skills: ['Keycloak', 'JWT', 'RBAC', 'OAuth 2.0', 'API Security'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.05 })

  return (
    <section id="skills" className="py-10 sm:py-16 px-5 bg-gray-50/80 dark:bg-gray-900/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Skills" title="Tech Stack" subtitle="Technologies I work with daily to build production-ready systems." inView={inView} />

        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {categories.map(({ label, gradient, bg, border, tagBg, skills }, i) => (
            <div
              key={label}
              className={`p-6 rounded-2xl ${bg} border ${border} transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${gradient} shadow-sm`} />
                <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider">
                  {label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${tagBg} transition-transform duration-200 hover:scale-105 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI & Prompt Engineering */}
        <div
          className={`mt-3 p-5 rounded-2xl bg-gradient-to-r from-indigo-50 via-violet-50 to-cyan-50 dark:from-indigo-950/30 dark:via-violet-950/30 dark:to-cyan-950/30
            border border-indigo-200/70 dark:border-indigo-800/40 transition-all duration-700
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '650ms' }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 shadow-sm flex-shrink-0" />
              <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider">AI & Prompt Engineering</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['LLM Prompt Engineering', 'Agent Workflows', 'AI Integration', 'Backend AI Enhancement'].map((s) => (
                <span key={s} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/70 dark:bg-gray-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
