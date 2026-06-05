import { useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'
import { Mail, ExternalLink, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || ''

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gudibandasuresh3@gmail.com',
    href: 'mailto:gudibandasuresh3@gmail.com',
    color: 'from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-800/50',
    hover: 'hover:border-indigo-400 dark:hover:border-indigo-600',
  },
  {
    icon: ExternalLink,
    label: 'LinkedIn',
    value: 'suresh-gudibanda-77b5bb22a',
    href: 'https://linkedin.com/in/suresh-gudibanda-77b5bb22a',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800/50',
    hover: 'hover:border-blue-400 dark:hover:border-blue-600',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bangalore, Karnataka, India',
    href: null,
    color: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800/50',
    hover: 'hover:border-emerald-400 dark:hover:border-emerald-600',
  },
]

const EMPTY = { name: '', email: '', message: '' }

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.1 })
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!WEB3FORMS_KEY) {
      setErrorMsg('Contact form not configured yet. Please email directly.')
      setStatus('error')
      return
    }
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio Contact from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
          botcheck: '',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm(EMPTY)
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong. Try emailing directly.')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-10 sm:py-16 px-5" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Contact"
          title="Let's Connect"
          subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
          inView={inView}
        />

        <div className="mt-8 sm:mt-12 grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: info */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">Get In Touch</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm open to new opportunities, collaborations, and interesting conversations. Drop me a line!
              </p>
            </div>

            <div className="space-y-3">
              {contactLinks.map(({ icon: Icon, label, value, href, color, bg, hover }) => {
                const inner = (
                  <div
                    className={`flex items-center gap-4 p-4 rounded-2xl border ${bg} ${hover} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md flex-shrink-0`}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                        {label}
                      </p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mt-0.5 break-all">
                        {value}
                      </p>
                    </div>
                  </div>
                )
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                )
              })}
            </div>

            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/50 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              Currently open to new opportunities
            </div>

            {/* Languages */}
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/70 dark:border-gray-700/50">
              <p className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">Languages</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { lang: 'English', level: 'Professional' },
                  { lang: 'Telugu', level: 'Native' },
                  { lang: 'Kannada', level: 'Conversational' },
                ].map(({ lang, level }) => (
                  <span key={lang} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                    {lang}
                    <span className="text-gray-400 dark:text-gray-600">·</span>
                    <span className="text-gray-400 dark:text-gray-500 font-medium">{level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl shadow-black/5 dark:shadow-black/20 space-y-5"
            >
              {/* Honeypot — hidden, stops bots */}
              <input type="checkbox" name="botcheck" className="hidden" readOnly />

              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 disabled:opacity-60"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 disabled:opacity-60"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-60"
                />
              </div>

              {/* Feedback banners */}
              {status === 'success' && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
                  <CheckCircle size={16} className="flex-shrink-0" />
                  Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-400 text-sm font-semibold">
                  <AlertCircle size={16} className="flex-shrink-0" />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === 'loading' && <Loader size={16} className="animate-spin" />}
                {status === 'success' && <CheckCircle size={16} />}
                {status === 'idle' || status === 'error' ? <Send size={16} /> : null}
                {status === 'loading' ? 'Sending…' : status === 'success' ? 'Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
