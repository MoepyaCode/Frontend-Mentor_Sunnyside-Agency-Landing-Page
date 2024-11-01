import { useDeviceType } from "@app-hooks";
import { Container, Wrapper } from "@app-layouts";

type Props = InformationI & {
  className?: string
}

export default function Information(props: Props) {
  const { deviceType } = useDeviceType()
  const { title, text, device, className } = props
  
  const renderText = () => (
    <Wrapper className="px-6 py-[56px] text-center flex flex-col gap-8 lg:text-start lg:px-20 xl:px-[110px]">
      <h2 className="font-fraunces font-black text-[32px] lg:text-[40px] text-[#24303E] -tracking-[0.23px] lg:-tracking-[.29px] ">{title}</h2>

      <p className="font-barlow font-semibold text-[18px] text-[#808397] leading-[30px] -tracking-[0.13px]">{text}</p>

      <a className={`relative self-center lg:self-start flex justify-center items-end font-fraunces font-black text-[15px] text-[#24303E] leading-[25px] tracking-[1px] after:absolute after:min-w-[calc(100%+10px)] after:min-h-[10px] after:rounded-full ${title == 'Transform your brand' ? 'after:bg-[#FAD400] after:opacity-25 hover:after:opacity-100' : 'after:bg-[#FE7766] after:opacity-25 hover:after:opacity-100'} after:transition-opacity after:duration-300 after:ease-in-out`} href="#">
        <span className="z-[1]">LEARN MORE</span>
      </a>
    </Wrapper>
  )

  const renderImage = () => {
    const imageSrc = deviceType === 'mobile' || deviceType === 'tablet' ? device.mobile : device.desktop;
    return (
      <img className="object-cover min-w-full min-h-full" src={`/src/${imageSrc}`} />
    )
  }

  return (
    <Container className={`${className} grid sm:grid-cols-2 items-center`}>
      {
        deviceType !== 'mobile' && title == 'Transform your brand' ? (
          <>
            {renderText()}
            {renderImage()}
          </>
        ) : (
          <>
            {renderImage()}
            {renderText()}
          </>
        )
      }
    </Container>
  )
}