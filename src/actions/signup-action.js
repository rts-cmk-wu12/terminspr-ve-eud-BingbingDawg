"use server";


import { redirect } from "next/navigation";
import z from "zod";


export default async function signUpAction(prevState, formData){

    const slug = formData.get("slug")
    const username = formData.get("username");
    const password = formData.get("password");
    const age = formData.get("age");
    const role = formData.get("role");

    const schema = z.object({
        username: z.string().min(1, { message: "Brugernavn skal være udfyldt"}).max(50, { message: "Maks 50 tegn"}),
        password: z.string().min(1, { message: "Adgangskode skal være udfyldt"}),
        age: z.string().min(1, { message: "Alder skal være udfyldt"}).max(110, { message: "du kan maks være 110 år gammel"}),
    })

    const isValidated = schema.safeParse({
        username, password, age, role, slug
    })
    
    if(!isValidated.success)
        return {
        ...isValidated,
        ...(z.treeifyError(isValidated))
        }

     
    
    const apiResponse = await fetch (`http://localhost:4000/api/v1/users`, {
        method: "POST",
        headers: {
            "Content-Type":  "application/x-www-form-urlencoded"
        },
        body: JSON.stringify({
                username: isValidated.data.username,
                password: isValidated.data.password,
                age: parseFloat(isValidated.data.age)
        })
    })
    const json = await apiResponse.json();
    console.log(json)

   if (response.status !== 201) return {
        success: false,
        errors: ["Noget gik galt. Prøv igen"]
    }

    console.log(" du er nu signet op")

    
    redirect("/activities");

    return await response.json();
}