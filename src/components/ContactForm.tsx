export default function ContactForm() {
    return (
        <div className="size-3/4 flex flex-col gap-4 justify-center items-center">
            <h1 className="text-2xl font-bold text-blue-800">Get In Touch</h1>
            <form className="flex flex-col gap-4 w-full sm:w-5/6 h-full text-sm">
                <input type="text" placeholder="Name" className="rounded-lg p-2 "  />
                <input type="email" placeholder="Email" className="rounded-lg p-2 "  />
                <textarea placeholder="Message" className="rounded-lg p-2 "  style={{height:'90%'}}/>
                <button className="rounded-lg p-2 bg-gradient-to-r from-blue-400 to-blue-800 text-white">Submit</button>
            </form>
        </div>
    )
}