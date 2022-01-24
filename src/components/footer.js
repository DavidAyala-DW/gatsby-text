import { Link } from 'gatsby'
import Nav from '@/components/nav'
import SocialNav from '@/components/social-nav'

import tivLogo from '@/images/tiv-logo.svg'

export default function Footer(props) {
  const { data, classNameCardAnimation } = props

  return (
    <footer className="relative bg-gray-dark text-white/50" style={classNameCardAnimation}>
      <section className="py-4 lg:py-16 mb-1 border-t border-gray-800/80">
        <div className="container flex flex-col lg:grid grid-cols-3 justify-between items-center space-y-4 space-y-reverse lg:space-y-0 lg:gap-x-10">
          <Link to="/" className="justify-self-center">
            <img
              src={tivLogo}
              width={119}
              height={57}
              alt="Tiv"
              className="h-12 lg:h-auto"
            />
          </Link>
          <Nav
            links={data.primaryNav.links}
            className="order-first space-x-5 text-lg"
          />
          <SocialNav
            links={data.socialNav.links}
            className="justify-self-end !mt-4 lg:!mt-0 space-x-5 text-lg"
          />
        </div>
      </section>

      <section className="pt-4 pb-7 md:py-2 border-t border-gray-800/80">
        <div className="container flex flex-col md:grid grid-cols-3 items-center space-y-4 md:space-y-0 md:gap-x-10">
          <Nav
            links={data.secondaryNav.links}
            className="md:col-start-3 lg:col-start-2 lg:justify-self-center md:order-last space-x-6 md:space-x-12 text-[15px]"
          />
          <p className="text-[13px]">{data.legalText}</p>
        </div>
      </section>
    </footer>
  )
}
