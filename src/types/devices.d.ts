declare type DeviceTypes = 'desktop' | 'tablet' | 'mobile-tablet' | 'mobile' | null

declare interface DeviceTypeHook {
    deviceType: DeviceTypes
}