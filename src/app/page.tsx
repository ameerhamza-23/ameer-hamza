import Skills from "@/components/Skills"
import ProjectCard from "@/components/ProjectCard"

export default function Home() {

  const Descriptions = [
    "A dynamic real-time chat application with user authentication,friend management, and chat room functionalities using the MERN stack.",
    "A platform that allows students to buy from and sell books to other university students. It is built using the PERN stack.",
    "A simple todo app that includes user authentication and allows users to create and delete tasks"
  ]

  return (

    <div className="scroll-parent">
      <section id="section1" style={{ height: '100vh' }} className="flex justify-center items-center">
        <div className="size-3/4 flex items-center">
          <h1 className="text-lg md:text-xl lg:text-2xl text-center">Hello! I'm a <span className="text-red-600">Hamza</span>, passionate web developer committed to mastering new technologies to craft dynamic and responsive websites. Let's innovate together
          </h1>
        </div>
      </section>

      <section id="section2" style={{ height: '100vh' }} className="flex flex-col justify-center items-center">
        <h1 className="text-4xl pl-8 text-green-900 font-medium">Technologies i Work With</h1>
        <div className="size-3/4 flex justify-center items-center">
          <Skills />
        </div>
      </section>

      <section id="section3" className="flex justify-center h-auto" style={{ minHeight: '100vh' }}>
        <div className="w-full h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-8">
            <ProjectCard title="Peer Pulse" description={Descriptions[0]} github='abc' />
            <ProjectCard title="Campus Books" description={Descriptions[1]} github='abc' />
            <ProjectCard title="Todo" description={Descriptions[2]} github='abc' />
          </div>
        </div>

      </section>

    </div>

  )
}