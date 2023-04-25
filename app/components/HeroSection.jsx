"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/assets/myself.png"
            alt=""
            width={350}
            height={350}
            className="rounded-full drop-shadow-2xl brightness-125"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-3xl font-bold mt-2 sm:text-5xl md:text-6xl lg:text-7xl">
             SyukranDev
          </h1>
          <p className="text-lg mt-4 md:text-2xl">
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Backend Developer
            </span>
            {" "}based in KL, Malaysia.
          </p>
          <p className="text-lg  mb-6 md:text-2xl">
            Loves volleyball and cycling.
          </p>
          {/* --- */}
          <div className="flex flex-row  space-x-2 mb-1 justify-center md:justify-start">
            <a href="https://github.com/syukranDev" rel="noreferrer" target="_blank">
              <AiOutlineGithub
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </a>
            <a href="https://www.linkedin.com/in/syukransoleh" rel="noreferrer" target="_blank">
              <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </a>
          </div>
          {/* --- */}
          {/* <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 rounded drop-shadow-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link> */}
              
              
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection