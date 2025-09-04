import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";

export default function FooterComponent() {
    return(
        <footer className="flex bg-button-text w-full h-[66px] justify-evenly items-center bottom-0 fixed z-10 pl-[9px]">
            <Link href="/activities" className="rounded-full border-1 w-[41px] h-[41px] flex items-center "><FiHome className="w-[24px] ml-[8px] h-auto"/></Link>
            <Link href="/calender" className="rounded-full border-1 w-[41px] h-[41px]  flex items-center "><MdOutlineDateRange className="w-[24px] ml-[8px] h-auto"/></Link>
        </footer>
    )
}