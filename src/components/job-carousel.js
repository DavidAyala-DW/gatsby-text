import classNames from 'classnames'
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import Job from '@/components/job'

import ChevronLeft from '@/components/svg/chevron-left.svg'
import ChevronRight from '@/components/svg/chevron-right.svg'

export default function JobCarousel(props) {
  const { jobs, className } = props

  return (
    <div className={classNames('', className)}>
      <CarouselProvider
        naturalSlideWidth={282}
        naturalSlideHeight={500}
        totalSlides={jobs.length}
        infinite
        isIntrinsicHeight
        visibleSlides={1}
        step={1}
      >
        <Slider classNameTrayWrap="w-[306px] mx-auto">
          {jobs.map((job, index) => (
            <Slide key={job.id} index={index} className="">
              <Job job={job} className="h-full mx-3 sm:ml-5 sm:mr-0" />
            </Slide>
          ))}
        </Slider>

        <div className="flex justify-center space-x-2 mt-9">
          <ButtonBack className="px-6 py-5 bg-gray-900 rounded">
            {/* <ChevronLeft /> */}
          </ButtonBack>
          <ButtonNext className="px-6 py-5 bg-gray-900 rounded">
            {/* <ChevronRight /> */}
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  )
}
