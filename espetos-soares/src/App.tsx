import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Main />
    </div>
  )
}

export default App
