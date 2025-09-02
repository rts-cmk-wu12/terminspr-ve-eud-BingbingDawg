
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ButtonDesign({ className = ""}) {

    const pathname = usePathname();
    const [buttonType, setButtonType] = useState("");
    const [buttonText, setButtonText] = useState("");

    useEffect(function() {
        switch(true) {
            case pathname === "/login":
                setButtonType("submit")
                setButtonText("Log in")
        }
    })

    return (
        <>
            <button className={"bg-[var(--color-background)] self-center px-[70px] py-[12px] rounded-[10px] text-[var(--button-text-color)] drop-shadow-2xl" + className} type={buttonType}>{buttonText}</button>
        </>
    )
} 