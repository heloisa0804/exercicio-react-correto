import { useEffect } from "react";
import Conteudo from "../components/Conteudo/Conteudo";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Academia Digital";
  }, []);

  return <Conteudo />;
}
