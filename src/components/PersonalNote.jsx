import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { Lightbulb, Layers, GitMerge } from 'lucide-react'

const hobbies = [
  { icon: '🏋️', label: 'Gym' },
  { icon: '🏏', label: 'Cricket' },
  { icon: '🎵', label: 'Music' },
  { icon: '✈️', label: 'Travelling' },
  { icon: '📚', label: 'Reading' },
  { icon: '🎮', label: 'Gaming' },
  { icon: '🎬', label: 'Cinema' },
]

const traits = [
  {
    icon: Lightbulb,
    title: 'Problem-first thinker',
    desc: 'I zoom out before writing a single line — understand the why before the how.',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-500/20',
    bg: 'bg-amber-50 dark:bg-amber-950/20',
    border: 'border-amber-200/60 dark:border-amber-800/30',
  },
  {
    icon: Layers,
    title: 'Systems mindset',
    desc: 'I think in layers — data flow, failure modes, and maintainability, not just the happy path.',
    gradient: 'from-indigo-500 to-violet-500',
    glow: 'shadow-indigo-500/20',
    bg: 'bg-indigo-50 dark:bg-indigo-950/20',
    border: 'border-indigo-200/60 dark:border-indigo-800/30',
  },
  {
    icon: GitMerge,
    title: 'Collaboration over ego',
    desc: 'The best code comes from shared understanding. I write for the next developer, not just the compiler.',
    gradient: 'from-violet-500 to-fuchsia-500',
    glow: 'shadow-violet-500/20',
    bg: 'bg-violet-50 dark:bg-violet-950/20',
    border: 'border-violet-200/60 dark:border-violet-800/30',
  },
]

export default function PersonalNote() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.06 })

  return (
    <section id="story" className="relative py-14 sm:py-20 px-5 overflow-hidden" ref={ref}>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950/20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-400/6 dark:bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-400/6 dark:bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Dot grid decoration */}
      <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Section badge */}
        <div className={`flex justify-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/50 text-xs font-bold uppercase tracking-widest text-rose-500 dark:text-rose-400">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            The Person Behind the Code
          </span>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">

          {/* ── Photo column ── */}
          <div
            className={`lg:col-span-2 flex justify-center transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="relative">

              {/* Corner accent dots — top left */}
              <div className="absolute -top-6 -left-6 grid grid-cols-3 gap-1 opacity-40 dark:opacity-30 pointer-events-none">
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-indigo-500" />
                ))}
              </div>

              {/* Corner accent dots — bottom right */}
              <div className="absolute -bottom-6 -right-6 grid grid-cols-3 gap-1 opacity-40 dark:opacity-30 pointer-events-none">
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-violet-400 dark:bg-violet-500" />
                ))}
              </div>

              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 rounded-[2.5rem] blur-2xl opacity-15 dark:opacity-25" />

              {/* Gradient border */}
              <div className="relative p-[2.5px] bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 rounded-[2rem] shadow-2xl shadow-indigo-500/20">
                <div className="bg-white dark:bg-gray-950 rounded-[1.85rem] overflow-hidden group">
                  <div className="relative w-60 sm:w-72 aspect-[3/4]">

                    {/* Image with hover zoom */}
                    <img
                      src="/my_story.jpg"
                      alt="Suresh Gudibanda"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.parentElement.style.display = 'flex'
                        e.currentTarget.parentElement.style.alignItems = 'center'
                        e.currentTarget.parentElement.style.justifyContent = 'center'
                        e.currentTarget.parentElement.innerHTML = '<span style="font-size:3rem">📸</span>'
                      }}
                    />

                    {/* Bottom gradient fade overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none rounded-b-[1.85rem]" />

                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── Content column ── */}
          <div
            className={`lg:col-span-3 flex flex-col gap-7 transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            {/* Headline */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-black leading-tight">
                <span className="text-gray-900 dark:text-white">Hey, I'm </span>
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 dark:from-indigo-400 dark:via-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  Suresh
                </span>
                <span className="ml-2">👋</span>
              </h2>
              <p className="mt-4 text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed">
                Honestly? I'm just a guy who got obsessed with coding and never looked back.
                I like keeping things simple, learning something new every day, and figuring out
                why something broke at 2am — sometimes that's more fun than when it works.
                Bangalore is where I work and grow, and I genuinely believe
                that showing up and putting in the reps is what separates good from great.
              </p>
            </div>

            {/* Trait cards */}
            <div className="space-y-3">
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest">How I Think</p>
              <div className="grid grid-cols-1 gap-2.5">
                {traits.map(({ icon: Icon, title, desc, gradient, glow, bg, border }) => (
                  <div
                    key={title}
                    className={`flex items-start gap-3.5 p-4 rounded-2xl border ${bg} ${border} hover:-translate-y-0.5 hover:shadow-lg ${glow} transition-all duration-300`}
                  >
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <Icon size={15} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="space-y-2.5">
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest">When I'm Not Coding</p>
              <div className="flex flex-wrap gap-2">
                {hobbies.map(({ icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/80 shadow-sm hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    <span className="text-base leading-none">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Shakespeare quote — premium block */}
            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-indigo-50 via-violet-50/60 to-cyan-50/40 dark:from-indigo-950/40 dark:via-violet-950/30 dark:to-cyan-950/20 border border-indigo-100 dark:border-indigo-900/50 overflow-hidden">
              {/* Decorative large quote mark */}
              <span className="absolute -top-3 -left-1 text-7xl font-serif text-indigo-200 dark:text-indigo-900/60 select-none leading-none">"</span>
              <div className="relative pl-3">
                <p className="text-sm sm:text-base font-semibold italic text-gray-700 dark:text-gray-300 leading-relaxed">
                  Practice makes a man perfect.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-indigo-300 to-transparent dark:from-indigo-700" />
                  <p className="text-xs font-bold text-indigo-500 dark:text-indigo-400 whitespace-nowrap">
                    — William Shakespeare
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
