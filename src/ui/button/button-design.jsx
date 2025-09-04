"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ButtonDesign({ className = "", activityid}) {

    const pathname = usePathname();
    const [buttonType, setButtonType] = useState("");
    const [buttonText, setButtonText] = useState("");

    useEffect(function() {
        switch(true) {
            case pathname === "/login":
                setButtonType("submit")
                setButtonText("Log in")
                break;

            case pathname ===  `/activities/${activityid}`:
                setButtonType("submit")
                setButtonText("Tilmeld")
        }
            
    }, [pathname]);

    return (
        <>
            <button className={"bg-[var(--color-background)] self-center z-10 px-[70px] py-[12px] rounded-[10px] text-[var(--button-text-color)] drop-shadow-2xl" + className} type={buttonType}>{buttonText}</button>
        </>
    )
} 