import { Mail, ExternalLink, ArrowUp, User, Code2, Briefcase, FolderOpen, GraduationCap, Award, MessageSquare, Link } from 'lucide-react'
import SGLogo from './SGLogo'

const navLinks = [
  { label: 'About',          icon: User },
  { label: 'Skills',         icon: Code2 },
  { label: 'Experience',     icon: Briefcase },
  { label: 'Projects',       icon: FolderOpen },
  { label: 'Education',      icon: GraduationCap },
  { label: 'Certifications', icon: Award },
  { label: 'Contact',        icon: MessageSquare },
]

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      {/* Glow orbs */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 pt-12 pb-6">
        {/* Main content */}
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Logo */}
          <div className="flex flex-col items-center gap-3">
            <SGLogo size={64} className="drop-shadow-2xl" />
            <span className="text-xl font-black text-white mt-1">
              Suresh{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Gudibanda
              </span>
            </span>
            <p className="text-xs text-gray-500 tracking-widest uppercase">
              Software Engineer · Bangalore
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-1 gap-y-1">
            {navLinks.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-200 group"
              >
                <Icon size={12} className="group-hover:scale-110 transition-transform duration-200" />
                {label}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-2">
            <a
              href="mailto:gudibandasuresh3@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-xs font-semibold text-gray-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all duration-200 group"
            >
              <Mail size={13} className="group-hover:scale-110 transition-transform duration-200" />
              Email
            </a>
            <a
              href="https://github.com/Gudibanda-Suresh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-xs font-semibold text-gray-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all duration-200 group"
            >
              <Link size={13} className="group-hover:scale-110 transition-transform duration-200" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/suresh-gudibanda-77b5bb22a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-xs font-semibold text-gray-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all duration-200 group"
            >
              <ExternalLink size={13} className="group-hover:scale-110 transition-transform duration-200" />
              LinkedIn
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-xs font-semibold text-indigo-400 hover:bg-indigo-600/40 hover:border-indigo-400 transition-all duration-200 group"
            >
              <ArrowUp size={13} className="group-hover:scale-110 transition-transform duration-200" />
              Top
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-gray-800/60" />

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <p className="text-xs text-gray-700">
            © {new Date().getFullYear()} Suresh Gudibanda · All rights reserved
          </p>
          <a
            href="/admin"
            className="text-[10px] text-gray-800 hover:text-gray-600 transition-colors duration-200 select-none"
            tabIndex={-1}
            aria-hidden="true"
          >
            ·
          </a>
        </div>
      </div>
    </footer>
  )
}
