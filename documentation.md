# Dokumentaion for Landrup Dans
Andreas Nielsen, WU12

## tech-stack
* Next.js - Next.js er et front-end framework baseret på React.js der giver adgang til f.eks. server-side rendering og static rendering. Server-side komponenter giver også en større sikkerhed, da alt kode afvikles på server i stedet for klienten

* React - React er et bibliotek som giv mulighed for at lave komponente og håndetere forskellige states. React har også et stort community og et stort modul-bibliotek, som der er aktivt, dokumenteret og understøttet. Det er også et af de mest brugte front-end bibliotekker så efterspøgelsen op React-udviklere er stor.

* Git - Git er et versionsværktøj, som kan bruges til at lave branches og versioner af min kode så man kan gå tilbage til tidligere versioner hvis jeg nu har lavet en fejl, git bruges sammen med git hub
* Tailwind
* React-icons - React-icons er et ikon-bibliotek som er brugt sammen med react
* React-spinners - React-spinners er et library som er brugt til at lave forskellige spinners. Jeg bruger det til at lave loading på login page.

* React-toastify - React-toastify et library hvor jeg nemt kan tilføje notification til min web-app

* Zod
Et valideringsbibliotek til objekter og strings. Jeg bruger Zod til blandt andet at validere bruger-input fra formularer.

## Kode-eksempel
Calender page 
src/app/(routes)/calender/page.jsx

``` jsx
import CalenderCard from "@/ui/calender-card";
import FooterComponent from "@/ui/footer/footer";
import { cookies } from "next/headers";


export default async function CalenderPage() {

    const response = await fetch(`http://localhost:4000/api/v1/activities/`)
    const json = await response.json();

    console.log(json)

    const cookieStore = await cookies()
    const cookieId = cookieStore.get("usertokenid")
    const cookieToken = cookieStore.get("usertoken")
    
    const userActivityResponse = await fetch(`http://localhost:4000/api/v1/users/${cookieId.value}`, {
        "method": "GET",
         "headers": {
    "Authorization": `Bearer ${cookieToken.value}`
  }
    })
    const userActivityJson = await userActivityResponse.json();
    console.log("user", userActivityJson)

    return (
        <div className="mb-[6rem]">
        <main className="sitemargin">
            <h1 className="text-[var(--color-text)] mt-[4px] ml-[4px] mb-[30px] text-[36px]">Kalender</h1>
            <ul>
                {userActivityJson?.activities?.map(calenderDates => (
                    <li key={calenderDates.id}>
                        <CalenderCard calenderDates={calenderDates}/>
                    </li>
                ))}
            </ul>
        </main>
        <FooterComponent />
        </div>
    )
}
```


## Style-guide
### Colors
* #5E2E53
* #171717
* #E1A1E9
* #EAEAEA
* #E9E9E9
* #431567
* #E856EB
* #000000

### Fonts
 #### Text font
 * Ubuntu
 #### Logo font
 * Roboto
 * Racing Sans One
 #### Font-sizes
* 18 px
* 24 px
* 36 px

## changes in design

 ### Search page
 * Jeg har valgt at fjerner search pagen da jeg ikke synes det gav nogen mening at have en separat søgefunktions side. I stedet har jeg valgt at sætter søgefunktionen ind på aktivitets siden istedet.

 * Jeg har valgt at tilføje login-siden til navigation. Så det er mulighed for at man kan logge ind og ud når man har lyst
