import { useState } from 'react'
import './index.css'
import Headers from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
        <p className="mb-4">This is a simple React application with Tailwind CSS.</p>
      </div>
      <Footer />
    </>
  )
}

export default App
