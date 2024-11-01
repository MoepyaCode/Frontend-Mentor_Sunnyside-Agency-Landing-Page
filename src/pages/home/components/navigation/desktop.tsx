export default function Desktop() {

  const renderNavLink = (text: string, key: number) => (
    <li key={key} className="font-barlow font-semibold text-[18px] text-white leading-[25px] -tracking-[0.13px] cursor-pointer">
      {text}
    </li>
  )

  const renderMobileMenu = () => {
    const navLinks = ['About', 'Services', 'Projects']
    return (
      <ul className="flex justify-between items-center gap-[47px]">
        {navLinks.map(renderNavLink)}

        <button className="font-fraunces font-bold text-[15px] leading-[25px] -tracking-[.11px] text-center text-[#24303E] bg-white w-[140px] h-[56px] rounded-full uppercase hover:bg-[rgba(255,255,255,.2637)] hover:text-white transition-colors duration-300 ease-in-out" type="button">
          contact
        </button>
      </ul>
    )
  }

  return (
    <nav className="flex justify-between items-center">
      <img className="object-cover w-[170px]" src='/assets/logo.svg' alt="Logo" />
      
      {renderMobileMenu()}
    </nav>
  )
}