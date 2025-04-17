import './App.css'
import Header from './components/Header'
import Presentation from './components/Presentation'

function App() {

  return (
    <div className='bg-background min-h-screen dark:bg-background-dark'>
      <Header/>
      <main className='relative pt-30 flex flex-col items-center justify-center h-screen'>
        <Presentation/>
      </main>
    </div>
  )
}

export default App
