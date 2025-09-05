"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";


export default async function loginAction(prevState, formData){
    const cookieStore = await cookies();
    const username = formData.get("username");
    const password = formData.get("password");

    const schema = z.object({
        username: z.string().min(1, { message: "Brugernavn skal være udfyldt"}),
        password: z.string().min(1, { message: "Adgangskode skal være udfyldt"})
    })

    const isValidated = schema.safeParse({
        username, password
    })
    
    if(!isValidated.success)
        return {
        ...isValidated,
        ...(z.treeifyError(isValidated))
        }

     
    
    const apiResponse = await fetch (`http://localhost:4000/auth/token`, {
        method: "POST",
        headers: {
            "Content-Type":  "application/json"
        },
        body: JSON.stringify({
                username: isValidated.data.username,
                password: isValidated.data.password
        })
    })
    const json = await apiResponse.json();
    console.log(json)

    if (!json) return {
        success: false,
        errors: ["Brugernavn eller adgangskode er forkert"]
    }
    if (json.password === isValidated.data.password) {
        const cookieStore = await cookies();
        cookieStore.set("usertoken", "du er nu logget ind", {validUntil: 60 * 30 })
    }

       cookieStore.set({
        name: "usertoken",
        value: json.token,
        validUntil: 60 * 60 * 24 * 30 
    })
       cookieStore.set({
        name: "usertokenid",
        value: json.userId,
        validUntil: 60 * 60 * 24 * 30 
    })

    
    redirect("/activities");
}