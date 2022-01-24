import Layout from '@/components/layout'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import PressCarousel from '@/components/press-carousel'
import Job from '@/components/job'
import JobCarousel from '@/components/job-carousel'

import heroBg from '@/images/about-hero-bg.svg'

export default function AboutPage(props) {
  const { data, location } = props
  const heroData = data.contentfulAboutHero
  const teamData = data.contentfulAboutTeam
  const pressData = data.contentfulAboutPress
  const jobsData = data.contentfulAboutJobs

  return (
    <Layout currentPath={location.pathname}>
      <Helmet>
        <title>About — Tiv</title>
      </Helmet>

      <main>
        <section className="flex justify-center items-center pt-48 pb-24 md:py-12 md:-mb-36 lg:-mb-32">
          <div
            className="absolute top-0 inset-x-0 translate-y-[-30%] md:translate-y-[-22%] flex justify-center w-full overflow-hidden"
            aria-hidden="true"
          >
            <img
              src={heroBg}
              alt=""
              className="max-w-none scale-[60%] md:scale-100"
            />
          </div>

          <div className="z-10 container w-full flex flex-col items-center justify-center space-y-7 md:min-h-[675px]">
            <h1 className="max-w-xl font-black text-heading1 uppercase text-center leading-none cms-strong-orange">
              <MDXRenderer>{heroData.title.childMdx.body}</MDXRenderer>
            </h1>
            <p className="max-w-4xl font-medium text-lg text-white/50 text-center prose">
              <MDXRenderer>{heroData.description.childMdx.body}</MDXRenderer>
            </p>
          </div>
        </section>

        <section className="relative z-10 container pt-2 pb-16">
          <header className="mb-16 text-center">
            <h2>
              <span className="block mb-2 text-heading5">
                {teamData.eyebrow}
              </span>
              <span className="text-heading2 uppercase font-bold">
                {teamData.title}
              </span>
            </h2>
          </header>

          <ul className="flex flex-wrap justify-center space-y-12 md:space-y-14 lg:space-y-16 !space-y-reverse">
            {teamData.teamMembers.map((teamMember) => {
              const ImageWrapperTag = teamMember.linkTo ? 'a' : 'div'
              const imageWrapperProps = teamMember.linkTo
                ? {
                    href: teamMember.linkTo,
                    target: '_blank',
                    rel: 'noreferrer',
                  }
                : {}

              return (
                <li
                  key={teamMember.id}
                  className="max-w-[140px] sm:max-w-[170px] lg:max-w-[200px] mx-[3%] md:mx-6 xl:mx-16"
                >
                  <figure>
                    <div className="p-1 corners">
                      <ImageWrapperTag
                        {...imageWrapperProps}
                        className="block p-[9%] border-2 border-gray border-opacity-20 rounded-full"
                      >
                        <GatsbyImage
                          image={teamMember.image.gatsbyImageData}
                          alt={teamMember.image.description}
                          imgClassName="rounded-full"
                        />
                      </ImageWrapperTag>
                    </div>
                    <figcaption className="mt-9 text-center">
                      <h3 className="mb-2 text-xs">{teamMember.name}</h3>
                      <p className="uppercase leading-tight text-white/50">
                        {teamMember.companyName}
                      </p>
                      <p className="mt-3 lg:mt-4 text-sm lg:text-base text-white/50">
                        {teamMember.description.description}
                      </p>
                    </figcaption>
                  </figure>
                </li>
              )
            })}
          </ul>
        </section>

        <section className="lg:container flex flex-col sm:flex-row justify-between items-center sm:items-start lg:max-w-5xl xl:max-w-[1330px] mx-auto pt-12 pb-16 overflow-hidden">
          <header className="sm:min-w-[240px] max-w-[250px] md:max-w-xs sm:mt-32 ml-8 lg:ml-0 mb-12 sm:mb-0 pr-8 lg:pr-0 text-center sm:text-left">
            <h2>
              <span className="block mb-2 text-heading5">
                {pressData.eyebrow}
              </span>
              <span className="text-heading2 leading-[1.2em] font-bold uppercase cms-strong-orange">
                <MDXRenderer>{pressData.title.childMdx.body}</MDXRenderer>
              </span>
            </h2>
          </header>

          <PressCarousel articles={pressData.articles} />
        </section>

        <section className="md:container md:max-w-5xl pt-4 pb-20 lg:pb-36">
          <h2 className="max-w-xs md:max-w-none mx-auto md:max-0 mb-8 lg:mb-16 px-5 md:px-0 text-heading2 text-center font-bold uppercase cms-strong-orange">
            <MDXRenderer>{jobsData.title.childMdx.body}</MDXRenderer>
          </h2>

          <ul className="hidden md:grid grid-cols-3 gap-x-4 lg:gap-x-5 gap-y-4">
            {jobsData.jobs.map((job) => (
              <li key={job.id}>
                <Job job={job} className="h-full" />
              </li>
            ))}
          </ul>

          <JobCarousel jobs={jobsData.jobs} className="md:hidden" />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query AboutPageQuery {
    contentfulAboutHero {
      description {
        childMdx {
          body
        }
      }
      title {
        childMdx {
          body
        }
      }
    }
    contentfulAboutTeam {
      id
      title
      eyebrow
      teamMembers {
        image {
          description
          gatsbyImageData(height: 155, width: 155, quality: 100)
        }
        name
        companyName
        description {
          description
        }
        linkTo
      }
    }
    contentfulAboutPress {
      eyebrow
      title {
        childMdx {
          body
        }
      }
      articles {
        id
        image {
          gatsbyImageData(width: 240, height: 158, quality: 100)
          description
        }
        title
        url
        description {
          childMdx {
            body
          }
        }
      }
    }
    contentfulAboutJobs {
      title {
        childMdx {
          body
        }
      }
      jobs {
        id
        title
        subtitle
        description {
          childMdx {
            body
          }
        }
        applyUrl
      }
    }
  }
`
