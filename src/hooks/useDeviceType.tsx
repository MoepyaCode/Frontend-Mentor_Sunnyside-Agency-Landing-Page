import { useEffect, useState } from "react";

export function useDeviceType(): DeviceTypeHook {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    const [deviceType, setDeviceType] = useState<DeviceTypes>(null)

    useEffect(() => {
        const handleResize = () => setInnerWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [innerWidth])

    useEffect(() => {
        if (innerWidth >= 768 && innerWidth < 1280) {
            setDeviceType('tablet')
        } else if (innerWidth < 768) {
            setDeviceType('mobile')
        } else {
            setDeviceType('desktop')
        }
    }, [innerWidth, deviceType])

    return { deviceType }
}