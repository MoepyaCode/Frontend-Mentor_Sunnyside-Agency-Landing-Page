
type Category = 'Information' | 'Service' | 'Clients'

declare interface ContentI {
    title: string
    category: Category
}

declare interface InformationI extends ContentI {
    text: string
    device: DeviceTypes
    color: string
}

declare interface ServiceI extends ContentI {
    text: string
    device: DeviceTypes
}

declare interface ClientsI extends ContentI {
    src: string
    alt: string
}

declare type DataTypes = InformationI | ServiceI | ClientsI
declare type DataI = DataTypes[]