import { useDeviceType } from "@app-hooks"
import { Desktop, Mobile } from "./navigation"
import { Assets } from "@app-assets"

export default function Header() {
    const { deviceType } = useDeviceType()

    const renderNavigation = () => (deviceType === 'mobile' || deviceType === 'tablet') ? <Mobile /> : <Desktop />

    const renderHeading = () => (
        <h1 className="font-fraunces font-black uppercase self-center text-[40px] xl:text-[56px] text-white tracking-[6.25px] xl:tracking-[8.75px] text-center">We are creatives</h1>
    )

    return (
        <header className="relative bg-mobile-header bg-cover bg-bottom bg-no-repeat min-h-[538px] pt-8 px-6 flex flex-col gap-[88px] lg:gap-36 md:bg-desktop-header md:bg-fit md:min-h-screen">
            {renderNavigation()}

            <div className="flex flex-col gap-[55px] lg:gap-28">
                {renderHeading()}
                <img className="object-contain max-w-[30px] lg:max-w-[auto] lg:min-h-[107.48px] self-center animate-bounce" src={Assets.Icons.iconArrowDown} alt={'Icon Arrow Down'} />
            </div>
        </header>
    )
}
