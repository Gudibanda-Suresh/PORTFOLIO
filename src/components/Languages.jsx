import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'
import { MessageCircle } from 'lucide-react'

const languages = [
  {
    name: 'English',
    level: 'Professional',
    proficiency: 90,
    script: 'Abc',
    gradient: 'from-indigo-500 to-violet-600',
    bar: 'from-indigo-500 via-violet-500 to-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-950/40',
    border: 'border-indigo-200/70 dark:border-indigo-800/40',
    badge: 'bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300',
  },
  {
    name: 'Telugu',
    level: 'Native',
    proficiency: 100,
    script: 'తె',
    gradient: 'from-violet-500 to-purple-600',
    bar: 'from-violet-500 via-purple-500 to-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-950/40',
    border: 'border-violet-200/70 dark:border-violet-800/40',
    badge: 'bg-violet-100 dark:bg-violet-900/60 text-violet-700 dark:text-violet-300',
  },
  {
    name: 'Kannada',
    level: 'Conversational',
    proficiency: 70,
    script: 'ಕ',
    gradient: 'from-cyan-500 to-blue-600',
    bar: 'from-cyan-500 via-blue-500 to-cyan-400',
    bg: 'bg-cyan-50 dark:bg-cyan-950/40',
    border: 'border-cyan-200/70 dark:border-cyan-800/40',
    badge: 'bg-cyan-100 dark:bg-cyan-900/60 text-cyan-700 dark:text-cyan-300',
  },
]

export default function Languages() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="languages" className="py-10 sm:py-16 px-5" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Languages" title="I Speak" inView={inView} />

        <div className="mt-8 sm:mt-12 max-w-3xl mx-auto grid sm:grid-cols-3 gap-4">
          {languages.map(({ name, level, proficiency, script, gradient, bar, bg, border, badge }, i) => (
            <div
              key={name}
              className={`relative p-5 rounded-2xl ${bg} border ${border}
                transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Script character */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg mb-4 mx-auto`}>
                <span className="text-2xl font-black text-white leading-none">{script}</span>
              </div>

              {/* Name & level */}
              <div className="text-center mb-4">
                <h3 className="font-black text-gray-900 dark:text-white text-lg">{name}</h3>
                <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${badge}`}>
                  {level}
                </span>
              </div>

              {/* Proficiency bar */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Proficiency</span>
                  <span className="text-xs font-black text-gray-700 dark:text-gray-300">{proficiency}%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${bar} transition-all duration-1000 ease-out`}
                    style={{ width: inView ? `${proficiency}%` : '0%', transitionDelay: `${i * 120 + 300}ms` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-500
            transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <MessageCircle size={14} className="text-indigo-500" />
          <span>Comfortable communicating in professional and casual environments</span>
        </div>
      </div>
    </section>
  )
}
