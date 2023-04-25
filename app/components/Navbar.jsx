"use client"
import Image from "next/image"
import Link from "next/link"
import React, {useState} from "react"
import { RiMoonFill, RiSunLine} from 'react-icons/ri'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { useTheme } from "next-themes"
import { GoVerified } from 'react-icons/go'


const NAV_ITEMS = [
    {
        label: 'Home',
        page: '/',

    },
    {
        label: 'About',
        page: '/',
    },
    {
        label: 'Projects',
        page: '#projects',
    }
]


export const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [ navbar, setNavbar ] = useState(false)



  return (
     <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-gray-950">
        <div className="justify-between md:items-center md:flex">
            <div>
                <div className="flex items-center justify-between py-3">
                    <div className="md:py-5 md:block">
                        <div className="flex flex-row">
                            <h2 className="font-sans text-2xl font-bold  antialiased">SyukranDev</h2>
                            <GoVerified size={20} className="mt-2 ml-2 fill-sky-400 antialiased"/>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setNavbar(!navbar)}>
                            { navbar ? <IoMdClose size={30}/> : <IoMdMenu size={30}/> }
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                    }`}>
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        href={item.page}
                                        className="block lg:inline-block font-semibold"
                                        
                                        activeClass='active'
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        onClick={() => setNavbar(!navbar)}
                                    >{item.label}</Link>
                                )
                            })}

                            {currentTheme === 'dark' ? (
                                <button onClick={() => setTheme('light')} className="bg-slate-100 p-2 rounded-xl">
                                    <RiSunLine size={15} color="black" />
                                </button>
                            ) : (
                                <button onClick={() => setTheme('dark')} className="bg-slate-100 p-2 rounded-xl">
                                    <RiMoonFill size={15}/>
                                </button>
                            )}
                        </div>
                </div>
            </div>
                
            
        </div>
     </header>
  )
}
