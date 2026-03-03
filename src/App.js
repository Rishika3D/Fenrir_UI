import React, { useState } from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import ScansPage from './components/ScansPage'

function App() {
  const [page, setPage] = useState('signup')
  const [darkMode, setDarkMode] = useState(true)

  const navigate = (dest) => setPage(dest)
  const toggleDarkMode = () => setDarkMode((d) => !d)

  if (page === 'login')     return <Login navigate={navigate} />
  if (page === 'dashboard') return <Dashboard navigate={navigate} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
  if (page === 'scans')     return <ScansPage navigate={navigate} darkMode={darkMode} />
  return <Signup navigate={navigate} />
}

export default App
