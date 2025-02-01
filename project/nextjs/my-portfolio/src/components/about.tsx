import { client } from '@/lib/sanity'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDate } from '@/lib/utils'

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

interface AboutData {
  education: Education[]
  certifications: Certification[]
}

async function getAboutData(): Promise<AboutData> {
  return client.fetch(`
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
}

export async function About() {
  const { education, certifications } = await getAboutData()

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">About</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold mb-4">Education</h3>
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
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Certifications</h3>
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
          </div>
        </div>
      </div>
    </section>
  )
}

