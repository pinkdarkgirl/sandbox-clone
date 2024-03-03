// library imports
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// icon import
import star from '../assets/rating.svg'
import visits from '../assets/visits.svg'
import mode from '../assets/mode.svg'
import quests from '../assets/quests.svg'
import arrow from '../assets/arrow-button.avif'

// data import
import { GAMES } from '../GameData'

const games = [
  GAMES.bomkusJam,
  GAMES.subvox,
  GAMES.bang,
  GAMES.scb,
  GAMES.trend,
  GAMES.shadows,
  GAMES.aave,
  GAMES.cuddle,
  GAMES.bomkus,
  GAMES.dogami,
  GAMES.rainbow,
  GAMES.floor,
  GAMES.help,
  GAMES.car,
  GAMES.olcHK,
  GAMES.olcMeta,
  GAMES.olcVox,
  GAMES.olcGalleria,
  GAMES.hue,
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet2: {
    breakpoint: { max: 1024, min: 900 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 70,
  },
  tablet1: {
    breakpoint: { max: 900, min: 670 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 670, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 40,
  },
}

function Slider() {
  return (
    <Carousel
      responsive={responsive}
      partialVisible={true}
      sliderClass={'flex items-center justify-start gap-5 sm:gap-0 '}
    >
      {games.map((game, index) => (
        <div
          key={index}
          className="relative h-72 min-w-72 cursor-pointer sm:w-72"
        >
          <div>
            <div>
              <div className="relative mb-4 w-auto overflow-hidden rounded-2xl">
                <img
                  src={game.img}
                  className="aspect-video transform object-cover transition-transform hover:scale-125 "
                />
              </div>
              {game.label !== '' && (
                <p className="absolute left-7 top-3  rounded-sm border border-yellow-400 bg-darkGrey px-2 py-1 text-center text-xs text-yellow-400 ">
                  {game.label}
                </p>
              )}
              {game.rating !== '' && (
                <div className="absolute right-8 top-3 z-20 flex items-center justify-center rounded-md bg-darkGrey p-1.5 opacity-85">
                  <img src={star} className="align-middle" />
                  <p className="pl-1 text-xs font-medium text-white">
                    {game.rating}
                  </p>
                </div>
              )}
            </div>
            <div className="relative flex flex-col items-start justify-start">
              <p className="oveflow-hidden mb-2	 font-semibold text-white">
                {game.name}
              </p>
              <div className="mb-2 flex items-center justify-start gap-3">
                {game.quests !== '' && (
                  <div className="flex items-center justify-center gap-1 text-sm text-grey">
                    <img src={quests} />
                    <span>{game.quests}</span>
                  </div>
                )}
                {game.visits !== '' && (
                  <div className="flex items-center justify-center gap-1 text-sm text-grey">
                    <img src={visits} />
                    <span>{game.visits}</span>
                  </div>
                )}
                {game.mode !== '' && (
                  <div className="flex items-center justify-center gap-1 text-sm text-grey">
                    <img src={mode} />
                    <span>{game.mode}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="text-sm font-semibold text-bluey">
            <span className="font-normal text-grey">by </span>
            {game.user}
          </div>
        </div>
      ))}
    </Carousel>
  )
}

function Experiences() {
  return (
    <div className="background-gradient ">
      <div className="z-10 mx-6 pb-32 pt-12  md:px-12 md:py-2 md:pb-24 xl:px-20">
        <div className=" my-8 flex items-end justify-between ">
          <h1 className="text-xxl font-bold text-white">
            See what others are playing right now
          </h1>
        </div>
        <Slider />
        <div className="flex justify-end">
          <a className="relative mr-8 inline-flex cursor-pointer items-center pt-2 opacity-80 hover:opacity-100">
            <p className="text-sm font-semibold text-white ">Discover more</p>
            <img src={arrow} className="ml-2 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Experiences
