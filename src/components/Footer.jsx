import { Mail, ExternalLink, ArrowUp } from 'lucide-react'
import SGLogo from './SGLogo'

const navLinks = ['About', 'Skills', 'Experience', 'Education', 'Contact']

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
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm text-gray-500 hover:text-indigo-400 transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:gudibandasuresh3@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-200"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://linkedin.com/in/suresh-gudibanda-77b5bb22a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-200"
            >
              <ExternalLink size={16} />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 hover:bg-indigo-600/40 hover:border-indigo-400 transition-all duration-200"
            >
              <ArrowUp size={16} />
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
