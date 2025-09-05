import ButtonDesign from "@/ui/button/button-design";
import FooterComponent from "@/ui/footer/footer";
import Image from "next/image";
import Link from "next/link";

export default async function ActivityDetalisPage({ params }) {

    const { activityid } = await params;

    const response = await fetch(`http://localhost:4000/api/v1/activities/${activityid}`)
    const json = await response.json();

    console.log(json)

    return (
        <div className="mb-[3.3rem]">
            <main>
                <div className="w-full relative">
                    <Image className="w-full h-[489px] object-fit" width="411" height="489" alt="" src={json.asset.url} priority />
                    <Link href="/login" className=" absolute bg-[var(--color-background)] self-center z-10 px-[70px] py-[12px] rounded-[10px] text-[var(--button-text-color)] drop-shadow-2xl top-[411px] right-[24px]">Tilmeld</Link>
                </div>
                <div>
                    <h1 className="text-white">{json.name}</h1>
                    <span className="text-white">{json.minAge}-{json.maxAge} år</span>
                    <p className="text-white">{json.description}</p>


                </div>

            </main>
            <FooterComponent />
        </div>
    )
}