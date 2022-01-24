import { useState, useEffect, useContext } from 'react'
import {
  Slide,
  Slider,
  DotGroup,
  ButtonBack,
  ButtonNext,
  CarouselContext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import ReactPlayer from 'react-player/lazy'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import ChevronLeft from '@/components/svg/chevron-left.svg'
import ChevronRight from '@/components/svg/chevron-right.svg'

import demoCarouselBg from '@/images/demo-carousel-bg.svg'
import phoneFrame from '@/images/phone-frame.png'

export default function DemoCarousel(props) {
  const { slidesData } = props
  const carouselContext = useContext(CarouselContext)
  const [currentSlide, setCurrentSlide] = useState(
    carouselContext.state.currentSlide
  )

  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide)
    }
    carouselContext.subscribe(onChange)
    return () => carouselContext.unsubscribe(onChange)
  }, [carouselContext])

  return (
    <figure className="flex flex-col md:flex-row md:justify-between items-center md:space-x-12 space-y-12">
      <div className="relative flex -my-20 md:my-0 scale-75 md:scale-90 lg:scale-100">
        <div
          className="grid absolute top-0 inset-x-0 -translate-y-48 pointer-events-none"
          aria-hidden="true"
        >
          <div className="both-span-full justify-self-center overflow-hidden">
            <img
              src={demoCarouselBg}
              className="max-w-none"
              alt=""
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 w-[288px]">
          <Slider
            className="w-[260px] both-span-full top-[13px] left-[15px]"
            classNameAnimation
          >
            {slidesData.map((slide, index) => (
              <Slide key={slide.id} index={index}>
                <ReactPlayer
                  width={258}
                  height={558}
                  url={slide.video.file.url}
                  playing={index === currentSlide}
                  loop
                  muted={true}
                  playsinline
                  className="rounded-xl overflow-hidden z-0 bg-[#181618]"
                />
              </Slide>
            ))}
          </Slider>

          <img
            src={phoneFrame}
            className="both-span-full z-10 pointer-events-none"
            loading="lazy"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>

      <figcaption className="z-10 flex md:block flex-col-reverse items-center max-w-xs md:max-w-sm mb-10 lg:mt-16">
        <Slider className="w-full" classNameAnimation>
          {slidesData.map((slide, index) => (
            <Slide
              key={slide.id}
              index={index}
              className="text-center md:text-left"
            >
              <h3 className="mb-7 text-heading3 font-bold leading-tight cms-strong-orange">
                <MDXRenderer>{slide.title.childMdx.body}</MDXRenderer>
              </h3>
              <p className="mb-10 text-white/50">
                {slide.description.description}
              </p>
            </Slide>
          ))}
        </Slider>

        <div className="flex items-center space-x-9 mb-5 md:mb-0 scale-75 md:scale-90 lg:scale-100 origin-top md:origin-top-left">
          <ButtonBack className="px-6 py-5 bg-gray-900 rounded">
            <ChevronLeft />
          </ButtonBack>
          <DotGroup className="hex-dot-group flex space-x-5" />
          <ButtonNext className="px-6 py-5 bg-gray-900 rounded">
            <ChevronRight />
          </ButtonNext>
        </div>
      </figcaption>
    </figure>
  )
}
