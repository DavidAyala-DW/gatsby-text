import classNames from 'classnames'
import _trim from 'lodash/trim'
import { Link } from 'gatsby'
import { useState } from 'react'
import { Divide as Burger } from 'hamburger-react'
import { FocusOn } from 'react-focus-on'

import MenuHex from '@/components/svg/menu-hex.svg'
import Nav from '@/components/nav'
import SocialNav from '@/components/social-nav'
import WaitlistButton from '@/components/waitlist-button'
import Ticker from '@/components/ticker'
import tivLogo from '@/images/tiv-logo.svg'
import menuBg from '@/images/menu-bg.svg'

function arePathsEqual(path1, path2) {
  return _trim(path1, '/') === _trim(path2, '/')
}

export default function Header(props) {
  const { data, currentPath, ticker } = props
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const showTicker = ticker.showTicker && currentPath === '/'

  function toggleMenu() {
    setIsMenuOpen((val) => !val)
  }

  return (
    <FocusOn enabled={isMenuOpen} onEscapeKey={toggleMenu}>
      <div role="presentation">
        <header className="fixed top-0 z-50 inset-x-0 pointer-events-none">
          {showTicker && <Ticker>{ticker.text}</Ticker>}

          <div className="flex items-center justify-between py-6">
            <div className="container flex md:block justify-center">
              <Link to="/" className="inline-flex pointer-events-auto">
                <img
                  src={tivLogo}
                  alt="Tiv"
                  className="h-11 md:h-10 lg:h-auto"
                />
              </Link>
            </div>

            <button
              type="button"
              className={classNames(
                'absolute top-2 md:top-4 lg:top-6 right-3 md:right-[70px] z-50 flex items-center space-x-4 text-black hover:text-gray-900 pointer-events-auto scale-75 md:scale-100',
                showTicker && 'pt-7'
              )}
              onClick={toggleMenu}
            >
              <span
                className="text-[9px] font-bold uppercase text-white sr-only md:not-sr-only"
                aria-live="polite"
              >
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>
              <span
                className="grid items-center justify-center"
                aria-hidden="true"
              >
                {/* <MenuHex
                  className={classNames(
                    'both-span-full',
                    isMenuOpen && 'drop-shadow-xl'
                  )}
                /> */}
                <span className="both-span-full flex justify-center text-orange scale-75">
                  <Burger
                    color="currentColor"
                    distance="sm"
                    toggled={isMenuOpen}
                    tabIndex={-1}
                  />
                </span>
              </span>
            </button>
          </div>
        </header>

        <div
          className={classNames(
            'fixed inset-0 z-40 h-screen flex bg-gray-dark transition-opacity',
            !isMenuOpen && 'opacity-0 pointer-events-none'
          )}
          role="dialog"
          aria-hidden={isMenuOpen ? 'false' : 'true'}
        >
          <img
            src={menuBg}
            className="absolute top-0 right-0"
            alt=""
            aria-hidden="true"
          />
          <div
            className={classNames(
              'z-10 container flex flex-col',
              !isMenuOpen && 'invisible'
            )}
          >
            <div className="flex-grow flex flex-col lg:flex-row justify-center space-y-16 lg:space-y-0 lg:space-x-4">
              <nav className="lg:flex-grow lg:ml-[20%] flex flex-col justify-center items-center md:items-start space-y-6 md:space-y-0">
                {data.primaryNav.links.map((link, index) => (
                  <Link
                    key={link.url}
                    to={link.url}
                    className="relative flex items-center space-x-5"
                  >
                    <span
                      className="absolute md:static top-1.5 -left-1.5 md:text-stroke-white text-xs md:text-4xl font-light md:font-black"
                      aria-hidden="true"
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={classNames(
                        'px-3 pb-2 md:pb-4 text-5xl md:text-8xl font-black md:font-medium leading-none hover:text-stroke-orange',
                        arePathsEqual(link.url, currentPath) && 'corners'
                      )}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="lg:self-center hidden md:block lg:order-first">
                <p className="max-w-xs text-white/50">
                  {data.joinDescription.joinDescription}
                </p>
                <WaitlistButton
                  className="button button-outline button-lg min-w-[240px] mt-7"
                  onClick={toggleMenu}
                >
                  {data.joinButtonLabel}
                </WaitlistButton>
              </div>
            </div>

            <div className="self-center flex flex-wrap justify-between space-x-16 lg:space-x-32 text-white/40 pb-2">
              {data.secondaryNavs.map((nav) => (
                <Nav key={nav.id} links={nav.links} className="space-x-8" />
              ))}

              <SocialNav links={data.socialNav.links} className="space-x-8" />
            </div>
          </div>
        </div>
      </div>
    </FocusOn>
  )
}
