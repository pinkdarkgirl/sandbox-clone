// component import
import LandAnimation from './LandAnimation'

function Land() {
  return (
    <div className="relative">
      <div className=" absolute -top-4 z-40 h-16 w-full rotate-[4.5deg] transform sm:rotate-[2.2deg] lg:rotate-[1.4deg]">
        <div className="h-8  bg-gradient-to-tl from-gradientPurp via-gradientPurpA to-transparent"></div>
        <div className="h-0.5 w-full bg-gradient-to-r from-blueyDark via-blueyLight to-blueyDark shadow-md "></div>
        <div className="h-8 rotate-180 transform bg-radial-gradient-break"></div>
      </div>
      <div className="background-land">
        <section className="flex items-center ">
          <div className="flex flex-col items-center justify-center gap-6 md:h-md md:flex-row-reverse md:justify-center xl:justify-center ">
            <LandAnimation />
            <div className="mx-auto my-0 flex flex-col items-stretch  justify-center px-6 pb-16 md:w-1/2 md:pb-0 md:pl-16 lg:pl-6 xl:mx-3  ">
              <p className="text-sm text-blueyLight">Own virtual LAND</p>
              <h3 className="mt-1 text-xxl font-semibold leading-9 text-white">
                Become a metaverse pioneer
              </h3>
              <p className="whitespace-pre-line pt-5 font-light leading-6 text-white">
                Buy LAND and turn it into a space where culture and creativity
                can thrive. Showcase your creations, feature great games, host
                events, and more. Join the movement and lead the way in shaping
                the metaverse!
              </p>
              <p className="whitespace-pre-line pt-5	 font-light leading-6 text-white">
                Sawasdee, Thaiverse LAND Sale Raffle is now open.
              </p>
              <p className="whitespace-pre-line pt-0	 font-light leading-6 text-white">
                Register for chance to get 1 of 195 LANDs!
              </p>
              <div className="mt-4 flex flex-col justify-center gap-6 lg:flex-row lg:items-center lg:justify-start lg:gap-4 lg:pt-4">
                <a className=" whitespace-nowrap rounded-3xl	 bg-bluey px-6 py-2 text-center font-semibold text-white	hover:bg-blueyLight lg:px-12 ">
                  Enter Raffle
                </a>
                <a className="px-4 text-center  font-semibold text-white ">
                  Learn more about Sawasdee, ThaiVerse
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Land
