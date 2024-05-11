import Skills from "@/components/Skills"
import ProjectCard from "@/components/ProjectCard"

export default function Home() {

  const Descriptions = [
    "A dynamic real-time chat application with user authentication,friend management, and chat room functionalities using the MERN stack.",
    "A platform that allows students to buy from and sell books to other university students. It is built using the PERN stack.",
    "A simple todo app that includes user authentication and allows users to create and delete tasks"
  ]

  const github = [
    "https://github.com/ameerhamza-23/PeerPulseBackEnd",
    "https://github.com/ameerhamza-23/CampusBooks",
    "https://github.com/ameerhamza-23/todo"
  ]

  return (

    <div className="scroll-parent">
      <section id="section1" style={{ height: '100vh' }} className="flex justify-center items-center">
        <div className="size-3/4 flex flex-col justify-center gap-2">
          <h1 className="text-lg md:text-xl lg:text-2xl text-center">Hello! I'm <span className="text-red-600">Hamza</span></h1>
          <h1 className="text-lg md:text-xl lg:text-2xl text-center">a passionate web developer committed to mastering new technologies to craft dynamic and responsive websites. Let's innovate together
          </h1>
        </div>
      </section>

      <section id="section2" style={{ height: '100vh' }} className="flex flex-col justify-center items-center">
        <h1 className="text-md sm:text-lg md:text-2xl pl-8 text-green-900 font-medium">Technologies i Work With</h1>
        <div className="size-3/4 flex justify-center items-center hidden md:block md:p-8">
          <Skills />
        </div>
        <div className="grid grid-cols-4 gap-7 p-8 items-center md:hidden">
          <div className="w-14 h-14 flex items-center">
            <img src="react.svg" />
          </div>
          <div className="w-14 h-14 flex items-center">
            <img src="nodejs.svg" />
          </div>
          <div className="w-14 h-14 flex items-center">
            <img src="mongo.svg" />
          </div>
          <div className="w-14 h-14 flex items-center">
            <img src="next.svg" />
          </div>
          <div className="w-14 h-14 flex items-center">
            <img src="tailwind.png" alt="" />
          </div>
          <div className="w-14 h-14 flex items-center">
            <img src="django.svg" width={55} height={55} alt="" />
          </div>
          <div className="w-14 h-14 flex items-center">
            <img src="docker.svg" />
          </div>
          <div className="w-14 h-14 flex items-center">
            <img src="redux.svg" width={65} height={60} />
          </div>
          <div className="w-14 h-14 flex items-center">
            <img src="git.png" />
          </div>
          <div className="w-14 h-14 flex items-center">
            <img src="javascript.svg" />
          </div>
          <div className="w-14 h-14 flex items-center">
            <img src="python.svg" alt="" />
          </div>
          <div className="w-14 h-14 flex items-center">
            <img src="typescript.svg" width={65} height={60} />
          </div>
        </div>
      </section>

      <section id="section3" className="flex justify-center h-auto" style={{ minHeight: '100vh' }}>
        <div className="w-full h-full">
          <h1 className="text-md sm:text-2xl p-4 sm:p-6 md:p-8 text-center text-gray-800 font-medium">My Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:p-4 md:p-8">
            <ProjectCard title="Peer Pulse" description={Descriptions[0]} github={github[0]} />
            <ProjectCard title="Campus Books" description={Descriptions[1]} github={github[1]} />
            <ProjectCard title="Todo" description={Descriptions[2]} github={github[2]} />
          </div>
        </div>

      </section>

    </div>

  )
}