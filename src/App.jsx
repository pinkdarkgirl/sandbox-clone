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

//icon import
import dc from './assets/discord-circle.svg'

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
      <a
        className="fixed bottom-5 right-5 z-30 opacity-85 hover:opacity-100"
        href="https://discord.com/invite/thesandboxgame"
      >
        <img src={dc} className="  w-12" />
      </a>
    </>
  )
}

export default App
