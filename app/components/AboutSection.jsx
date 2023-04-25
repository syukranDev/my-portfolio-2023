import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"


const skills = [
  { skill: "RESTAPIs" },
  { skill: "NodeJS" },
  { skill: "ExpressJS" },
  { skill: "ES6 Javascipt" },
  { skill: "Typescript" },
  { skill: "Git CI/CD" },
  { skill: "Postman" },
  { skill: "AWS S3" },
  { skill: "SQL" },
  { skill: "MongoDB" },
  { skill: "Linux Bash" },
  { skill: "Window CMD" },
  { skill: "JIRA" },
]

const skills2 = [
  { skill: "Tailwind" },
  { skill: "React" },
  { skill: "NextJS" },
  { skill: "PocketBase" },
  { skill: "Prisma" },
  { skill: "Vercel" },
  { skill: "Railway" },
  { skill: "SQLLite" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-gray-700 dark:bg-white border-0 rounded"></hr>
        </h1>

        <SlideUp offset="-300px 0px -300px 0px">
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-1 md:text-left">
              Get to know me!
            </h1>
            <p>
            As a self-taught programmer since my university days at UTP, I have always had a passion for coding and improving my skills every day. With almost two years of experience as a backend developer for Maybank, I have had the opportunity to work on multiple projects, honing my skills and learning new ones along the way.
            </p>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-1">Use at work</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:bg-gray-300"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <div className="flex flex-row justify-center md:justify-start">
              <h1 className="text-2xl font-bold mb-1 mt-6">Use for fun</h1>
              <p className=" ml-3 mt-7 line-through italic">(still learning though)</p>
            </div>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills2.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:bg-gray-300"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            {/* <Image
              src="/assets/pc.png"
              alt=""
              width={500}
              height={450}
              className="pt-5"
            /> */}
          </div>
        </div>
            </SlideUp>
      </div>
    </section>
  )
}

export default AboutSection