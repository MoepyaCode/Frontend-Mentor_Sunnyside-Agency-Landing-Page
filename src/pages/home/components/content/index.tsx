import React, { Suspense } from 'react'

const Clients = React.lazy(() => import('./clients'))
const Information = React.lazy(() => import('./information'))
const Service = React.lazy(() => import('./service'))
const Showcase = React.lazy(() => import('./showcase'))

type Props = {
    data: DataI,
}

export default function MainContent({ data }: Props) {

    const renderContentData = (data: DataTypes, key: number) => {
        switch (data.category as CategoryI) {
            case 'Information':
                return (
                    <Suspense fallback={<div>Loading Information...</div>} key={key}>
                        <Information key={key} {...data as InformationI} />
                    </Suspense>
                )
            case 'Services':
                return (
                    <Suspense fallback={<div>Loading Services...</div>} key={key}>
                        <Service key={key} {...data as ServicesDataI} />
                    </Suspense>
                )
            case 'Clients':
                return (
                    <Suspense fallback={<div>Loading Clients...</div>} key={key}>
                        <Clients key={key} {...data as ClientsTestimonialDataI} />
                    </Suspense>
                )
            case 'Showcase':
                return (
                    <Suspense fallback={<div>Loading Showcase...</div>} key={key}>
                        <Showcase key={key} {...data as ShowCaseI} />
                    </Suspense>
                )
            default:
                return null
        }
    }

    return (
        <>
            {data.map(renderContentData)}
        </>
    )
}