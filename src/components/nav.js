import classNames from 'classnames'
import { Link } from 'gatsby'

export default function Nav(props) {
  const { links, className } = props

  return (
    <nav className={classNames('flex', className)}>
      {links.map((link) =>
        link.url.startsWith('http') ? (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="py-2 hover:text-white/80"
          >
            {link.label}
          </a>
        ) : (
          <Link
            key={link.url}
            to={link.url}
            className="py-2 hover:text-white/80"
          >
            {link.label}
          </Link>
        )
      )}
    </nav>
  )
}
