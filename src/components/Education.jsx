import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="education" className="py-10 sm:py-16 px-5 bg-gray-50/80 dark:bg-gray-900/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Education" title="Academic Background" inView={inView} />

        <div
          className={`mt-8 sm:mt-12 max-w-2xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Main education card */}
          <div className="relative p-5 sm:p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl shadow-black/5 dark:shadow-black/20 overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            {/* BG decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-transparent to-violet-50/50 dark:from-indigo-950/30 dark:to-violet-950/20 pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative">
              {/* Icon */}
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <GraduationCap size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                    Master of Computer Applications
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-bold mt-1">
                    MCA
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <InfoRow icon={GraduationCap} label="Institution" value="Dravidian University" />
                <InfoRow icon={MapPin} label="Location" value="Kuppam, Andhra Pradesh" />
                <InfoRow icon={Calendar} label="Duration" value="October 2020 – July 2022" />
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/40">
                  <Star size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 font-medium uppercase tracking-wide">GPA / Score</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">80 / 100</p>
                  </div>
                </div>
              </div>

              {/* GPA bar */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">Academic Performance</span>
                  <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">80%</span>
                </div>
                <div className="h-2.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 shadow-sm transition-all duration-1000"
                    style={{ width: inView ? '80%' : '0%' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Highlight strip */}
          <div
            className={`mt-5 grid grid-cols-3 gap-3 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {[
              { label: 'Degree', value: 'MCA' },
              { label: 'GPA', value: '80/100' },
              { label: 'Year', value: '2022' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="text-center p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm"
              >
                <div className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
                  {value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 font-medium mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/70 dark:border-gray-700/50">
      <Icon size={16} className="text-indigo-500 mt-0.5 flex-shrink-0" />
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-500 font-medium uppercase tracking-wide">{label}</p>
        <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">{value}</p>
      </div>
    </div>
  )
}
