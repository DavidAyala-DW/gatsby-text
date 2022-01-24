import Nav from '@/components/nav'
import Instagram from '@/components/svg/instagram.svg'
import Twitter from '@/components/svg/twitter.svg'
import Facebook from '@/components/svg/facebook.svg'
import Discord from '@/components/svg/discord.svg'

const supportedIcons = {
  instagram: Instagram,
  twitter: Twitter,
  facebook: Facebook,
  discord: Discord
}

export default function SocialNav (props) {
  const { links, ...rest } = props

  const linksWithIcons = links.map((link) => {
    const matchingIconKey = Object.keys(supportedIcons).filter((key) =>
      link.url.includes(key)
    )[0]
    const Icon = supportedIcons[matchingIconKey]

    return matchingIconKey
      ? {
          ...link,
          label: <Icon className="w-auto h-[22px]" aria-label={link.label} />
        }
      : link
  })

  return <Nav links={linksWithIcons} {...rest} />
}
