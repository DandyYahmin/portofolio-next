import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Project from "../components/Project"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* template */}
        <Navbar/>
        <div className='container mt-20 lg:mt-34 mx-auto px-12 py-4'>
            <Project/>
        </div>
        <Footer/>
    </main>
  )
}
