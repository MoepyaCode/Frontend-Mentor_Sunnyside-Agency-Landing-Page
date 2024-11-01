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
        if (innerWidth >= 1024 && innerWidth < 1280) {
            setDeviceType('tablet')
        } else if (innerWidth >= 640 && innerWidth < 1024) {
            setDeviceType('mobile-tablet')
        } else if (innerWidth < 640) {
            setDeviceType('mobile')
        } else {
            setDeviceType('desktop')
        }
    }, [innerWidth, deviceType])

    return { deviceType }
}