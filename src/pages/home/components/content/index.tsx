import Clients from "./clients"
import Information from "./information"
import Service from "./service"

type Props = {
    data: DataI,
}

export default function MainContent(props: Props) {
    const { data } = props

    const renderContentData = (data: DataTypes, key: number) => {
        switch (data.category) {
            case 'Information':
                return <Information key={key} {...data as InformationI} />
            case 'Service':
                return <Service key={key} {...data as ServiceI} />
            case 'Clients':
                return 'Clients Data'
            default:
                return <Clients key={key} {...data as ClientsI} />
        }
    }

    return (
        data.map(renderContentData)
    )
}