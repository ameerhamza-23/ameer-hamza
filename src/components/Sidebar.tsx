export default function Sidebar() {
    return (
        <div className="flex flex-col items-center gap-2 justify-center fixed" style={{height:'100vh'}}>

            <div className="size-8 rounded-full bg-red-500"></div>

            <div className="w-0.5 h-48 bg-black rounded-lg">

            </div>

            <div className="size-8 rounded-full bg-blue-500"></div>

            <div className="w-0.5 h-48 bg-black rounded-lg">

            </div>

            <div className="size-8 rounded-full bg-green-500"></div>

        </div>
    )
}