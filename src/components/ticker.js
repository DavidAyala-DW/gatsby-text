import _times from 'lodash/times'

export default function Ticker(props) {
  const { children } = props

  return (
    <div className="py-1 overflow-hidden bg-orange font-bold text-sm lg:text-[17px] lg:leading-normal whitespace-nowrap">
      <div className="flex space-x-24 animate-ticker animation-duration-20 sm:animation-duration-30 md:animation-duration-40 xl:animation-duration-50 2xl:animation-duration-50 motion-reduce:!animate-none">
        <span>{children}</span>
        {_times(10, (index) => (
          <span key={index} aria-hidden="true">
            {children}
          </span>
        ))}
      </div>
    </div>
  )
}
