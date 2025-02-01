import { Navbar } from "@/components/navbar"
import { Home } from "@/components/home"
import { About } from "@/components/about"
import { Career } from "@/components/career"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Projects } from "@/components/projects"

export default async function Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="">
      <Navbar />
      </div>
      <main className="container mx-auto px-4 space-y-16 ">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="career">
          <Career />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

