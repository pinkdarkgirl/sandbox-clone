// img imports
import sandboxLogo from '../assets/sandbox-footer-logo.svg'
import animocaLogo from '../assets/small-animoca.avif'

// icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiscord,
  faTelegram,
  faMedium,
  faTwitter,
  faInstagram,
  faFacebook,
  faYoutube,
  faTwitch,
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className=" relative bg-primary lg:pb-5 ">
      <div className="mx-auto my-0 max-w-96 px-6 lg:flex lg:max-w-full lg:items-start lg:justify-evenly lg:gap-5 lg:px-5 lg:pt-8">
        <div className="py-7 lg:p-0 ">
          <h2 className="py-6 text-sm tracking-wide text-white sm:py-3 ">
            + INFO
          </h2>
          <ul className="grid grid-cols-2 gap-x-16 gap-y-4 	sm:grid-cols-3 sm:gap-x-8 sm:gap-y-3.5">
            <li className="text-xs text-grey transition hover:text-white">
              Documentation
            </li>
            <li className="text-xs text-grey transition hover:text-white">
              FAQ
            </li>
            <li className="text-xs text-grey transition hover:text-white">
              Whitepaper
            </li>
            <li className="text-xs text-grey transition hover:text-white">
              Terms Of Use
            </li>
            <li className="text-xs text-grey transition hover:text-white">
              Licenses
            </li>
            <li className="text-xs text-grey transition hover:text-white">
              Privacy Policy
            </li>
            <li className="text-xs text-grey transition hover:text-white">
              Careers
            </li>
            <li className="text-xs text-grey transition hover:text-white">
              Marketplace
            </li>
            <li className="text-xs text-grey transition hover:text-white">
              Service Status
            </li>
            <li className="text-xs text-grey transition hover:text-white">
              Help Center
            </li>
            <li className="text-xs text-grey transition hover:text-white">
              Press
            </li>
            <li className="text-xs text-grey transition hover:text-white">
              Changelog
            </li>
          </ul>
        </div>
        <div>
          <h2 className="py-6 text-sm tracking-wide text-white lg:py-3  ">
            FOLLOW US
          </h2>
          <div className="flex flex-wrap items-center justify-evenly gap-5 px-3">
            <FontAwesomeIcon
              icon={faDiscord}
              className="text-grey  transition hover:text-white"
            />
            <FontAwesomeIcon
              icon={faTelegram}
              className="text-grey transition hover:text-white"
            />
            <FontAwesomeIcon
              icon={faMedium}
              className="text-grey transition hover:text-white"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-grey  transition hover:text-white"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-grey transition hover:text-white"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-grey  transition hover:text-white"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-grey  transition hover:text-white"
            />
            <FontAwesomeIcon
              icon={faTwitch}
              className="text-grey  transition hover:text-white"
            />
          </div>
          <p className="mt-12 pt-4 text-center text-xxs text-white	">
            Copyright © 2012- 2024 The Sandbox. All Rights Reserved
          </p>
        </div>
        <div className="flex flex-row-reverse justify-between pt-9 lg:flex-col lg:items-center lg:gap-4">
          <a>
            <img src={sandboxLogo} />
          </a>
          <div className="flex justify-center ">
            <p className="text-xxs text-grey">
              Subsidiary of
              <span>
                <img src={animocaLogo} className="w-16" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
