import classNames from 'classnames'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function Article(props) {
  const { article, className } = props

  return (
    <article
      className={classNames(
        'p-5 sm:p-4 lg:p-5 flex flex-col border border-gray border-opacity-20',
        className
      )}
    >
      <GatsbyImage
        image={article.image.gatsbyImageData}
        alt={article.image.description}
        className="mb-2 lg:mb-3 rounded-lg"
      />
      <div className="flex-grow flex flex-col p-3">
        <h3 className="mb-2 lg:mb-3 text-heading4 text-lg leading-tight">
          {article.title}
        </h3>
        <p className="mb-8 text-white/50 sm:text-sm lg:text-base">
          <MDXRenderer>{article.description.childMdx.body}</MDXRenderer>
        </p>
        {article.url && (
          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-auto text-orange sm:text-sm lg:text-base underline"
          >
            Read More
          </a>
        )}
      </div>
    </article>
  )
}
