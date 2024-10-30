import { useDeviceType } from "@app-hooks"
import { Desktop, Mobile } from "./navigation"
import { Assets } from "@app-assets"

export default function Header() {
    const { deviceType } = useDeviceType()

    const renderNavigation = () => {
        switch (deviceType) {
            case 'mobile':
            case 'tablet':
                return (
                    <Mobile />
                )
            case 'desktop':
                return <Desktop />
            default:
                return <Desktop />
        }
    }

    const renderHeading = () => (
        <h1 className="font-fraunces font-black uppercase self-center text-[40px] text-white tracking-[6.25px] text-center">We are creatives</h1>
    )

    return (
        <header className="relative bg-mobile-header bg-contain bg-bottom bg-no-repeat min-h-[538px] pt-8 px-6 flex flex-col gap-[88px] md:bg-desktop-header md:min-h-screen">
            {renderNavigation()}

            <div className="flex flex-col gap-[55px]">
                {renderHeading()}
                <img className="object-contain max-w-[30px] self-center animate-bounce" src={Assets.Icons.iconArrowDown} alt={'Icon Arrow Down'} />
            </div>
        </header>
    )
}
