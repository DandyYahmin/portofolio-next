import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* template */}
      <Navbar/>
      <div className='container mt-24 lg:mt-40 mx-auto px-12 py-4'>
        <Hero/>
        <Skills/>
      </div>
      <Footer/>
    </main>
  )
}
