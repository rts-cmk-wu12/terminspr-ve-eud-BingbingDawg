import Image from "next/image";

export const metadata = {
  title: "Hjem"
}

export default function Home() {
  return (
   <div className="bg-[url('/splash-image.jpg')] z-0  h-screen bg-center bg-cover w-full relative bg-no-repeat overflow-hidden">
         <h1 className="flex flex-col uppercase">
          <span className="textstroke ">landrup</span>
         <span className="second_span_text">dans</span>
         </h1>
           </div>
           
  );
}
