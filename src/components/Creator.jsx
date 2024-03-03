import mobile from '../assets/gm-art-img/mobile.webp'
import bg from '../assets/gm-art-img/bg.avif'
import dragon from '../assets/gm-art-img/dragon.avif'
import front from '../assets/gm-art-img/front.avif'
import lighting from '../assets/gm-art-img/lighting.avif'
import screen from '../assets/gm-art-img/screen.avif'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

function CreatorTextContent() {
  return (
    <div className="flex w-full flex-row-reverse items-stretch justify-start md:mt-24 md:px-20">
      <div className=" px-6 md:w-1/2 md:px-1">
        <p className="mb-3 text-sm font-medium text-bluey">Create anything</p>
        <h3 className="mb-4 text-xxl font-semibold leading-9 text-white  ">
          Build the worlds of your dreams
        </h3>
        <p className="mb-5 font-light text-white">
          Whether you want to build unique experiences or design voxel-based
          NFTs, our creative tools can help bring your imagination to life in
          the metaverse. Own everything you create and sell your best work in
          the marketplace!
        </p>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-start">
          <a className="w-full cursor-pointer rounded-3xl border-2  border-stone-300 bg-transparent px-6  py-2 text-center font-semibold text-white hover:border-blueybtn	 hover:bg-blueybtn md:max-w-52">
            Build experiences
          </a>
          <a className="w-full cursor-pointer rounded-3xl border-2 border-stone-300 bg-transparent px-6  py-2 text-center font-semibold text-white hover:border-blueybtn	 hover:bg-blueybtn md:max-w-52	">
            Create assets
          </a>
        </div>
      </div>
    </div>
  )
}

function Creator() {
  const screenRef = useRef()
  const dragonRef = useRef()
  const lightingRef = useRef()
  const bgRef = useRef()

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.to(bgRef.current, {
      y: -112,
      duration: 1,
      scrollTrigger: {
        trigger: bgRef.current,
        scrub: 1,
        end: 'bottom 100%',
      },
    })
    gsap.to(screenRef.current, {
      y: -64,
      duration: 0.5,
      scrollTrigger: {
        trigger: screenRef.current,
        scrub: 1,
        end: 'bottom 100%',
      },
    })
    gsap.to([dragonRef.current, lightingRef.current], {
      y: -64,
      duration: 3,
      scrollTrigger: {
        trigger: dragonRef.current,
        scrub: 1,
        end: 'bottom 100%',
      },
    })
  })

  return (
    <div className="relative  md:h-md ">
      <div className="parallax-bg relative flex flex-col justify-start md:h-md">
        <img
          src={bg}
          ref={bgRef}
          className="	 absolute -bottom-28 left-0 hidden w-screen md:block "
        />
        <img
          ref={screenRef}
          src={screen}
          className="absolute -bottom-16  left-4 hidden md:block"
        />
        <img
          src={dragon}
          ref={dragonRef}
          className=" absolute -bottom-8 left-2 hidden md:block "
        />
        <img
          src={lighting}
          ref={lightingRef}
          className="absolute -bottom-8 left-2 hidden md:block "
        />
        <img
          src={front}
          className="w-5xl absolute bottom-0  hidden md:block "
        />
        <CreatorTextContent />
        <img
          src={mobile}
          className="mt-16 h-96  object-cover object-left md:hidden"
        />
      </div>
      <div className=" absolute -bottom-8 z-30 h-16 w-full">
        <div className="h-8  bg-gradient-to-tl from-gradientPurp via-gradientPurpA to-transparent"></div>
        <div className="h-0.5 w-full bg-gradient-to-r from-blueyDark via-blueyLight to-blueyDark shadow-md "></div>
        <div className="h-8 rotate-180 transform bg-radial-gradient-break"></div>
      </div>
    </div>
  )
}

export default Creator
