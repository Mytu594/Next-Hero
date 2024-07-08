import Hero from "@/components/HeroComponent"
import About from "@/components/AboutComponent"
import Projects from "@/components/ProjectsComponent"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
