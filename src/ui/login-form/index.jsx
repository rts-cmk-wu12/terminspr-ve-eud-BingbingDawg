//The code is lent from Repetiation
"use client";

import loginAction from "@/actions/login-action";
import { useActionState } from "react";
import { ClipLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "0 auto"
}

export default function LoginFormular() {
    const [formState, formAction, isPending] = useActionState(loginAction);


return isPending ? (
    <ClipLoader 
        color="#EAEAEA"
        loading={true}
    />
) : (
    
    <form action={formAction}>
        <h1>Log ind</h1>
        <div className="bg-[var(--color-text)]">
            <label >
                <input type="text" name="username" placeholder="brugernavn" />
                <p>{formState?.properties?.username.errors}</p>
            </label>
        </div>
        <div className="bg-[var(--color-text)]">
            <label> 
                <input type="password" name="password" placeholder="adgangskode" />
                <p>{formState?.properties?.password.errors}</p>
            </label>
        </div>
        <button type="submit">Log ind</button>
        <p>{formState?.errors}</p>
    </form>
    
)
}