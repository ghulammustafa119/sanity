import {client} from "@/sanity/lib/client"
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
export default async function Home() {

  const query = `*[0]`

 const sanityData = await client.fetch(query)


  return (
    <div>
      <h1 className="font-bold text-2xl">sanity</h1>
      <h2 className="font-bold text-xl"> {sanityData.heading}</h2>
     <p>{sanityData.paragraph}</p>
     <button>{sanityData.button_text}</button>
     <Image src={urlFor(sanityData.image).url()} alt="bhuttos-pic" width={500} height={200}/>
    </div>
  );
}
