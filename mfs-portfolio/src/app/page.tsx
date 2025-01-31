
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"
import AboutMe from "@/components/AboutMe"
import Contact from "@/components/Contact"




export default async function Page() {
  return (
    <main className="relative bg-blac-100
    flex justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        <Header/>
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Contact />
        <Footer/>

      </div>

    </main>
  )
}

