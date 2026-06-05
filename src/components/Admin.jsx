import { useState, useRef } from 'react'
import {
  Lock, User, Eye, EyeOff, Upload, FileText, Trash2,
  CheckCircle, AlertCircle, LogOut, Download, Shield, ArrowLeft
} from 'lucide-react'
import SGLogo from './SGLogo'

const CREDS = { user: 'suresh', pass: '123456' }
const RESUME_KEY = 'sg_resume_data'
const RESUME_NAME_KEY = 'sg_resume_name'
const RESUME_SIZE_KEY = 'sg_resume_size'
const SESSION_KEY = 'sg_admin_session'

export default function Admin() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(SESSION_KEY) === '1')
  const [form, setForm]     = useState({ user: '', pass: '' })
  const [showPass, setShowPass] = useState(false)
  const [loginErr, setLoginErr] = useState('')
  const [dragging, setDragging] = useState(false)
  const [status, setStatus]   = useState('idle') // idle | uploading | success | error
  const [errMsg, setErrMsg]   = useState('')
  const [resumeName, setResumeName] = useState(() => localStorage.getItem(RESUME_NAME_KEY) || '')
  const [resumeSize, setResumeSize] = useState(() => localStorage.getItem(RESUME_SIZE_KEY) || '')
  const fileRef = useRef(null)

  /* ── Auth ── */
  const handleLogin = (e) => {
    e.preventDefault()
    if (form.user === CREDS.user && form.pass === CREDS.pass) {
      sessionStorage.setItem(SESSION_KEY, '1')
      setAuthed(true)
      setLoginErr('')
    } else {
      setLoginErr('Invalid username or password.')
    }
  }
  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY)
    setAuthed(false)
    setForm({ user: '', pass: '' })
  }

  /* ── Upload ── */
  const processFile = (file) => {
    if (!file) return
    if (file.type !== 'application/pdf') {
      setErrMsg('Only PDF files are supported.')
      setStatus('error')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      setErrMsg('File too large. Max size is 10 MB.')
      setStatus('error')
      return
    }
    setStatus('uploading')
    setErrMsg('')
    const reader = new FileReader()
    reader.onload = () => {
      try {
        localStorage.setItem(RESUME_KEY, reader.result)
        localStorage.setItem(RESUME_NAME_KEY, file.name)
        localStorage.setItem(RESUME_SIZE_KEY, formatSize(file.size))
        setResumeName(file.name)
        setResumeSize(formatSize(file.size))
        setStatus('success')
        setTimeout(() => setStatus('idle'), 4000)
      } catch {
        setErrMsg('Storage limit reached. Try a smaller file.')
        setStatus('error')
      }
    }
    reader.onerror = () => { setErrMsg('Failed to read file.'); setStatus('error') }
    reader.readAsDataURL(file)
  }

  const handleDelete = () => {
    localStorage.removeItem(RESUME_KEY)
    localStorage.removeItem(RESUME_NAME_KEY)
    localStorage.removeItem(RESUME_SIZE_KEY)
    setResumeName('')
    setResumeSize('')
    setStatus('idle')
  }

  const handlePreview = () => {
    const data = localStorage.getItem(RESUME_KEY)
    if (data) window.open(data, '_blank')
  }

  /* ── Drag & Drop ── */
  const onDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files[0]
    processFile(file)
  }

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Top bar */}
      <header className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <SGLogo size={32} />
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Admin Portal</p>
            <p className="text-sm font-black text-white leading-tight">Suresh Gudibanda</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/#"
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft size={13} />
            Portfolio
          </a>
          {authed && (
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 border border-gray-800 hover:border-rose-500/30 transition-all duration-200"
            >
              <LogOut size={13} />
              Logout
            </button>
          )}
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        {!authed ? <LoginCard form={form} setForm={setForm} showPass={showPass}
          setShowPass={setShowPass} loginErr={loginErr} onSubmit={handleLogin} />
        : (
          <div className="w-full max-w-xl space-y-5">
            {/* Page title */}
            <div>
              <h1 className="text-2xl font-black text-white">Resume Manager</h1>
              <p className="text-sm text-gray-500 mt-1">Upload a PDF — visitors will download the latest version.</p>
            </div>

            {/* Current resume card */}
            {resumeName ? (
              <div className="p-5 rounded-2xl bg-gray-900 border border-gray-800">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Current Resume</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                    <FileText size={18} className="text-indigo-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white truncate">{resumeName}</p>
                    <p className="text-xs text-gray-500">{resumeSize}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handlePreview}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-200"
                      title="Preview in new tab"
                    >
                      <Eye size={15} />
                    </button>
                    <button
                      onClick={() => {
                        const data = localStorage.getItem(RESUME_KEY)
                        if (!data) return
                        const link = document.createElement('a')
                        link.href = data
                        link.download = resumeName || 'resume.pdf'
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                      }}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200"
                      title="Download"
                    >
                      <Download size={15} />
                    </button>
                    <button
                      onClick={handleDelete}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-rose-400 hover:bg-rose-500/10 transition-all duration-200"
                      title="Delete"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40 flex items-center gap-3">
                <AlertCircle size={16} className="text-amber-400 flex-shrink-0" />
                <p className="text-sm text-amber-300/80">No resume uploaded yet. Upload one below.</p>
              </div>
            )}

            {/* Upload zone */}
            <div
              onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
              onClick={() => fileRef.current?.click()}
              className={`relative p-8 rounded-2xl border-2 border-dashed flex flex-col items-center gap-3 cursor-pointer transition-all duration-200
                ${dragging
                  ? 'border-indigo-500 bg-indigo-500/10'
                  : 'border-gray-700 bg-gray-900/60 hover:border-indigo-500/60 hover:bg-indigo-500/5'}`}
            >
              <input
                ref={fileRef}
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={(e) => processFile(e.target.files[0])}
              />
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200
                ${dragging ? 'bg-indigo-500/30' : 'bg-gray-800'}`}>
                <Upload size={20} className={dragging ? 'text-indigo-400' : 'text-gray-500'} />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-300">
                  {dragging ? 'Drop it here!' : 'Drag & drop or click to upload'}
                </p>
                <p className="text-xs text-gray-600 mt-1">PDF only · Max 10 MB</p>
              </div>
            </div>

            {/* Status feedback */}
            {status === 'uploading' && (
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-950/50 border border-indigo-800/50 text-sm text-indigo-300">
                <div className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin flex-shrink-0" />
                Saving resume...
              </div>
            )}
            {status === 'success' && (
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-950/50 border border-emerald-800/50 text-sm font-semibold text-emerald-400">
                <CheckCircle size={16} className="flex-shrink-0" />
                Resume uploaded successfully! Visitors can now download it.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-rose-950/50 border border-rose-800/50 text-sm font-semibold text-rose-400">
                <AlertCircle size={16} className="flex-shrink-0" />
                {errMsg}
              </div>
            )}

            {/* Info note */}
            <div className="flex items-start gap-2.5 p-4 rounded-xl bg-gray-900 border border-gray-800">
              <Shield size={14} className="text-indigo-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-500 leading-relaxed">
                Resume is stored securely in this browser. Upload from the same browser you use to manage the site so visitors always get the latest version.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

function LoginCard({ form, setForm, showPass, setShowPass, loginErr, onSubmit }) {
  return (
    <div className="w-full max-w-sm">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <SGLogo size={64} />
        </div>
        <h1 className="text-2xl font-black text-white">Admin Login</h1>
        <p className="text-sm text-gray-500 mt-1">Sign in to manage your portfolio</p>
      </div>

      <form onSubmit={onSubmit} className="p-6 rounded-3xl bg-gray-900 border border-gray-800 shadow-2xl space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Username</label>
          <div className="relative">
            <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
            <input
              type="text"
              required
              autoComplete="username"
              value={form.user}
              onChange={(e) => setForm({ ...form, user: e.target.value })}
              placeholder="suresh"
              className="w-full pl-9 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-600 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Password</label>
          <div className="relative">
            <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
            <input
              type={showPass ? 'text' : 'password'}
              required
              autoComplete="current-password"
              value={form.pass}
              onChange={(e) => setForm({ ...form, pass: e.target.value })}
              placeholder="••••••"
              className="w-full pl-9 pr-10 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-600 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            />
            <button type="button" onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400 transition-colors">
              {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
        </div>

        {loginErr && (
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-rose-950/60 border border-rose-800/50 text-xs font-semibold text-rose-400">
            <AlertCircle size={13} />
            {loginErr}
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 mt-2"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}
