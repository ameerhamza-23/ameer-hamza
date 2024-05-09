export default function Sidebar() {
    return (
        <div className="flex flex-col items-center gap-2 justify-center fixed" style={{height:'100vh'}}>

            <div className="size-8 rounded-full bg-red-500 flex justify-center items-center">1</div>
                
            <div className="w-0.5 h-48 bg-black rounded-lg">

            </div>

            <div className="size-8 rounded-full border-black flex justify-center items-center" style={{borderWidth:'1px'}}>2</div>

            <div className="w-0.5 h-48 bg-black rounded-lg">

            </div>

            <div className="size-8 rounded-full border-black flex justify-center items-center" style={{borderWidth:'1px'}}>3</div>

        </div>
    )
}