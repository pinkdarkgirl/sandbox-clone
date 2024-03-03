// component imports
import Footer from './components/Footer'
import Land from './components/Land'
import Metaverse from './components/Metaverse'
import Brands from './components/Brands'
import Creator from './components/Creator'
import Experiences from './components/Experiences'
import Avatar from './components/Avatar'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
        <div className="background-full overflow-hidden">
          <Avatar />
          <Creator />
          <Brands />
          <Land />
          <Experiences />
          <Metaverse />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
