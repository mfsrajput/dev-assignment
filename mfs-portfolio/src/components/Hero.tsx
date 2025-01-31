"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import MagicButton from "./ui/MagicButton"
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 5000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x6366f1, // Indigo color, you can change this
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    camera.position.z = 2

    // Mouse movement effect
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    document.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate particles
      particlesMesh.rotation.x += 0.0001
      particlesMesh.rotation.y += 0.0001

      // Move particles based on mouse position
      particlesMesh.position.x = mouseX * 0.00008
      particlesMesh.position.y = -mouseY * 0.00008

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousemove", handleMouseMove)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div ref={mountRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Elevating as an <span className="text-primary">Analyst-Communication</span> in Telecommunications
        </motion.p>
        <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Alongside my professional role, I&apos;m delving into the realms of web development and Gen AI, exploring the intersection of technology and innovation." />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <a href="#about">
          <MagicButton 
          title = "Show my work"
          icon = {<FaLocationArrow />}
          position="right"
          />
        </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

