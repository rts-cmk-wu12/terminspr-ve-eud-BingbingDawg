import SearchFunction from "@/components/search-function";
import ActivityCard from "@/ui/activity-card/activity-card";
import FooterComponent from "@/ui/footer/footer";

export default async function ActivityPage() {
    const response = await fetch("http://localhost:4000/api/v1/activities")
    const json = await response.json();

    console.log(json)

return(
    < div className="mb-[6rem]">
    <main className="sitemargin">
    <h1 className="text-[var(--color-text)] mt-[4px] ml-[4px] text-[36px]">Aktiviteter</h1>
    <SearchFunction />
    <ul>
        {json.map(activity => (
            <li key={activity.id}>
                <ActivityCard activity={activity}/>
            </li>
            
        ))}
    </ul>
    </main>
    <FooterComponent />
    </div>
)
}