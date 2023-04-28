import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectSection"
import Footer from "./components/Footer"

export const metadata = {
  title: 'SyukranDev',
  description: 'Portflio website for SyukranDev',
}

export default function Home() {
  return (
     <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <Footer/>
     </main>
  )
}
