import React, { useState } from 'react'
import Sidebar from './Sidebar'

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
const RefreshIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
)
const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)
const FilterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="12" y1="18" x2="12" y2="18" />
  </svg>
)
const ColumnIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="18" rx="1" /><rect x="14" y="3" width="7" height="18" rx="1" />
  </svg>
)
const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)
const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)
const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

/* ── Severity icons ──────────────────────────────────────────── */
const CriticalIcon = () => (
  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  </div>
)
const HighIcon = () => (
  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  </div>
)
const MediumIcon = () => (
  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  </div>
)
const LowIcon = () => (
  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </div>
)

/* ── Mock data ───────────────────────────────────────────────── */
const scans = [
  { id: 1, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vuln: [5, 12, 23, 18], lastScan: '4d ago' },
  { id: 2, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vuln: [5, 12, 23, 18], lastScan: '4d ago' },
  { id: 3, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vuln: [5, 12, 23, 18], lastScan: '4d ago' },
  { id: 4, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vuln: [5, 12, 23, 18], lastScan: '4d ago' },
  { id: 5, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vuln: [5, 12, 23, 18], lastScan: '4d ago' },
  { id: 6, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vuln: [5, 12, 23, 18], lastScan: '4d ago' },
  { id: 7, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vuln: [5, 12, 23, 18], lastScan: '4d ago' },
  { id: 8, name: 'Web App Servers', type: 'Greybox', status: 'Scheduled', progress: 100, vuln: [5, 12], lastScan: '4d ago' },
  { id: 9, name: 'Web App Servers', type: 'Greybox', status: 'Scheduled', progress: 100, vuln: [5, 12], lastScan: '4d ago' },
  { id: 10, name: 'IoT Devices', type: 'Blackbox', status: 'Failed', progress: 10, vuln: [2, 4, 8, 1], lastScan: '3d ago' },
  { id: 11, name: 'Temp Data', type: 'Blackbox', status: 'Failed', progress: 10, vuln: [2, 4, 8, 1], lastScan: '3d ago' },
]

const statusStyle = {
  Completed: 'bg-green-50 text-green-600 border border-green-200',
  Scheduled: 'bg-gray-100 text-gray-500 border border-gray-200',
  Failed: 'bg-red-50 text-red-500 border border-red-200',
}

const vulnColors = ['bg-red-500', 'bg-orange-500', 'bg-amber-400', 'bg-green-500']

const Dashboard = ({ navigate, darkMode = true, toggleDarkMode, showToast }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [search, setSearch] = useState('')

  const bg = darkMode ? 'bg-[#0f0f0f] text-white' : 'bg-white text-gray-900'
  const border = darkMode ? 'border-[#2a2a2a]' : 'border-gray-200'
  const subText = darkMode ? 'text-gray-400' : 'text-gray-500'
  const cardBg = darkMode ? 'bg-[#1a1a1a] border-[#2a2a2a]' : 'bg-white border-gray-200'
  const inputBg = darkMode ? 'bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-800 placeholder-gray-400'
  const thClass = darkMode ? 'text-gray-500 border-[#2a2a2a]' : 'text-gray-400 border-gray-200'
  const rowHover = darkMode ? 'hover:bg-white/[0.03] border-[#2a2a2a]' : 'hover:bg-gray-50/80 border-gray-100'
  const statsBar = darkMode ? 'bg-[#1a1a1a] border-[#2a2a2a]' : 'bg-white border-gray-200'
  const toggleBtn = darkMode
    ? 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'

  const filtered = scans.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.type.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className={`h-screen flex overflow-hidden ${bg}`}>
      <Sidebar activePage="dashboard" navigate={navigate} darkMode={darkMode} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* ── Page header ── */}
        <div className={`flex items-center justify-between px-4 xl:px-6 py-4 border-b ${border}`}>
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-1 -ml-1 text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={() => setMobileOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <h1 className="text-lg font-bold hidden sm:block">Scan</h1>
            <div className={`flex items-center gap-1.5 text-sm ${subText}`}>
              <HomeIcon />
              <ChevronRight />
              <span>Private Assets</span>
              <ChevronRight />
              <span className="text-teal-500 font-medium">New Scan</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={toggleDarkMode}
              className={`hidden sm:flex w-8 h-8 rounded-lg items-center justify-center transition-colors cursor-pointer ${toggleBtn}`}>
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => showToast('Report exported successfully!')}
              className={`hidden sm:block px-4 py-2 text-sm font-medium rounded-lg border transition-colors cursor-pointer ${darkMode ? 'border-[#2a2a2a] text-gray-300 hover:bg-white/5' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
              Export
            </button>
            <button
              onClick={() => showToast('Scan stopped', 'error')}
              className="px-3 sm:px-4 py-2 text-sm font-medium rounded-lg border border-red-300 text-red-500 hover:bg-red-50 transition-colors cursor-pointer">
              Stop Scan
            </button>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className={`flex items-center gap-4 overflow-x-auto whitespace-nowrap border-b ${border} ${statsBar} text-sm px-4 xl:px-6 py-3 no-scrollbar`}>
          {[
            { label: 'Org', value: 'Project X' },
            { label: 'Owner', value: 'Nammagiri' },
            { label: 'Total Scans', value: '100' },
            { label: 'Scheduled', value: '1000' },
            { label: 'Rescans', value: '100' },
            { label: 'Failed Scans', value: '100' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-1.5 pr-4 ${i < 5 ? `border-r ${border}` : ''}`}>
              <span className={subText}>{item.label}:</span>
              <span className="font-semibold">{item.value}</span>
            </div>
          ))}
          <div className={`flex items-center gap-1.5 ${subText}`}>
            <RefreshIcon />
            <span>10m</span>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4 xl:p-6">
          {/* ── Severity cards ── */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:divide-x sm:divide-y-0 divide-y rounded-xl border mb-5 ${cardBg} ${darkMode ? 'divide-[#2a2a2a]' : 'divide-gray-200'}`}>
            {[
              { label: 'Critical Severity', value: 86, delta: '+2%', dir: 'up', color: 'text-red-500', icon: <CriticalIcon />, deltaColor: 'text-red-500' },
              { label: 'High Severity', value: 16, delta: '+0.9%', dir: 'up', color: 'text-orange-500', icon: <HighIcon />, deltaColor: 'text-orange-500' },
              { label: 'Medium Severity', value: 26, delta: '-0.9%', dir: 'down', color: 'text-amber-500', icon: <MediumIcon />, deltaColor: 'text-teal-500' },
              { label: 'Low Severity', value: 16, delta: '+0.9%', dir: 'up', color: 'text-blue-500', icon: <LowIcon />, deltaColor: 'text-orange-500' },
            ].map((s, i) => (
              <div key={i} className="px-6 py-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-sm font-medium ${subText}`}>{s.label}</span>
                  {s.icon}
                </div>
                <div className="flex items-end gap-3">
                  <span className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{s.value}</span>
                  <span className={`text-xs mb-1 ${s.deltaColor}`}>
                    {s.dir === 'up' ? '↑' : '↓'} {s.delta} {s.dir === 'up' ? 'increase' : 'decrease'} than yesterday
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ── Toolbar ── */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
            <div className={`flex-1 flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border text-sm ${inputBg}`}>
              <SearchIcon />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search scans..."
                className="flex-1 bg-transparent outline-none text-sm min-w-0"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <button
                onClick={() => showToast('Filter options opened')}
                className={`flex-1 sm:flex-none justify-center flex items-center gap-2 px-3.5 py-2.5 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${darkMode ? 'border-[#2a2a2a] text-gray-300 hover:bg-white/5' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                <FilterIcon />Filter
              </button>
              <button
                onClick={() => showToast('Column options opened')}
                className={`flex-1 sm:flex-none justify-center flex items-center gap-2 px-3.5 py-2.5 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${darkMode ? 'border-[#2a2a2a] text-gray-300 hover:bg-white/5' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                <ColumnIcon />Column
              </button>
              <button
                onClick={() => navigate('scans')}
                className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-4 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold transition-colors cursor-pointer shrink-0">
                <PlusIcon />New scan
              </button>
            </div>
          </div>

          {/* ── Table ── */}
          <div className={`rounded-xl border overflow-x-auto ${cardBg}`}>
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr className={`border-b ${thClass}`}>
                  {['Scan Name', 'Type', 'Status', 'Progress', 'Vulnerability', 'Last Scan'].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((scan) => (
                  <tr key={scan.id}
                    onClick={() => navigate('scans')}
                    className={`border-b last:border-0 transition-colors cursor-pointer ${rowHover}`}>
                    <td className="px-5 py-3.5 font-medium">{scan.name}</td>
                    <td className={`px-5 py-3.5 ${subText}`}>{scan.type}</td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${statusStyle[scan.status]}`}>
                        {scan.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-28 h-1.5 rounded-full ${darkMode ? 'bg-[#2a2a2a]' : 'bg-gray-200'}`}>
                          <div className="h-full rounded-full bg-teal-500 transition-all" style={{ width: `${scan.progress}%` }} />
                        </div>
                        <span className={`text-xs ${subText}`}>{scan.progress}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1">
                        {scan.vuln.map((count, i) => (
                          <span key={i} className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold text-white ${vulnColors[i]}`}>
                            {count}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className={`px-5 py-3.5 ${subText}`}>{scan.lastScan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
