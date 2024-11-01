import { useDeviceType } from '@app-hooks'
import { Container } from '@app-layouts'

export default function Showcase(props: ShowCaseI) {
    const { images } = props
    const { deviceType } = useDeviceType()

    const renderImages = (image: DeviceImageI, key: number) => {
        const imageSrc = deviceType === 'desktop' ? image.desktop : image.mobile
        return (
            <img
                className='object-cover w-full h-full'
                key={key}
                src={`${imageSrc}`}
                alt="showcase"
            />
        )
    }

    return (
        <Container className='grid grid-cols-2 md:grid-cols-4'>
            {images.map(renderImages)}
        </Container>
    )
}
