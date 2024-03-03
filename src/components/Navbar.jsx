import logo from '../assets/Sandbox-logo.svg'
import language from '../assets/language-icon.svg'
import login from '../assets/login.svg'
import arrow from '../assets/sub-arrow.svg'

function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-14 w-screen bg-darkGrey lg:h-12 ">
      <nav className="lg:flex lg:justify-between">
        <section className="ml-1 hidden	items-center  justify-center gap-5 text-sm lg:flex">
          <img src={logo} className="ml-6 h-7 lg:h-9" />
          <p className="cursor-pointer rounded-md px-2.5 py-2 font-light text-grey opacity-90 hover:bg-navGrey hover:text-white">
            Events
          </p>
          <p className="cursor-pointer rounded-md px-2.5 py-2 font-light text-grey opacity-90 hover:bg-navGrey hover:text-white">
            Map
          </p>
          <div className="group flex cursor-pointer items-center justify-center rounded-md px-2.5 py-2 font-light text-grey opacity-90 hover:bg-navGrey hover:text-white">
            Create <img src={arrow} className="ml-2 h-5" />
            <div className="absolute top-12 hidden rounded-md bg-darkGrey p-3 group-hover:block">
              <p className="rounded-md px-3 py-2.5 text-sm hover:bg-navGrey hover:text-white">
                Build Experiences
              </p>
              <p className="rounded-md px-3 py-2.5 text-sm hover:bg-navGrey hover:text-white">
                Create Assets
              </p>
              <p className="rounded-md px-3 py-2.5 text-sm hover:bg-navGrey hover:text-white">
                Game Jams
              </p>
              <p className="rounded-md px-3 py-2.5 text-sm hover:bg-navGrey hover:text-white">
                Documentations
              </p>
            </div>
          </div>
          <div className="group flex cursor-pointer items-center justify-center rounded-md px-2.5 py-2 font-light text-grey opacity-90 hover:bg-navGrey hover:text-white">
            Partnerships <img src={arrow} className="ml-2 h-5" />
            <div className="absolute top-12 hidden rounded-md  bg-darkGrey p-3 group-hover:block">
              <p className="rounded-md px-3 py-2.5 text-sm hover:bg-navGrey hover:text-white">
                Find an Agency
              </p>
              <p className="rounded-md px-3 py-2.5 text-sm hover:bg-navGrey hover:text-white">
                Success Stories
              </p>
              <p className="rounded-md px-3 py-2.5 text-sm hover:bg-navGrey hover:text-white">
                Become a Partner
              </p>
              <p className="rounded-md px-3 py-2.5 text-sm hover:bg-navGrey hover:text-white">
                Articles
              </p>
            </div>
          </div>
          <div className="group flex cursor-pointer items-center justify-center rounded-md px-2.5 py-2 font-light text-grey opacity-90 hover:bg-navGrey hover:text-white">
            More <img src={arrow} className="ml-2 h-5" />
            <div className="absolute top-12 hidden rounded-md bg-darkGrey p-3 group-hover:block">
              <p className="rounded-md px-3 py-2.5 text-sm hover:bg-navGrey hover:text-white">
                About the Sandbox
              </p>
              <p className="rounded-md px-3 py-2.5 text-sm hover:bg-navGrey hover:text-white">
                What is LAND
              </p>
              <p className="rounded-md px-3 py-2.5 text-sm hover:bg-navGrey hover:text-white">
                SAND Token
              </p>
              <p className="rounded-md px-3 py-2.5 text-sm hover:bg-navGrey hover:text-white">
                CATALYST Tokens
              </p>
            </div>
          </div>
        </section>
        <section className="flex items-center  ">
          <div className="flex w-full items-center justify-between py-2 pl-2 lg:px-0 lg:py-1">
            <div className="flex items-center ">
              <button className="flex h-10 w-10 flex-col items-center justify-center gap-1 bg-transparent lg:hidden">
                <span className="h-0.5 w-6 rounded-sm bg-white "></span>
                <span className="h-0.5 w-6 rounded-sm bg-white "></span>
                <span className="h-0.5 w-6 rounded-sm bg-white "></span>
              </button>
              <img src={logo} className="ml-6 h-7 lg:hidden" />
            </div>
            <div className="mx-4 hidden gap-5 sm:flex sm:items-center  ">
              <div className="relative">
                <img
                  src={language}
                  className=" hidden h-10 cursor-pointer hover:bg-navGrey md:flex"
                />
              </div>

              <a className="  cursor-pointer text-sm text-white hover:underline">
                Login
              </a>
              <button className=" w-full cursor-pointer	 rounded-3xl border-2 border-white bg-transparent px-2 py-2  text-center text-sm font-medium text-white hover:border-blueybtn  hover:bg-blueybtn ">
                Create account
              </button>
            </div>
          </div>
          <div className="flex sm:hidden">
            <img src={login} className=" h-12 pl-8 pr-4 " />
          </div>
        </section>
      </nav>
    </div>
  )
}

export default Navbar
