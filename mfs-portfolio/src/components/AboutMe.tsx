"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { formatDate } from '@/lib/utils'
import { client, } from '@/lib/sanity'

interface Profile {
  name: string
  imageUrl: string
}

interface Education {
  _id: string
  title: string
  institution: string
  year: string
  description: string
}

interface Certification {
  _id: string
  title: string
  institution: string
  year: string
  description: string
}

const AboutMe = () => {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [education, setEducation] = useState<Education[]>([])
  const [certifications, setCertifications] = useState<Certification[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const profileData = await client.fetch(`
          *[_type == "profileImage"][0] {
            name,
            "imageUrl": image.asset->url
          }
        `)

        const aboutData = await client.fetch(`
          {
            "education": *[_type == "education"] | order(year desc) {
              _id,
              title,
              institution,
              year,
              description
            },
            "certifications": *[_type == "certification"] | order(year desc) {
              _id,
              title,
              institution,
              year,
              description
            }
          }
        `)

        setProfile(profileData)
        setEducation(aboutData.education)
        setCertifications(aboutData.certifications)
      } catch (error) {
        console.error("Failed to fetch data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAboutData()
  }, [])

  return (
    <section id="about" className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {profile ? (
              <Image
                src={profile.imageUrl || "/placeholder.svg"}
                alt={profile.name}
                width={400}
                height={400}
                className="rounded-full mx-auto"
              />
            ) : (
              <p className="text-center">Loading profile...</p>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Card>
              <CardHeader>
                <CardTitle>Personal Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p><strong>Name:</strong> Farhan Rajput</p>
                <p><strong>Email:</strong> mfs.khi@gmail.com</p>
                <p><strong>Contact No:</strong> +92 345 3123324</p>
              </CardContent>
            </Card>

            {/* Show Loading State */}
            {loading ? (
              <p className="text-center mt-4">Loading...</p>
            ) : (
              <>
                {/* Education Section */}
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {education.map((item) => (
                      <Card key={item._id} className="mb-4">
                        <CardHeader>
                          <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{item.institution}</p>
                          <p className="text-sm text-muted-foreground">{formatDate(item.year)}</p>
                          <p className="mt-2">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>

                {/* Certifications Section */}
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle>Certifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {certifications.map((item) => (
                      <Card key={item._id} className="mb-4">
                        <CardHeader>
                          <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{item.institution}</p>
                          <p className="text-sm text-muted-foreground">{formatDate(item.year)}</p>
                          <p className="mt-2">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
