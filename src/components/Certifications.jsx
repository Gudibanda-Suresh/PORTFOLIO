import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'
import { Calendar, Target } from 'lucide-react'

const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    org: 'Amazon Web Services',
    orgShort: 'AWS',
    relevance: 'Validates cloud fundamentals — directly relevant to EC2 & S3 work.',
    target: 'Q3 2026',
    gradient: 'from-orange-500 to-amber-400',
    orgBg: 'bg-orange-950/50 border-orange-800/50',
    orgText: 'text-orange-400',
    badgeBg: 'bg-orange-950/40 text-orange-400 border-orange-800/40',
    cardBorder: 'border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-900',
    barColor: 'from-orange-500 to-amber-400',
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.05 })

  return (
    <section id="certifications" className="py-10 sm:py-16 px-5 bg-gray-50/80 dark:bg-gray-900/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Certifications"
          title="Learning Roadmap"
          subtitle="Industry certifications I'm working towards to validate and deepen my expertise."
          inView={inView}
        />

        <div className="mt-8 sm:mt-12 max-w-xl">
          {certifications.map(({ name, org, orgShort, relevance, target, gradient, orgBg, orgText, badgeBg, cardBorder, barColor }, i) => (
            <div
              key={name}
              className={`group flex gap-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border ${cardBorder}
                hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 hover:-translate-y-0.5
                transition-all duration-500
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Org avatar */}
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center flex-shrink-0 ${orgBg}`}>
                <span className={`text-xs font-black ${orgText}`}>{orgShort}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-black text-gray-900 dark:text-white leading-snug">
                      {name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{org}</p>
                  </div>
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border flex-shrink-0 ${badgeBg}`}>
                    <Target size={8} />
                    Planned
                  </span>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
                  {relevance}
                </p>

                {/* Progress bar — empty/planned state */}
                <div className="space-y-1">
                  <div className="h-1 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${barColor} opacity-30 transition-all duration-1000`}
                      style={{ width: inView ? '8%' : '0%' }}
                    />
                  </div>
                </div>

                {/* Target date */}
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 dark:text-gray-600">
                  <Calendar size={10} />
                  Target: {target}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div
          className={`mt-6 p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950/20 dark:to-violet-950/20
            border border-indigo-100 dark:border-indigo-900/40 flex items-center gap-3
            transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center flex-shrink-0">
            <Target size={14} className="text-white" />
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
            Actively studying for <span className="font-bold text-indigo-600 dark:text-indigo-400">AWS Cloud Practitioner</span> as the top priority — expected Q3 2026.
          </p>
        </div>
      </div>
    </section>
  )
}
