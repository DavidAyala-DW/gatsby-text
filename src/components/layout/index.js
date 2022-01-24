import { graphql, useStaticQuery } from 'gatsby'
import favicon from '../../images/favicon.ico'
import Helmet from 'react-helmet'
import Header from '@/components/header'
import Footer from '@/components/footer'

import './global.css'

const headerFooterQuery = graphql`
  query HeaderFooterQuery {
    contentfulMenu {
      primaryNav {
        links {
          label
          url
        }
      }
      secondaryNavs {
        id
        links {
          label
          url
        }
      }
      socialNav {
        links {
          label
          url
        }
      }
      joinDescription {
        joinDescription
      }
      joinButtonLabel
    }

    contentfulTicker {
      showTicker
      text
    }

    contentfulFooter {
      primaryNav {
        links {
          label
          url
        }
      }
      secondaryNav {
        links {
          label
          url
        }
      }
      socialNav {
        links {
          label
          url
        }
      }
      legalText
    }
  }
`

export default function Layout(props) {
  const { currentPath, children, classNameCardAnimation = {} } = props
  const data = useStaticQuery(headerFooterQuery)

  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header
        data={data.contentfulMenu}
        currentPath={currentPath}
        ticker={data.contentfulTicker}
      />
      <div className="min-h-screen">{children}</div>
      <Footer data={data.contentfulFooter} classNameCardAnimation={classNameCardAnimation}/>
    </>
  )
}
