import { Main } from "@app-layouts";
import { Header, MainContent } from "./components";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<DataI>([])

  useEffect(() => {
    if(data.length === 0) {
      fetch('')
        .then(response => response.json())
        .then((data: DataI) => setData(data))
    }
  }, [])

  return (
    <Main className="">
      <Header />
      <MainContent data={data} />
    </Main>
  );
}