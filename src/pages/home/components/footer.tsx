import { faFacebookSquare, faInstagram, faPinterest, faTwitter, IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer(props: FooterI) {
  const { navigation, socials } = props

  const renderNavigationLink = (link: NavigationType, key: number) => (
    <li className="max-w-max font-barlow font-semibold text-[18px] text-[#458D7E] hover:text-[#FFFFFF] leading-[25px] -tracking-[.13px] transition-colors duration-300 ease-in-out" key={key}>
      <a className="w-auto" href={link.link}>{link.title}</a>
    </li>
  )

  const renderSocialLink = (link: SocialsType, key: number) => {
    let icon: IconDefinition = faFacebookSquare
    type titleTypes = 'Facebook' | 'Instagram' | 'Twitter' | 'Pinterest'

    switch (link.title as titleTypes) {
      case 'Facebook':
        icon = faFacebookSquare
        break
      case 'Instagram':
        icon = faInstagram
        break
      case 'Twitter':
        icon = faTwitter
        break
      case 'Pinterest':
        icon = faPinterest
        break
      default:
        break
    }

    return (
      <a className="w-auto text-[#2C7566] hover:text-white transition-colors duration-300 ease-in-out" href={link.link} key={key}>
        <FontAwesomeIcon  icon={icon} size="2x" />
      </a>
    )
  }

  return (
    <footer className="grid place-items-center w-full px-[39px] pt-[64px] pb-[80px] bg-[#90D4C6]">
      <div className="w-full max-w-[297px] grid place-items-center">

        <img className="object-cover min-w-[170px]" src='/assets/logo-footer.svg' alt="" />

        <ul className="flex justify-between mt-[40px] w-full">
          {navigation.map(renderNavigationLink)}
        </ul>


        <div className="flex items-center gap-[28px] mt-[80px]">
          {socials.map(renderSocialLink)}
        </div>
      </div>
    </footer>
  )
}