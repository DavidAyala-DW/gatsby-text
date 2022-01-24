import classNames from 'classnames'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function Job(props) {
  const { job, className } = props

  return (
    <article
      className={classNames(
        'relative h-full p-5 lg:p-7 flex flex-col space-y-5 space-y-reverse border border-gray border-opacity-20 rounded-2xl',
        className
      )}
    >
      <div
        className="corners corners-orange absolute -inset-px pointer-events-none"
        aria-hidden="true"
      />
      <h3 className="text-heading4">{job.title}</h3>
      <section>
        <h4 className="mb-1 text-xs">{job.subtitle}</h4>
        <p className="text-sm lg:text-base text-white/50">
          <MDXRenderer>{job.description.childMdx.body}</MDXRenderer>
        </p>
      </section>
      <div className="!mt-auto !mb-0 pt-3 lg:pt-8 flex justify-between items-center space-x-4">
        <a
          href={job.applyUrl}
          target="_blank"
          rel="noreferrer"
          className="button button-sm"
        >
          Apply
        </a>
      </div>
    </article>
  )
}
