import React, { useState } from 'react'
import Sidebar from './Sidebar'

/* ── Icons ──────────────────────────────────────────────────── */
const HomeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)
const ChevronRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)
const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const MinimizeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 14 10 14 10 20" /><polyline points="20 10 14 10 14 4" />
    <line x1="10" y1="14" x2="3" y2="21" /><line x1="21" y1="3" x2="14" y2="10" />
  </svg>
)
const XIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

/* ── Step icons ─────────────────────────────────────────────── */
const SpiderIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? 'white' : 'currentColor'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="5" />
    <line x1="11" y1="2" x2="11" y2="6" /><line x1="11" y1="16" x2="11" y2="20" />
    <line x1="2" y1="11" x2="6" y2="11" /><line x1="16" y1="11" x2="22" y2="11" />
    <line x1="4.22" y1="4.22" x2="7.05" y2="7.05" /><line x1="14.95" y1="14.95" x2="17.78" y2="17.78" />
    <line x1="17.78" y1="4.22" x2="14.95" y2="7.05" /><line x1="7.05" y1="14.95" x2="4.22" y2="17.78" />
  </svg>
)
const MappingIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? 'white' : 'currentColor'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="8" width="6" height="6" rx="1" />
    <rect x="16" y="3" width="6" height="6" rx="1" />
    <rect x="16" y="15" width="6" height="6" rx="1" />
    <line x1="8" y1="11" x2="16" y2="6" /><line x1="8" y1="11" x2="16" y2="18" />
  </svg>
)
const TestingIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? 'white' : 'currentColor'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6v8l3 9H6l3-9V3z" /><line x1="9" y1="3" x2="15" y2="3" />
    <circle cx="12" cy="16" r="1.5" fill={active ? 'white' : 'currentColor'} stroke="none" />
  </svg>
)
const ValidatingIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? 'white' : 'currentColor'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)
const ReportingIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? 'white' : 'currentColor'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" />
  </svg>
)

/* ── Scan steps ─────────────────────────────────────────────── */
const stepDefs = [
  { label: 'Spidering',  Icon: SpiderIcon },
  { label: 'Mapping',    Icon: MappingIcon },
  { label: 'Testing',    Icon: TestingIcon },
  { label: 'Validating', Icon: ValidatingIcon },
  { label: 'Reporting',  Icon: ReportingIcon },
]

const StepIndicator = ({ stepDef, index, activeStep, darkMode }) => {
  const { label, Icon } = stepDef
  const isDone   = index < activeStep
  const isActive = index === activeStep

  const circleCls = isDone || isActive
    ? 'bg-teal-500 shadow-[0_0_14px_rgba(20,184,166,0.35)]'
    : darkMode
      ? 'bg-[#252525] border border-[#3a3a3a] text-gray-500'
      : 'bg-gray-100 border border-gray-200 text-gray-400'

  const labelCls = isDone || isActive
    ? darkMode ? 'text-white' : 'text-gray-900'
    : darkMode ? 'text-gray-500' : 'text-gray-400'

  const lineCls = isDone
    ? 'bg-teal-500'
    : darkMode ? 'bg-[#2a2a2a]' : 'bg-gray-200'

  return (
    <div className="flex items-center flex-1 last:flex-none">
      <div className="flex flex-col items-center gap-2 shrink-0">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${circleCls}`}>
          <Icon active={isDone || isActive} />
        </div>
        <span className={`text-xs font-medium whitespace-nowrap ${labelCls}`}>{label}</span>
      </div>
      {index < stepDefs.length - 1 && (
        <div className={`h-0.5 flex-1 mx-3 mb-5 rounded-full transition-all ${lineCls}`} />
      )}
    </div>
  )
}

/* ── Activity log entries ───────────────────────────────────── */
const logEntries = [
  { time: '09:00:12', type: 'info',text: 'Scan initiated for target: google.com' },
  { time: '09:00:14', type: 'info',text: 'Starting spider crawl — depth: 5, threads: 10' },
  { time: '09:00:19', type: 'success',text: 'Discovered 42 endpoints across 3 subdomains' },
  { time: '09:00:31', type: 'warn',text: 'Rate limiting detected on /api/v2 — throttling requests' },
  { time: '09:00:45', type: 'info',text: 'Mapping attack surface — analyzing HTTP methods & params' },
  { time: '09:01:02', type: 'success',text: 'Attack surface mapped: 18 injectable parameters identified' },
  { time: '09:01:10', type: 'error',text: 'CRITICAL: SQL Injection detected at /api/user?id=1' },
  { time: '09:01:15', type: 'info',text: 'Spawning sub-agent to verify SQLi finding...' },
  { time: '09:01:23', type: 'warn',text: 'XSS candidate found at /search?q= — queuing validation' },
  { time: '09:01:30', type: 'success',text: 'SQLi confirmed — payload: \' OR 1=1--' },
  { time: '09:01:44', type: 'info',text: 'Testing authentication endpoints for brute-force exposure' },
  { time: '09:02:01', type: 'warn',text: 'No rate limit on /login — brute-force possible' },
]

const logColor = {
  info:    'text-gray-400',
  success: 'text-teal-400',
  warn:    'text-amber-400',
  error:   'text-red-400',
}

/* ── Finding log entries */
const findings = [
  {
    severity: 'Critical',
    title:'SQL Injection',
    url:'/api/user?id=1',
    desc:'Unsanitized parameter allows raw SQL execution. Full database read/write confirmed.',
    color:{ dot: 'bg-red-500', badge: 'bg-red-500/15 text-red-400 border border-red-500/30' },
  },
  {
    severity: 'High',
    title:'Stored XSS',
    url:'/profile/bio',
    desc:'User-supplied HTML is rendered without sanitization, enabling persistent script injection.',
    color:{ dot: 'bg-orange-500', badge: 'bg-orange-500/15 text-orange-400 border border-orange-500/30' },
  },
  {
    severity: 'High',
    title:'Missing Rate Limit',
    url:'/auth/login',
    desc:'No throttling or lockout on login endpoint — susceptible to credential stuffing.',
    color:{ dot: 'bg-orange-500', badge: 'bg-orange-500/15 text-orange-400 border border-orange-500/30' },
  }
]

/* ── Component ──────────────────────────────────────────────── */
const ScansPage = ({ navigate, darkMode = true }) => {
  const [activeTab, setActiveTab] = useState('activity')
  const activeStep = 0 // Spidering is active (0% progress)

  const bg        = darkMode ? 'bg-[#0f0f0f] text-white' : 'bg-[#f5f5f5] text-gray-900'
  const border    = darkMode ? 'border-[#2a2a2a]' : 'border-gray-200'
  const subText   = darkMode ? 'text-gray-400' : 'text-gray-500'
  const cardBg    = darkMode ? 'bg-[#1a1a1a] border-[#2a2a2a]' : 'bg-white border-gray-200'
  const consoleBg = darkMode ? 'bg-[#0d0d0d]' : 'bg-gray-950'
  const divider   = darkMode ? 'divide-[#2a2a2a]' : 'divide-gray-200'

  const metaItems = [
    { label: 'Scan Type',value: 'Grey Box' },
    { label: 'Targets',value: 'google.com' },
    { label: 'Started At',value: 'Nov 22 09:00AM' },
    { label: 'Credentials',value: '2 Active' },
    { label: 'Files',value: 'Control.pdf' },
    { label: 'Checklists',value: '40/350' },
  ]

  const footerStats = [
    { label: 'Sub-Agents',value: 0 },
    { label: 'Parallel Executions',value: 2 },
    { label: 'Operations',value: 1 },
    { label: 'Critical',value: 1, color: 'text-red-400' },
    { label: 'High',value: 2, color: 'text-orange-400' },
    { label: 'Medium',value: 2, color: 'text-amber-400' },
    { label: 'Low',value: 0, color: 'text-green-400' },
  ]

  return (
    <div className={`h-screen flex overflow-hidden ${bg}`}>
      <Sidebar activePage="scans" navigate={navigate} darkMode={darkMode} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* ── Page header ── */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${border} shrink-0`}>
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold">Scan</h1>
            <div className={`flex items-center gap-1.5 text-sm ${subText}`}>
              <HomeIcon />
              <ChevronRight />
              <span>Private Assets</span>
              <ChevronRight />
              <span
                className="text-teal-500 font-medium hover:underline cursor-pointer"
                onClick={() => navigate('dashboard')}>
                Web App Servers
              </span>
              <ChevronRight />
              <span className={subText}>google.com</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors cursor-pointer ${darkMode ? 'border-[#2a2a2a] text-gray-300 hover:bg-white/5' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
              Export Report
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-lg border border-red-400 text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer">
              Stop Scan
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto">

          {/* ── Scan progress card ── */}
          <div className={`mx-6 mt-5 rounded-xl border ${cardBg}`}>
            {/* Top row: progress circle + steps */}
            <div className={`flex items-center gap-6 px-6 py-6 border-b ${border}`}>

              {/* Dark filled progress circle */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-[88px] h-[88px] rounded-full bg-[#0d0d0d] border-2 border-[#1e1e1e] flex flex-col items-center justify-center shadow-inner">
                  <span className="text-2xl font-bold text-teal-400 leading-none">0%</span>
                </div>
                <span className={`mt-2 text-xs font-medium ${subText}`}>In Progress</span>
              </div>

              {/* Vertical divider */}
              <div className={`w-px self-stretch mx-2 ${darkMode ? 'bg-[#2a2a2a]' : 'bg-gray-200'}`} />

              {/* Step indicators */}
              <div className="flex items-center justify-center flex-1">
                {stepDefs.map((stepDef, i) => (
                  <StepIndicator key={stepDef.label} stepDef={stepDef} index={i} activeStep={activeStep} darkMode={darkMode} />
                ))}
              </div>
            </div>

            {/* Bottom row: metadata */}
            <div className="flex items-center py-4">
              {metaItems.map((m) => (
                <div key={m.label} className="flex-1 px-6">
                  <p className={`text-xs ${subText} mb-0.5`}>{m.label}</p>
                  <p className={`font-semibold text-sm ${m.label === 'Checklists' ? 'text-teal-400' : ''}`}>{m.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Console + Finding log ── */}
          <div className="mx-6 mt-4 mb-4 flex gap-4" style={{ minHeight: 380 }}>

            {/* Live scan console */}
            <div className={`flex-1 flex flex-col rounded-xl border overflow-hidden ${cardBg}`}>
              {/* Console title bar */}
              <div className={`flex items-center justify-between px-4 py-2.5 border-b ${border} shrink-0`}>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-sm font-semibold">Live Scan Console</span>
                  <span className={`text-xs ${subText}`}>Running...</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button className={`p-1.5 rounded hover:bg-white/10 transition-colors ${subText} cursor-pointer`}>
                    <MinimizeIcon />
                  </button>
                  <button className={`p-1.5 rounded hover:bg-white/10 transition-colors ${subText} cursor-pointer`}>
                    <XIcon />
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className={`flex items-center gap-0 border-b ${border} shrink-0`}>
                {[
                  { id: 'activity',     label: 'Activity Log' },
                  { id: 'verification', label: 'Verification Loops' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-xs font-medium border-b-2 transition-colors cursor-pointer ${
                      activeTab === tab.id
                        ? 'border-teal-500 text-teal-400'
                        : `border-transparent ${subText} hover:text-white`
                    }`}>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Log content */}
              <div className={`flex-1 overflow-auto p-4 font-mono text-xs leading-relaxed ${consoleBg}`}>
                {activeTab === 'activity' ? (
                  <div className="space-y-1">
                    {logEntries.map((entry, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-gray-600 shrink-0">{entry.time}</span>
                        <span className={logColor[entry.type]}>{entry.text}</span>
                      </div>
                    ))}
                    <div className="flex gap-3 mt-2">
                      <span className="text-gray-600 shrink-0">09:02:15</span>
                      <span className="text-teal-400 animate-pulse">▌</span>
                    </div>
                  </div>
                ) : (
                  <div className={`flex flex-col items-center justify-center h-full ${subText} text-center`}>
                    <p className="text-sm font-medium mb-1">No verification loops running</p>
                    <p className="text-xs">Loops will appear here when sub-agents validate findings.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Finding log */}
            <div className={`w-80 flex flex-col rounded-xl border overflow-hidden ${cardBg}`}>
              <div className={`px-4 py-2.5 border-b ${border} shrink-0`}>
                <h3 className="text-sm font-semibold">Finding Log</h3>
                <p className={`text-xs ${subText}`}>{findings.length} findings so far</p>
              </div>

              <div className="flex-1 overflow-auto p-3 space-y-2.5">
                {findings.map((f, i) => (
                  <div key={i} className={`rounded-lg border p-3 ${darkMode ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium ${f.color.badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${f.color.dot}`} />
                        {f.severity}
                      </span>
                    </div>
                    <p className="text-xs font-semibold mb-0.5">{f.title}</p>
                    <p className={`text-xs font-mono mb-1 ${subText}`}>{f.url}</p>
                    <p className={`text-xs leading-relaxed ${subText}`}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer stats bar ── */}
        <div className={`flex items-center gap-0 border-t ${border} px-6 py-3 text-xs shrink-0 ${darkMode ? 'bg-[#141414]' : 'bg-white'}`}>
          {footerStats.map((s, i) => (
            <div key={i} className={`flex items-center gap-1.5 pr-5 mr-5 ${i < footerStats.length - 1 ? `border-r ${border}` : ''}`}>
              <span className={subText}>{s.label}:</span>
              <span className={`font-semibold ${s.color || ''}`}>{s.value}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ScansPage
