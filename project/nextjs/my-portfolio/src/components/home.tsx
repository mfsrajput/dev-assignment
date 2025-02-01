import { Button } from "@/components/ui/button"

export function Home() {
  return (
    <section id="home" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Elevating as an <span className="text-primary">Analyst-Communication</span> in Telecommunications
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Hello there, I&apos;m Farhan Rajput. Alongside my professional role, I&apos;m delving into the realms of web development and Gen AI, exploring the intersection of technology and innovation.
          </p>
          <Button asChild>
            <a href="#career">Explore My Career</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

