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
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Postman" },
  { skill: "AWS S3" },
  { skill: "SQL" },
  { skill: "MongoDB" },
  { skill: "Linux Bash" },
  { skill: "Window CMD" },
  { skill: "Log Debugging" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <SlideUp offset="-300px 0px -300px 0px">
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
            As a self-taught programmer since my university days at UTP, I have always had a passion for coding and improving my skills every day. With almost two years of experience as a backend developer for Maybank, I have had the opportunity to work on multiple projects, honing my skills and learning new ones along the way.
            </p>
            <br />
            <p>
            Despite my experience, I never stop striving to improve my coding abilities. I consistently spend my time learning new programming languages, frameworks, and tools to enhance my expertise and stay up-to-date with the latest industry trends. My goal is to be the best developer I can be, and I know that means putting in the time and effort to continually improve.
            </p>
            <br />
            <p>
            At Maybank, I have worked on numerous projects that have allowed me to develop my skills in areas such as database management, system integration, and server-side programming. I am proud of my contributions to the team and the company as a whole, and I look forward to taking on new challenges in the future.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/assets/pc.png"
              alt=""
              width={500}
              height={450}
              className="pt-5"
            />
          </div>
        </div>
            </SlideUp>
      </div>
    </section>
  )
}

export default AboutSection