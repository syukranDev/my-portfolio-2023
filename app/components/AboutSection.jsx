import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"
import { BsBriefcaseFill} from 'react-icons/bs'


const skills = [
  { skill: "RESTAPIs" },
  { skill: "NodeJS" },
  { skill: "ExpressJS" },
  { skill: "ES6 Javascript" },
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
  { skill: "GraphQL" },
  { skill: "Prisma" },
  { skill: "Vercel" },
  { skill: "Amplify" },
  { skill: "Railway" },
  { skill: "SQLite" },
]

const employmentHistory = [ 
  {
    employer: 'Universiti Teknologi PETRONAS',
    role: 'M&E Engineer',
    duration: 'Sept 2016 - Dec 2020',
    desc: 'I spent 5 years studying here'
  },
  {
    employer: 'Top Glove Corporation Berhad',
    role: 'M&E Engineer',
    duration: 'Jan 2021 - Dec 2021',
    desc: 'Working as M&E Engineer'
  },
  {
    employer: 'Maybank Banking Berhad (HQ)',
    role: 'M&E Engineer',
    duration: 'Dec 2021 - April 2023',
    desc: 'Served as Backend Developer (NodeJS)'
  },
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
        <div className="ml-11 mt-10 mb-10">
          <ol class="items-center sm:flex">
              {
                employmentHistory.map((data, idx) => (
                  <li key={idx} class="relative mb-6 sm:mb-0">
                      <div class="flex items-center">
                          <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                              {/* <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg> */}
                              <BsBriefcaseFill size={15} className="antialiased fill-blue-800 dark:fill-white"/>
                          </div>
                          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                      </div>
                      <div class="mt-3 sm:pr-8">
                          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            {data.employer}
                          </h3>
                          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            {data.duration}
                          </time>
                          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                            {data.desc}
                          </p>
                      </div>
                  </li>
                ))
              }
          </ol>
        </div>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-1 md:text-left">
              Get to know me!
            </h1>
            <p className="text-justify">
            As a self-taught programmer since my university days at UTP,
             I have always had a passion for coding and improving my skills every day. 
             With almost <span className="underline">1.5 years of experience</span> as 
             a backend developer for Maybank, I have had the opportunity to work on
              multiple projects, honing my skills and learning new ones along the way.
            </p>
            <br />
            <Image
              src={'https://illustrations.popsy.co/amber/home-office.svg'}
              width={350}
              height={350}
              className="ml-0 md:ml-11"
            />
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