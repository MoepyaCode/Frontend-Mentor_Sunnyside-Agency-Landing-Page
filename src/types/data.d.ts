
declare type CategoryI = 'Information' | 'Services' | 'Clients' | 'Showcase' | 'Footer'

declare interface ContentI {
    title: string
    category: Category
}

interface DeviceImageI {
    mobile?: string
    desktop?: string
}

declare interface InformationI extends ContentI {
    text: string
    device: DeviceImageI
}

declare interface ServiceI extends ContentI {
    text: string
    device: DeviceImageI
}
declare interface ServicesDataI {
    category: string,
    services: ServiceI[]
}

declare interface ClientI {
    name: string
    position: string
    testimonial: string
    image: string
}

declare interface ClientsTestimonialDataI extends ContentI {
    clients: ClientI[]
}

declare interface ShowCaseI extends Omit<ContentI, 'title'> {
    images: DeviceImageI[]
}

type LinkType = {
    title: string;
    link: string;
};

type NavigationType = LinkType;
type SocialsType = LinkType;

declare interface FooterI extends Omit<ContentI, 'title'> {
    logo: string
    navigation: NavigationType[]
    socials: SocialsType[]
}

declare type DataTypes = InformationI | ServicesDataI | ClientsTestimonialDataI | ShowCaseI
declare type DataI = DataTypes[]