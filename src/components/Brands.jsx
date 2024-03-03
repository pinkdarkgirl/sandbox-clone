// react import
import { useRef, useState } from 'react'

// library imports
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useInView } from 'react-intersection-observer'
import { useMediaQuery } from 'react-responsive'

// data import
import { BRANDS } from '../BrandData'

const brands = [
  BRANDS.snoop,
  BRANDS.paris,
  BRANDS.aoki,
  BRANDS.twd,
  BRANDS.smurfs,
  BRANDS.ubisoft,
  BRANDS.playboy,
  BRANDS.avenged,
  BRANDS.bears,
  BRANDS.atari,
  BRANDS.hells,
  BRANDS.mau,
  BRANDS.blondish,
  BRANDS.ledger,
  BRANDS.scmp,
]

const responsive = {
  largeScreen: {
    breakpoint: { max: 3000, min: 1480 },
    items: 4,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1480, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 864, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}

function BrandsSlider() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  })

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredVideoIndex, setHoveredVideoIndex] = useState(null)

  const videoRefs = useRef([])

  const handleChange = (currentSlide) => {
    setCurrentSlide(currentSlide + 1)
  }

  const { ref, inView } = useInView({
    threshold: 0.3,
  })

  const getVideoClassName = (index) => {
    if (!isDesktop) {
      return ''
    } else if (hoveredVideoIndex === index) {
      return 'animate-goTaller'
    } else {
      return ''
    }
  }

  const getLogoClassName = (index) => {
    if (!isDesktop) {
      return currentSlide === index ? 'animate-goDown' : ''
    } else if (hoveredVideoIndex === index) {
      return 'animate-goDown'
    } else {
      return ''
    }
  }

  return (
    <div ref={ref}>
      <Carousel
        responsive={responsive}
        itemClass="carousel-item"
        sliderClass={'lg:h-60 lg:flex lg:items-center'}
        infinite={false}
        autoPlay={inView && !isHovered}
        autoPlaySpeed={2000}
        afterChange={handleChange}
      >
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-center sm:block  "
          >
            {brand && brand.video && (
              <div
                className="relative  flex max-w-video-w items-center "
                onMouseEnter={() => {
                  if (videoRefs.current && videoRefs.current[index]) {
                    console.log(`Mouse entered ${index} element`)
                    setHoveredVideoIndex(index)
                    setIsHovered(true)
                    if (isDesktop) {
                      console.log(`Playing video ${index}`)
                      videoRefs.current[index].play()
                    }
                  }
                }}
                onMouseLeave={() => {
                  if (videoRefs.current && videoRefs.current[index]) {
                    console.log(`Mouse left ${index} element`)
                    setHoveredVideoIndex(null)
                    setIsHovered(false)
                    if (isDesktop) {
                      console.log('Pausing video')
                      videoRefs.current[index].pause()
                    }
                  }
                }}
              >
                <video
                  src={brand.video}
                  muted={true}
                  loop
                  ref={(el) => {
                    if (el) {
                      videoRefs.current[index] = el
                    }
                  }}
                  autoPlay={!isDesktop}
                  className={`relative h-48 w-full cursor-grab rounded-md object-cover sm:mx-4 sm:h-60 md:mx-20 md:h-80 lg:mx-2.5 lg:h-40 ${getVideoClassName(index)}`}
                ></video>
                <img
                  src={brand.logo}
                  className={`brand-logos -translate-x-1/2 -translate-y-1/3 ${getLogoClassName(index)}`}
                />
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

function Brands() {
  return (
    <div className="mb-32 flex flex-col lg:px-20	">
      <div>
        <h2 className="mb-16 px-6 pt-32 text-center text-xxl font-semibold leading-9  text-white md:pt-20">
          Join the brands you love in the metaverse
        </h2>
      </div>
      <BrandsSlider />
    </div>
  )
}

export default Brands
