import { Main } from "@app-layouts";
import { Footer, Header, MainContent } from "./components";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<DataI>([])

  useEffect(() => {
    if (data.length === 0) {
      fetch('/data/data.json')
        .then(response => response.json())
        .then((data: DataI) => setData(data))
    }
  }, [data.length])

  return (
    <Main className="">
      <Header />
      <MainContent data={data} />
      {
        data.length > 0 && <Footer {...data.at(-1) as unknown as FooterI} />
      }
    </Main>
  );
}