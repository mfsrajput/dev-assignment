import Image from 'next/image'
import { client, urlFor } from '@/lib/sanity'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Project {
  _id: string
  title: string
  description: string
  imageUrl: string
  projectUrl: string
}

async function getProjectsData(): Promise<Project[]> {
  return client.fetch(`
    *[_type == "project"] | order(order asc) {
      _id,
      title,
      description,
      "imageUrl": image.asset->url,
      projectUrl
    }
  `)
}

export async function Projects() {
  const projectsData = await getProjectsData()

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">My Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Card key={project._id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={urlFor(project.imageUrl).url() || "/placeholder.svg"}  // Using urlFor here
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>{project.title}</CardTitle>
                <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
