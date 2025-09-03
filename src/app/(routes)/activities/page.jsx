import ActivityCard from "@/ui/activity-card/activity-card";

export default async function ActivityPage() {
    const response = await fetch("http://localhost:4000/api/v1/activities")
    const json = await response.json();

    console.log(json)

return(
    <>
    <h1 className="text-[var(--color-text)] mt-[32px] ml-[32px] text-[36px]">Aktiviteter</h1>
    <ul>
        {json.map(activity => (
            <li key={activity.id}>
                <ActivityCard activity={activity}/>
            </li>
            
        ))}
    </ul>
    </>
)
}