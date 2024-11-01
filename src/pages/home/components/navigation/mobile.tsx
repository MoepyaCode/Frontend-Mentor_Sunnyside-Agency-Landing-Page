import { useState } from "react";

const AltText = {
  Logo: 'Company Logo',
  Hamburger: 'Hamburger Button'
}

export default function Mobile() {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => setIsOpen(prev => !prev)

  const renderNavLink = (text: string, key: number) => (
    <li key={key} className="font-barlow font-semibold text-[20px] text-[#808397] leading-[25px] -tracking-[0.14px]">
      {text}
    </li>
  )

  const renderMobileMenu = () => {
    const navLinks = ['About', 'Services', 'Projects']
    return (
      <ul className="absolute right-0 top-[calc(100%+50px)] flex flex-col justify-evenly items-center min-w-[329px] min-h-[305px] bg-white z-[1] after:absolute after:-top-[24px] after:right-0 after:border-[12px] after:border-b-white after:border-r-white after:border-l-transparent after:border-t-transparent">
        {navLinks.map(renderNavLink)}

        <button className="font-fraunces font-bold text-[15px] leading-[25px] -tracking-[.11px] text-center text-[#24303E] bg-[#FBD600] w-[140px] h-[56px] rounded-full uppercase" type="button">
          contact
        </button>
      </ul>
    )
  }

  return (
    <nav className="relative flex justify-between items-center">
      <img src='/assets/logo.svg' alt={AltText.Logo} />

      <button className={`${!isOpen ? 'opacity-100': 'opacity-75'} transition-opacity duration-300 ease-in-out`} onClick={handleButtonClick}>
        <img src='/assets/icons/icon-hamburger.svg' alt={AltText.Hamburger} />
      </button>

      {isOpen && renderMobileMenu()}
    </nav>
  )
}
