import { useDeviceType } from "@app-hooks"
import { Container, Wrapper } from "@app-layouts"

export default function Service(props: ServicesDataI) {
  const { deviceType } = useDeviceType()
  const { services } = props

  const renderService = (service: ServiceI, key: number) => {
    const imageSrc = deviceType == 'desktop' || deviceType == 'tablet' ? `${service.device.desktop}` : `${service.device.mobile}`
    return (
      <Wrapper className="relative flex flex-col justify-end items-center" key={key}>
        <img className="object-cover object-top min-w-full max-h-[600px]" src={imageSrc} alt="" />

        <Wrapper className="absolute text-center px-6 mb-[59px] 2xl:mb-10 flex flex-col gap-[27px]">
          <h2 className={`font-fraunces font-black text-[28px]  ${service.title == '' ? 'text-[#24554A]' : 'text-[#052C3B]'} -tracking-[0.2px] `}>{service.title}</h2>

          <p className={`font-fraunces font-semibold lg:max-w-[339px] lg:mx-auto  ${service.title == '' ? 'text-[#24554A]' : 'text-[#19536C]'} leading-[27px] -tracking-[0.11px] `}>{service.text}</p>
        </Wrapper>
      </Wrapper>
    )
  }

  return (
    <Container className="flex flex-col sm:grid sm:grid-cols-2">
      {services.map(renderService)}
    </Container>
  )
}