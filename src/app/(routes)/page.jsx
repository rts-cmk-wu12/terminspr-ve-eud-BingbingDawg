import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hjem"
}

export default function Home() {
  return (
   <div className="bg-[url('/splash-image.jpg')] z-0  h-screen bg-center bg-cover w-full relative bg-no-repeat overflow-hidden">
         <h1 className="flex flex-col uppercase absolute top-[350px]">
          <span className="textstroke absolute left-[44px]">landrup</span>
         <span className="second_span_text absolute top-[12px] left-[44px] font-[Racing_Sans_One]">dans</span>
         </h1>
         <Link href="/activities">Kom i gang</Link>
           </div>
           
  );
}
