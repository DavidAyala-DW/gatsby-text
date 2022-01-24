import Layout from '@/components/layout'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Partner from '@/components/partner'

import invader from '@/images/invader.svg'
import shootInvader from '@/images/shoot-invader.svg'
import presentInHexes from '@/images/present-in-hexes.svg'

export default function PartnersPage(props) {
  const { data, location } = props
  const heroData = data.contentfulPartnersHero
  const partnersData = data.contentfulPartnersPartnerList
  const calloutData = data.contentfulPartnersCallout

  return (
    <Layout currentPath={location.pathname}>
      <Helmet>
        <title>Partners — Tiv</title>
      </Helmet>

      <main>
        <section className="container flex flex-col items-center pt-40 md:pt-48 lg:pt-56 pb-12 md:pb-20">
          <div className="flex md:translate-y-[-15px]" aria-hidden="true">
            <img
              src={invader}
              alt=""
              className="translate-x-[-75px] lg:translate-x-[-270px] translate-y-[-40px] lg:translate-y-[-15px]"
            />
            <img
              src={invader}
              alt=""
              className="translate-x-[100px] lg:translate-x-0 translate-y-[-70px] lg:translate-y-[-100px]"
            />
            <img
              src={invader}
              alt=""
              className="hidden lg:inline translate-x-[260px] translate-y-[60px] "
            />
          </div>

          <h1 className="mb-5 lg:mb-9 font-black text-heading1 uppercase text-center leading-none cms-strong-teal">
            <MDXRenderer>{heroData.title.childMdx.body}</MDXRenderer>
          </h1>
          <p className="max-w-xl text-base md:text-lg text-white/50 text-center prose">
            <MDXRenderer>{heroData.description.childMdx.body}</MDXRenderer>
          </p>

          <img src={shootInvader} alt="" className="mt-10" aria-hidden="true" />
        </section>

        <section className="container max-w-7xl pb-16 md:pb-36">
          <h2 className="sr-only">Partners</h2>
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-24 lg:gap-x-32 md:gap-y-32">
            {partnersData.partners.map((partner) => (
              <li key={partner.id} className="-mb-0.5 md:mb-0">
                <Partner partner={partner} className="h-full" />
              </li>
            ))}
          </ul>
        </section>

        <section className="container md:max-w-4xl lg:max-w-7xl pb-16 md:pb-20 lg:pb-40">
          <div className="relative z-0 flex flex-col items-center md:items-start py-12 md:pt-14 lg:pt-20 md:pb-16 lg:pb-24 px-6 md:px-16 border border-teal rounded-lg bg-[#161616] shadow-teal overflow-hidden text-center md:text-left">
            <h2 className="md:max-w-xl md:mb-5 text-[34px] md:text-[43px] lg:text-5xl uppercase font-bold cms-strong-teal">
              <MDXRenderer>{calloutData.title.childMdx.body}</MDXRenderer>
            </h2>
            <div className="order-2">
              <p className="md:max-w-xs lg:max-w-lg text-white/50">
                {calloutData.description.description}
              </p>
              <a
                href={calloutData.buttonUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex button button-teal button-lg mt-8 md:mt-9 mx-auto"
              >
                {calloutData.buttonLabel}
              </a>
            </div>
            <img
              src={presentInHexes}
              alt="Glowing gift box"
              className="md:absolute top-[42%] lg:top-1/4 right-[-60px] lg:right-[-20px] z-[-1] w-128 md:w-[460px] lg:w-[610px] max-w-none order-1 md:order-last -my-52 pointer-events-none"
            />
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query PartnersPageQuery {
    contentfulPartnersHero {
      title {
        childMdx {
          body
        }
      }
      description {
        childMdx {
          body
        }
      }
    }
    contentfulPartnersPartnerList {
      partners {
        image {
          gatsbyImageData(quality: 100)
          description
          file {
            url
          }
        }
        name
        id
      }
    }
    contentfulPartnersCallout {
      title {
        childMdx {
          body
        }
      }
      description {
        description
      }
      buttonLabel
      buttonUrl
    }
  }
`
