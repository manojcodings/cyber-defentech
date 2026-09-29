import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

function ThemeToggle() {
  const [isLight, setIsLight] = useState(() => {
  try {
    return localStorage.getItem('theme') !== 'dark'
  } catch {
    return true
  }
})

  useEffect(() => {
    const theme = isLight ? 'light' : 'dark'

    // CSS variables agar :root/html par defined hain to bhi theme work karegi.
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.classList.toggle('light-mode', isLight)
    document.body.classList.toggle('light-mode', isLight)

    try {
      localStorage.setItem('theme', theme)
    } catch {
      // localStorage unavailable hone par bhi toggle kaam karta rahega.
    }
  }, [isLight])

  const toggleTheme = () => {
    setIsLight((currentValue) => !currentValue)
  }

  return (
    <button
      type="button"
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {isLight ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
    </button>
  )
}

export default ThemeToggle
