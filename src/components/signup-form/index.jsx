//The code is lent from Repetiation
"use client";
import { useActionState, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import ButtonDesign from "../../ui/button/button-design";
import { toast } from "react-toastify";
import signUpAction from "@/actions/signup-action";

export default function SignupFormular({className=""}) {
    const [formState, formAction, isPending] = useActionState(signUpAction, {});

    useEffect(function() {
        console.log(formState)
    }, [formState]);


return isPending ? (
    <ClipLoader 
        color="#EAEAEA"
        loading={true}
    />
) : (
    <div className={"flex justify-center items-center h-screen " + className}>
    <form action={formAction} className="flex flex-col">
        <h1 className=" mb-[0.625rem] text-[48px] text-[var(--color-text)]">Sign up</h1>
        <div className="bg-[var(--color-text)] mb-[0.938rem]">
            <label>
                <input type="text" name="username" placeholder="brugernavn" defaultValue={formState?.data?.username} className="p-3 pl-5"/>
                <p>{formState?.properties?.username.errors}</p>
            </label>
        </div>
        <div className="bg-[var(--color-text)]">
            <label> 
                <input type="password" name="password" placeholder="adgangskode" defaultValue={formState?.data?.password} className="p-3 pl-5" />
                <p>{formState?.properties?.password.errors}</p>
            </label>
        </div>
        <div className="bg-[var(--color-text)]">
            <label> 
                <input type="text" name="age" placeholder="alder" defaultValue={formState?.data?.age} className="p-3 pl-5" />
                <p>{formState?.properties?.password.errors}</p>
            </label>
        </div>
        <ButtonDesign className=" mt-[30px] "/>
    </form>
    </div>
)
}