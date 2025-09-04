import LoginFormular from "@/components/login-form";

export default function Login() {
    return (
        
        <div className="bg-[url('/splash-image.jpg')] z-0  h-screen bg-center bg-cover w-full relative bg-no-repeat overflow-hidden">
        <div className="bg-black/50 h-screen z-10 w-full absolute rotate-[54.5deg] bg-no-repeat overflow-hidden"></div>
        <LoginFormular className="absolute z-10 m-auto right-[0px] left-[0]"/>
        
        </div>
        
    )
}