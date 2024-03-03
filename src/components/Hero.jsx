import video from '../assets/hero.webm'
import logo from '../assets/Sandbox-logo.svg'

function Hero() {
  return (
    <div className="sticky  top-0 z-0 flex h-md w-full	 flex-row items-center justify-center lg:h-[550px]">
      <div className="absolute inset-0">
        <video
          src={video}
          autoPlay
          muted
          loop
          className="absolute left-1/2	 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        ></video>
      </div>
      <div className=" z-20 flex flex-col items-center justify-center px-6 md:px-20">
        <img src={logo} className="shadow-blu mb-3 w-56 md:w-96" />
        <p className="mb-8 text-center	 text-large font-semibold text-white md:w-7/12 ">
          Play together, create anything, and own virtual land. Let’s build a
          whole new world together.
        </p>
        <a className="max-w-full rounded-3xl bg-bluey px-14 py-2 text-center font-semibold text-white	 hover:bg-blueyLight ">
          Enter the metaverse
        </a>
      </div>
    </div>
  )
}

export default Hero
