import Skills from "@/components/Skills"

export default function Home() {
  return (

    <div className="scroll-parent">
      <section style={{ height: '100vh' }} className="flex justify-center items-center">
        <div className="size-3/4 flex items-center">
          <h1 className="text-2xl text-center">Hello! I'm a passionate web developer committed to mastering new technologies to craft dynamic and responsive websites. Let's innovate together"
          </h1>
        </div>
      </section>

      <section style={{ height: '100vh' }} className="flex justify-center items-center">
        <div className="size-3/4 flex justify-center items-center">
          <Skills />
        </div>
      </section>

      <section style={{ height: '100vh' }} className="flex justify-center items-center">
        <div className="w-full h-full">
        </div>
      </section>

    </div>

  )
}