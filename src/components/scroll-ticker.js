import classNames from 'classnames'
import { useState, useEffect, useRef } from 'react'
import { useWindowScroll, useWindowSize } from 'react-use'
import _times from 'lodash/times'

export default function ScrollTicker(props) {
  const { children, className } = props
  const [offsetX, setOffsetX] = useState(0)
  const ref = useRef()
  const { height: windowHeight } = useWindowSize()
  const { y: windowScrollY } = useWindowScroll()

  useEffect(() => {
    const distaceFromTop = ref.current.getBoundingClientRect().top

    setOffsetX((distaceFromTop / windowHeight) * 100 - 100)
  }, [windowHeight, windowScrollY])

  return (
    <div
      ref={ref}
      className={classNames(
        'overflow-hidden bg-orange font-medium text-5xl md:text-6xl lg:text-[120px] text-stroke-white text-stroke-2 !text-orange uppercase leading-[1.2] whitespace-nowrap',
        className
      )}
    >
      <div
        className="h-[2.3em] lg:h-[1.3em] pb-[0.15em] pl-[1.2em] flex space-x-[1.2em] items-center will-change-transform motion-reduce:!transform-none"
        style={{ transform: `translate3d(${offsetX}%, 0, 0)` }}
      >
        <span>{children}</span>
        {_times(2, (index) => (
          <span key={index} aria-hidden="true">
            {children}
          </span>
        ))}
      </div>
    </div>
  )
}
