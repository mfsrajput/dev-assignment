"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { client } from '@/lib/sanity'
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Project {
  _id: string
  title: string
  description: string
  imageUrl: string
  projectUrl: string
}

const Projects = () => {
  const [projectsData, setProjectsData] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjectsData = async () => {
      const data: Project[] = await client.fetch(`
        *[_type == "project"] | order(order asc) {
          _id,
          title,
          description,
          "imageUrl": image.asset->url,
          projectUrl
        }
      `)
      setProjectsData(data)
    }

    fetchProjectsData()
  }, [])

  return (
    <section id="projects" className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card key={project._id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.imageUrl || "/placeholder.svg"} // Directly using imageUrl
                      alt={project.title}
                      fill
                      className="object-cover rounded-lg" // Ensuring rounded corners
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
