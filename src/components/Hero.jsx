import { ExternalLink, Mail, MapPin, ChevronDown, Download } from 'lucide-react'

const floatingTags = [
  { text: 'Spring Boot', pos: 'top-20 left-3 sm:left-10', delay: '0ms' },
  { text: 'React', pos: 'top-32 right-3 sm:right-10', delay: '500ms' },
  { text: 'Kafka', pos: 'bottom-36 left-6 sm:left-16', delay: '1000ms' },
  { text: 'Microservices', pos: 'bottom-24 right-4 sm:right-14', delay: '1500ms' },
  { text: 'PostgreSQL', pos: 'top-[45%] left-1 sm:left-6', delay: '750ms' },
  { text: 'Docker', pos: 'top-[45%] right-1 sm:right-6', delay: '1250ms' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 pt-20 pb-12"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/60 to-violet-50/40 dark:from-gray-950 dark:via-indigo-950/30 dark:to-violet-950/20" />
        <div className="absolute top-16 -left-10 sm:left-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-16 -right-10 sm:right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-violet-400/10 dark:bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] bg-cyan-400/5 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating tech tags — visible sm+ */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        {floatingTags.map(({ text, pos, delay }) => (
          <span
            key={text}
            className={`absolute ${pos} px-3 py-1.5 rounded-full text-xs font-mono font-medium
              bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm
              border border-indigo-200/60 dark:border-indigo-800/60
              text-indigo-600 dark:text-indigo-400
              shadow-sm animate-float opacity-60`}
            style={{ animationDelay: delay }}
          >
            {text}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-5 relative z-10">

        {/* Avatar */}
        <div className="animate-fade-in">
          <div className="relative">
            <div className="p-[3.5px] rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 animate-pulse-glow">
              <div className="w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full overflow-hidden bg-gray-900">
                <img
                  src="/my_pic.JPG"
                  alt="Suresh Gudibanda"
                  className="w-full h-full object-cover object-top scale-105"
                />
              </div>
            </div>
            <span className="absolute bottom-2 right-2 w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 border-[3px] border-white dark:border-gray-950 rounded-full shadow-lg shadow-emerald-500/50" />
          </div>
        </div>

        {/* Badge */}
        <div className="animate-fade-in delay-100">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 text-xs font-bold tracking-[0.12em] uppercase text-indigo-600 dark:text-indigo-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Software Engineer · 3 Years
          </span>
        </div>

        {/* Name */}
        <div className="text-center animate-slide-up delay-100">
          <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="text-gray-900 dark:text-white">Suresh </span>
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 dark:from-indigo-400 dark:via-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Gudibanda
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 text-center max-w-xl leading-relaxed animate-slide-up delay-200 px-2">
          Building scalable apps with{' '}
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Java</span>,{' '}
          <span className="text-violet-600 dark:text-violet-400 font-semibold">Spring Boot</span>{' '}
          &{' '}
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold">React</span>
        </p>

        {/* Location + Email row */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-500 animate-slide-up delay-300">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-indigo-500" />
            Bangalore, India
          </span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
          <a
            href="mailto:gudibandasuresh3@gmail.com"
            className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Mail size={13} className="text-indigo-500" />
            gudibandasuresh3@gmail.com
          </a>
        </div>

        {/* CTA buttons — full width on mobile */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 animate-slide-up delay-400 px-2 sm:px-0">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Mail size={16} />
            Get In Touch
          </a>
          <a
            href="/resume/resume.pdf"
            download="Suresh_Gudibanda_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-indigo-200 dark:border-indigo-800/70 bg-indigo-50/80 dark:bg-indigo-950/40 backdrop-blur-sm text-indigo-700 dark:text-indigo-300 font-bold text-sm hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
          >
            <Download size={16} />
            Download CV
          </a>
          <a
            href="https://linkedin.com/in/suresh-gudibanda-77b5bb22a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 font-bold text-sm hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
          >
            <ExternalLink size={16} />
            LinkedIn
          </a>
        </div>

        {/* Stats */}
        <div className="w-full grid grid-cols-3 gap-3 max-w-xs sm:max-w-sm pt-2 animate-slide-up delay-500 px-2 sm:px-0">
          {[
            { value: '3', label: 'Years Exp.' },
            { value: '10+', label: 'Technologies' },
            { value: 'MCA', label: 'Post Grad' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="text-center py-3 px-2 rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/60 shadow-sm"
            >
              <div className="text-lg sm:text-2xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
                {value}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 mt-0.5 font-semibold tracking-wide">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors animate-bounce"
      >
        <span className="text-[10px] font-semibold tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </a>
    </section>
  )
}
