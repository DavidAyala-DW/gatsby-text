import { GatsbyImage } from 'gatsby-plugin-image'

export default function ContentfulImage(props) {
  const { image, className, ...rest } = props

  return image.gatsbyImageData ? (
    <GatsbyImage
      image={image.gatsbyImageData}
      alt={image.description}
      className={className}
      {...rest}
    />
  ) : (
    <img
      src={image.file.url}
      alt={image.description}
      className={className}
      {...rest}
    />
  )
}
