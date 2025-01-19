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
      <Navbar />
      <main className="container mx-auto px-4">
        <Home />
        <About />
        <Projects />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

