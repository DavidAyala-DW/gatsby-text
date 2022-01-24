import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import Article from '@/components/article'

import ChevronLeft from '@/components/svg/chevron-left.svg'
import ChevronRight from '@/components/svg/chevron-right.svg'

export default function PressCarousel(props) {
  const { articles, className } = props
  const isXlUp = useMediaQuery({ query: '(min-width: 1280px)' })
  const isMdUp = useMediaQuery({ query: '(min-width: 768px)' })
  const slidesPerPage = isXlUp ? 3 : isMdUp ? 2 : 1

  return (
    <div className={classNames('w-full lg:w-[604px] xl:w-[906px]', className)}>
      <CarouselProvider
        naturalSlideWidth={282}
        naturalSlideHeight={500}
        totalSlides={articles.length}
        infinite
        isIntrinsicHeight
        visibleSlides={slidesPerPage}
        step={slidesPerPage}
      >
        <Slider classNameTrayWrap="w-[306px] md:w-[604px] lg:w-auto mx-auto sm:mx-0">
          {articles.map((article, index) => (
            <Slide key={article.id} index={index} className="">
              <Article
                article={article}
                className="h-full mx-3 sm:ml-5 sm:mr-0"
              />
            </Slide>
          ))}
        </Slider>

        {articles.length > slidesPerPage && (
          <div className="flex justify-center sm:justify-start lg:justify-end space-x-2 mt-9 sm:pl-5">
            <ButtonBack className="px-6 py-5 bg-gray-900 rounded">
              {/* <ChevronLeft /> */}
            </ButtonBack>
            <ButtonNext className="px-6 py-5 bg-gray-900 rounded">
              {/* <ChevronRight /> */}
            </ButtonNext>
          </div>
        )}
      </CarouselProvider>
    </div>
  )
}
