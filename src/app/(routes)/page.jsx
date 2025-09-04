import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
   <div className="bg-[url('/splash-image.jpg')] z-0  h-screen bg-center bg-cover w-full relative bg-no-repeat overflow-hidden">
         <h1 className="flex flex-col uppercase absolute top-[350px]">
          <span className="textstroke absolute left-[44px]">landrup</span>
         <span className="second_span_text absolute top-[12px] left-[44px] font-[Racing_Sans_One]">dans</span>
         </h1>
         <Link className=" button-animation bg-[var(--color-background)] self-center z-10 px-[70px] absolute py-[12px] rounded-[10px] text-[var(--button-text-color)] drop-shadow-2xl top-[800px] left-[100px]" href="/activities">Kom i gang</Link>
           </div>
           
  );
}
