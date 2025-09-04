"use server";

import { cookies } from "next/headers";
import z from "zod";

export default async function loginAction(prevState, formData){
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

    
}