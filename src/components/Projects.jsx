import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'
import { Code2, ExternalLink, Clock, Lock } from 'lucide-react'

const projects = [
  {
    title: 'Keycloak Auth Service',
    type: 'Security',
    description:
      'Centralized authentication and authorization service using Keycloak with OAuth 2.0, RBAC, and SSO support across multiple microservices.',
    tags: ['Keycloak', 'OAuth 2.0', 'Spring Security', 'RBAC', 'Redis'],
    gradient: 'from-rose-600 via-pink-500 to-orange-500',
    headerBg: 'from-rose-950/80 to-orange-950/80',
    typeBg: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    dotColor: 'bg-rose-500',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.05 })

  return (
    <section id="projects" className="py-10 sm:py-16 px-5" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Projects"
          title="Personal Projects"
          subtitle="Building in public — these projects are currently in progress and will be open-sourced on GitHub."
          inView={inView}
        />

        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(({ title, type, description, tags, gradient, headerBg, typeBg, dotColor }, i) => (
            <div
              key={title}
              className={`group flex flex-col rounded-3xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800
                hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/30
                hover:-translate-y-1.5 transition-all duration-500
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Card header — gradient visual */}
              <div className={`relative h-36 bg-gradient-to-br ${headerBg} overflow-hidden flex-shrink-0`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Glow orb */}
                <div className={`absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br ${gradient} rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

                {/* Coming Soon badge */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-950/70 backdrop-blur-sm border border-white/10 text-[10px] font-bold uppercase tracking-wider text-gray-300">
                    <Clock size={9} />
                    Coming Soon
                  </span>
                </div>

                {/* Type badge */}
                <div className="absolute bottom-3 left-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-sm ${typeBg}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                    {type}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="font-black text-gray-900 dark:text-white text-base leading-snug">
                  {title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed flex-1">
                  {description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons — dimmed until project is live */}
                <div className="flex gap-2 pt-1">
                  <button
                    disabled
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 border border-gray-200 dark:border-gray-700 cursor-not-allowed select-none"
                  >
                    <Code2 size={13} />
                    GitHub
                  </button>
                  <button
                    disabled
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 border border-gray-200 dark:border-gray-700 cursor-not-allowed select-none"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`mt-6 flex items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-600 transition-all duration-700 delay-500
            ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <Lock size={11} />
          Current work projects are under NDA — personal projects shipping soon
        </div>
      </div>
    </section>
  )
}
