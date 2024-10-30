import { Assets } from "@app-assets";

const AltText = {
  Logo: 'Company Logo',
  Hamburger: 'Hamburger Button'
}

export default function Mobile() {
  const handleButtonClick = () => {
    console.log('Hamburger Button clicked')
  }
  
  return (
    <nav className="flex justify-between items-center">
      <img src={Assets.Logo} alt={AltText.Logo} />
    
      <button onClick={handleButtonClick}>
        <img src={Assets.Icons.iconHamburger} alt={AltText.Hamburger} />
      </button>
    </nav>
  )
}
