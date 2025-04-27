import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import FollowCursor from './components/FollowCursor'

function App() {
  return (
    <div className='relative bg-background min-h-screen dark:bg-background-dark scroll-smooth'>
      <Header/>
      <main className='relative flex flex-col items-center justify-center'>
        <FollowCursor/>
        <Presentation/>
        <Projects/>
        <AboutMe/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
