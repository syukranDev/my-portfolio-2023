import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { SiJavascript, SiTypescript} from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { BsFillDatabaseFill } from 'react-icons/bs'

const projects = [
  {
    name: "Maybank MAE Apps - Home2u Property Module",
    description:
      "API backend for mortgage property listing, loan financial calculator and more.",
    image: "/assets/maybank-logo.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "#",
    tech: ''
  },
  {
    name: "Salesforce Loan Processing WebApps",
    description: "API backend for loan form, loan processing logic and 3rd-party intergration (CCRIS, BNM etc)",
    image: "/assets/maybank-logo.png",
    github: "#",
    link: "#",
    tech: ''
  },
  {
    name: "Property Management (Admin Portal WebApps)",
    description:
      "Portal for Power User to manage the property listings, user access, campaign, report generation and more.",
    image: "/assets/maybank-logo.png",
    github: "#",
    link: "#",
    tech: 'typescript'
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="pt-2">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects Involved
        <hr className="w-6 h-1 mx-auto my-4 bg-gray-700 dark:bg-white border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2 md:pl-20 ">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={350}
                        height={350}
                        className="rounded-xl shadow-xl hover:opacity-70 hover:blur-sm"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    {/* Below is for github link path */}
                    {/* <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div> */}
                    <div className="flex flex-row align-bottom space-x-4 ">
                        <FaNodeJs size={30} className="fill-gray-400"/>
                        <SiJavascript size={30}className="fill-gray-400 rounded-sm"/>
                        { project.tech === 'typescript' ? (<SiTypescript size={30} className="fill-gray-400 rounded-sm"/>) : undefined }
                        <BsFillDatabaseFill size={30} className="fill-gray-400"/>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection