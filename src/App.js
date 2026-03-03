import React, { useState } from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import ScansPage from './components/ScansPage'

function App() {
  const [page, setPage] = useState('signup')
  const [darkMode, setDarkMode] = useState(true)

  const [toast, setToast] = useState(null)

  const navigate = (dest) => setPage(dest)
  const toggleDarkMode = () => setDarkMode((d) => !d)

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  const renderPage = () => {
    if (page === 'login') return <Login navigate={navigate} showToast={showToast} />
    if (page === 'dashboard') return <Dashboard navigate={navigate} darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToast={showToast} />
    if (page === 'scans') return <ScansPage navigate={navigate} darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToast={showToast} />
    return <Signup navigate={navigate} showToast={showToast} />
  }

  return (
    <>
      {renderPage()}
      {toast && (
        <div className={`fixed bottom-4 right-4 px-4 py-3 rounded-xl shadow-2xl text-white text-sm font-medium z-[100] flex items-center gap-2 animate-in slide-in-from-bottom-5 fade-in duration-300 ${toast.type === 'error' ? 'bg-red-500' : 'bg-teal-500'}`}>
          {toast.message}
        </div>
      )}
    </>
  )
}

export default App
