// import viteLogo from '/vite.svg'

import '../styles/index.css'
import '../styles/App.css'
import '../styles/colors.css'

import Sidebar from './Sidebar'
import Content from './Content'

function App() {
  let themeNumber = Math.ceil(Math.random() * 4)
  // themeNumber = 2

  return (
    <div className={`app theme${themeNumber} text-content`}>
      <Sidebar />
      <Content />
    </div>
  )
}

export default App
