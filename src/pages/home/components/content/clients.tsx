import { Container, Wrapper } from "@app-layouts";

export default function Clients(props: ClientsTestimonialDataI) {
  const { title, clients } = props

  const renderClientTestimonial = (client: ClientI, key: number) => (
    <Wrapper className="flex flex-col items-center gap-8 text-center" key={key}>
      <img className="max-w-[72px] aspect-square rounded-full" src={`${client.image}`} alt="" />

      <p className="font-barlow font-semibold text-[18px] text-[#5B636D] leading-[32px] -tracking-[0.13px]">
        {client.testimonial}
      </p>

      <div className="grid gap-[9px]">
        <h3 className="font-fraunces font-black text-[18px] text-[#24303E] -tracking-[0.13px]">{client.name}</h3>
        <p className="font-barlow font-semibold text-[14px] text-[#A7AAAD] leading-[25px] -tracking-[0.1px]">{client.position}</p>
      </div>
    </Wrapper>
  )

  return (
    <Container className="px-6 py-[64px] flex flex-col gap-[64px]">
      <h2 className="text-center font-barlow text-[#A7AAAD] text-[20px] uppercase tracking-[4px] lg:font-black lg:font-fraunces">{title}</h2>

      <Wrapper className="grid grid-cols-1 md:grid-cols-3 gap-[64px]">
        {clients.map(renderClientTestimonial)}
      </Wrapper>
    </Container>
  )
}