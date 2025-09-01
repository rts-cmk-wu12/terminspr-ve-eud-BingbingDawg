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
    
    const apiResponse = await fetch (`http://localhost:4000/api/v1/users?username=${isvalidated.data.username}`)
    const json = await apiResponse.json();

    if (!json.length) return{
        success: false,
        errors: ["Brugernavn eller adgangskode er forkert"]
    }
    if (json[0].password === isValidated.data.password) {
        const cookieStore = await cookies();
        cookieStore.set("loginKey", "Velkommen til Landrup dans, du er nu logget ind")
    }
}