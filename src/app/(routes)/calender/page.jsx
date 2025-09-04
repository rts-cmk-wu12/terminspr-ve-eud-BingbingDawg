import CalenderCard from "@/ui/calender-card";
import FooterComponent from "@/ui/footer/footer";

export default async function CalenderPage() {

    const response = await fetch("http://localhost:4000/api/v1/activities")
    const json = await response.json();

    console.log(json)

    return (
        <div className="mb-[6rem]">
        <main className="sitemargin">
            <h1 className="text-[var(--color-text)] mt-[4px] ml-[4px] mb-[30px] text-[36px]">Kalender</h1>
            <ul>
                {json.map(calenderDates => (
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