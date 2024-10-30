declare type DeviceTypes = 'desktop' | 'tablet' | 'mobile' | null

declare interface DeviceTypeHook {
    deviceType: DeviceTypes
}