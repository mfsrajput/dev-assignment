import { client } from '@/lib/sanity'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDate, getYearsOfExperience } from '@/lib/utils'

interface CareerItem {
  _id: string
  title: string
  company: string
  startDate: string
  endDate: string | null
  description: string
}

async function getCareerData(): Promise<CareerItem[]> {
  return client.fetch(`
    *[_type == "career"] | order(startDate desc) {
      _id,
      title,
      company,
      startDate,
      endDate,
      description
    }
  `)
}

export async function Career() {
  const careerData = await getCareerData()

  return (
    <section id="career" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">Career History</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {careerData.map((item) => (
            <Card key={item._id}>
              <CardHeader>
                <CardTitle  className="text-lg font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.company}</p>
                <p className="text-sm text-muted-foreground">
                  {formatDate(item.startDate)} - {item.endDate ? formatDate(item.endDate) : 'Present'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {getYearsOfExperience(item.startDate)} years of experience
                </p>
                <p className="mt-2 font-thin">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

