//The code is lent from Repetiation
"use client";

import loginAction from "@/actions/login-action";
import { useActionState } from "react";
import { ClipLoader } from "react-spinners";
import ButtonDesign from "../../ui/button/button-design";

const override = {
    display: "block",
    margin: "0 auto"
}

export default function LoginFormular({className=""}) {
    const [formState, formAction, isPending] = useActionState(loginAction);


return isPending ? (
    <ClipLoader 
        color="#EAEAEA"
        loading={true}
    />
) : (
    <div className={"flex justify-center items-center h-screen " + className}>
    <form action={formAction} className="flex flex-col">
        <h1 className=" mb-[0.625rem] text-[48px] text-[var(--color-text)]">Log ind</h1>
        <div className="bg-[var(--color-text)] mb-[0.938rem]">
            <label>
                <input type="text" name="username" placeholder="brugernavn" className="p-3 pl-5"/>
                <p>{formState?.properties?.username.errors}</p>
            </label>
        </div>
        <div className="bg-[var(--color-text)]">
            <label> 
                <input type="password" name="password" placeholder="adgangskode" className="p-3 pl-5" />
                <p>{formState?.properties?.password.errors}</p>
            </label>
        </div>
        <ButtonDesign className=" mt-[30px] "/>
        <p>{formState?.errors}</p>
    </form>
    </div>
)
}