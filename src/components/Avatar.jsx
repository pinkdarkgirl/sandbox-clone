import video from '../assets/Avatar-Section.webm'

function Avatar() {
  return (
    <div className="background-avatar ">
      <div className=" absolute -top-8 h-16 w-full">
        <div className="h-8  bg-gradient-to-tl from-gradientPurp via-gradientPurpA to-transparent"></div>
        <div className="h-0.5 w-full bg-gradient-to-r from-blueyDark via-blueyLight to-blueyDark shadow-md "></div>
        <div className="h-8 rotate-180 transform bg-radial-gradient-break"></div>
      </div>

      <div className=" flex flex-col  items-center justify-center pb-16 md:flex-row">
        <div className=" md:w-1/2">
          <video
            autoPlay
            loop
            muted
            src={video}
            className=" mx-auto my-0  max-w-md  px-6"
          ></video>
        </div>
        <div className="-order-1 flex flex-col items-stretch justify-center px-6 pt-16 md:w-1/2 md:pl-20 md:pr-1 ">
          <p className="mb-3 text-sm font-medium text-bluey md:mb-1">
            Play together
          </p>
          <h3 className="mb-4 text-xxl font-semibold leading-9 text-white md:max-w-72	 ">
            Connect in extraordinary ways
          </h3>
          <p className="mb-5 font-light text-white md:mb-1 md:mr-6 md:leading-6">
            Discover new experiences and make friends along the way. Go on epic
            quests, attend concerts, visit art galleries, and more. Express
            yourself through avatars and mingle across the metaverse in style!
          </p>
          <div className="mt-4 flex flex-col justify-center gap-6 lg:flex-row lg:items-center lg:justify-start">
            <a className="w-full rounded-3xl bg-bluey px-6 py-2 text-center font-semibold text-white	 hover:bg-blueyLight md:w-3/5	 md:px-4 ">
              Customize your avatar
            </a>
            <a className="font-semibold text-white">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avatar
