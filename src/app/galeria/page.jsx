import Encabezado from "../component/Encabezado";
import Image from "next/image";
import Footer from "../component/footer";
import { galeryList } from "../data";

import Card from "../component/Card";

export default function GaleryPage() {
  return (
    <div className="w-4/5 mx-auto">
      <Encabezado />
      <Card list={galeryList} />
      <Footer />
    </div>
  );
}
