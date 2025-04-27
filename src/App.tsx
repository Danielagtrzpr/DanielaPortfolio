import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import FollowCursor from './components/FollowCursor'
import { useScrollPosition } from './hooks/useScrollPosition'

function App() {

  const scrollPosition = useScrollPosition(); 

  return (
    <div className='relative bg-background min-h-screen dark:bg-background-dark scroll-smooth'>
      <Header scrollPosition={scrollPosition}/>
      <main className='relative flex flex-col items-center justify-center'>
        <FollowCursor/>
        <Presentation currentSection = {scrollPosition.currentSection}/>
        <Projects currentSection = {scrollPosition.currentSection}/>
        <AboutMe currentSection = {scrollPosition.currentSection}/>
        <Contact currentSection = {scrollPosition.currentSection}/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
