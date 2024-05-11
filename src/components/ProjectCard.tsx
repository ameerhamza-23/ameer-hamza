export default function ProjectCard(props:{
    title:String,
    description:String,
    github:String
}) {
    return (
        <div className="p-2">
            <div className="flex rounded-lg h-full dark:bg-gray-800 bg-slate-950 p-4 flex-col">
                <div className="flex items-center mb-3">
                    <h2 className="text-white dark:text-white text-sm sm:text-md font-medium">{props.title}</h2>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                    <p className="leading-relaxed text-base text-white dark:text-gray-300 text-sm sm:text-md line-clamp-3">
                        {props.description}
                    </p>
                    <a href={`${props.github}`} target="_blank" className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center text-sm sm:text-md">Github
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}