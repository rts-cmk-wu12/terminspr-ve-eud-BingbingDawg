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