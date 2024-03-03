// img imports
import cube1 from '../assets/cube-a.svg'
import cube2 from '../assets/cube-b.svg'
import cube3 from '../assets/cube-c.svg'

function Metaverse() {
  return (
    <div className=" relative w-full bg-footer-texture bg-cover   bg-left-bottom bg-no-repeat		">
      <div className="bg-cubes-texture">
        <div className=" absolute -top-8 h-16 w-full">
          <div className="h-8  bg-gradient-to-tl from-gradientPurp via-gradientPurpA to-transparent"></div>
          <div className="h-0.5 w-full bg-gradient-to-r from-blueyDark via-blueyLight to-blueyDark shadow-md "></div>
          <div className="h-8 rotate-180 transform bg-radial-gradient-break"></div>
        </div>
        <img
          src={cube1}
          className="absolute -top-8 right-4 h-16 -rotate-12 transform"
        />
        <img
          src={cube1}
          className="absolute -left-6 -top-5 h-20 rotate-45 transform"
        />
        <img
          src={cube2}
          className="absolute -left-12 top-[85%] h-72 rotate-12 transform"
        />
        <img
          src={cube2}
          className="absolute -right-24 top-40 h-32 -rotate-12 transform "
        />
        <img
          src={cube3}
          className="absolute -right-1 top-[90%] h-52 -rotate-[18deg] transform"
        />
        <div className="flex flex-col items-center justify-center px-6 pb-20 pt-16">
          <h2 className="mb-4 text-center text-3xl font-semibold text-white">
            Ready to unlock a whole new world?
          </h2>
          <p className="mb-8 text-center text-white">
            Start exploring, find your communities, and make your mark in the
            metaverse!
          </p>
          <a className="max-w-56 rounded-3xl bg-bluey px-6 py-2 font-semibold text-white	 hover:bg-blueyLight ">
            Enter the metaverse
          </a>
        </div>
      </div>
    </div>
  )
}

export default Metaverse
