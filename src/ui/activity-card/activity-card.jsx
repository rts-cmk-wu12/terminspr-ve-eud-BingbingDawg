import Image from "next/image";
import Link from "next/link";

export default function ActivityCard({activity}){
    
    return(
        <Link href={`activities/${activity.id}`} className="grid overflow-hidden grid-cols-1 mb-[31px] ">
            
            <Image className="w-[356px] row-start-1 row-end-2 col-start-1 col-end-2 rounded-special h-[344px] object-cover" src={activity.asset.url} alt="" height="300" width="300" priority/>

            <div className="row-start-1 row-end-2 col-start-1 col-end-2 top-0 left-0 w-[356px] h-[96px] bg-secondary-background z-1 self-end opacity-80 rounded-overlay-radius">
            </div>

            <h2 className="z-2 self-end justify-start mb-72px row-start-1 row-end-2 col-start-1 col-end-2 p-[1.2rem] overflow-ellipsis whitespace-normal max-w-full overflow-hidden mb-[30px]">{activity.name}
            </h2>

            <p className="z-2 self-end row-start-1 row-end-2 col-start-1 col-end-2 p-[1.2rem] mb-[10px]">{activity.minAge}-{activity.maxAge} år
            </p>
        </Link>
    )
} 