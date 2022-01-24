import classNames from 'classnames'
import ContentfulImage from '@/components/contentful-image'

export default function Partner(props) {
  const { partner, className } = props

  return (
    <figure className={classNames('corners md:p-5 lg:p-6 md:py-6', className)}>
      {partner.image && (
        <div class="min-h-[110px] md:min-h-[90px] p-2 md:p-0 md:mb-2 flex justify-center items-center scale-75 md:scale-100">
          <ContentfulImage image={partner.image} class />
        </div>
      )}
      <figcaption className="sr-only">{partner.name}</figcaption>
    </figure>
  )
}
