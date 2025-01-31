"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { client, urlFor } from '@/lib/sanity'

interface Skill {
  _id: string
  name: string
  imageUrl: string
  order: number // Add order field
}

const Skills = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkillsData = async () => {
      const data: Skill[] = await client.fetch(`
        *[_type == "skills"] | order(order asc) {  // Sort by order in Sanity query
          _id,
          name,
          "imageUrl": image.asset->url,
          order
        }
      `);
      setSkillsData(data);
    };

    fetchSkillsData();
  }, []);

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
          {skillsData.map((skill) => (
            <motion.div
              key={skill._id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center"
            >
              {skill.imageUrl ? (
                <Image
                  src={urlFor(skill.imageUrl).url()}
                  alt={skill.name}
                  width={50}
                  height={50}
                  className="object-contain rounded-full"
                />
              ) : (
                <div>Loading...</div>
              )}
              <p className="mt-2 text-sm text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
