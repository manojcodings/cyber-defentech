import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { coursesList } from '../data/courseData'
import './SearchBar.css'

function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const navigate = useNavigate()

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)

    if (value.trim() === '') {
      setResults([])
      return
    }

    const filtered = coursesList.filter((course) =>
      course.title.toLowerCase().includes(value.toLowerCase())
    )
    setResults(filtered)
  }

  const handleSelect = (course) => {
    navigate(`/courses/${course.slug}`)
    setQuery('')
    setResults([])
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search any course"
        value={query}
        onChange={handleChange}
      />
      {results.length > 0 && (
        <ul className="search-results">
          {results.map((course) => (
            <li key={course.slug} onClick={() => handleSelect(course)}>
              <img src={course.image} alt={course.title} className="search-result-img" />
              <span>{course.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar