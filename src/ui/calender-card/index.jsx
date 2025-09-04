import Image from "next/image";
import Link from "next/link";

export default function CalenderCard({calenderDates}){
    
    return(
        <Link href="" className="grid overflow-hidden grid-cols-1 mb-[31px] ">
            
            <div className="row-start-1 row-end-2 col-start-1 col-end-2 top-0 left-0 w-full pt-[19px] h-[96px] bg-text z-1 self-end rounded-[11px]">
            </div>

            <h2 className="z-2 self-end justify-start mb-72px row-start-1 row-end-2 col-start-1 col-end-2 pl-[30px] text-[36px]  overflow-ellipsis whitespace-nowrap w-full overflow-hidden mb-[30px]">{calenderDates?.name}
            </h2> 

            <p className="z-2 self-end row-start-1 row-end-2 col-start-1 col-end-2 pl-[30px] mb-[10px]">{calenderDates?.weekday} {calenderDates.time}
            </p>
        </Link>
    )
} 