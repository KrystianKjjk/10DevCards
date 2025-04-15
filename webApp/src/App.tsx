import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="min-h-screen bg-gray-500 flex flex-col items-center justify-center p-4">
          {/* Sekcja logotypów */}
          <div className="flex items-center space-x-8 mb-8">
              <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                  <img src={viteLogo} alt="Vite logo" className="h-16 w-16" />
              </a>
              <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                  <img src={reactLogo} alt="React logo" className="h-16 w-16" />
              </a>
          </div>

          {/* Tytuł */}
          <h1 className="text-3xl font-bold mb-6 red">Vite</h1>

          {/* Karta z przyciskiem i opisem */}
          <div className="bg-white p-6 rounded-md shadow-md text-center">
              <button
                  onClick={() => setCount((count) => count + 1)}
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
              >
                  count is {count}
              </button>
              <p className="mt-4 text-gray-700">
                  Edit <code className="bg-gray-200 px-1 py-0.5 rounded">src/App.tsx</code> and save to test HMR
              </p>
          </div>

          {/* Informacja na dole */}
          <p className="mt-6 text-gray-500">
              Click on the Vite and React logos to learn more
          </p>
      </div>
  )
}

export default App
