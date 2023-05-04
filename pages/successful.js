import { useFormik } from "formik"
import { useRouter } from "next/router"
import { useState } from "react"
import contactFormValidation from "@/lib/validate"

  
export default function page() {
  return (
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 ">
        <img src="https://play.tailwindcss.com/img/beams.jpg" alt="" class="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
        <div class="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div class="relative bg-white mx-5 mt-5 md:mt-20 rounded-lg px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          {/* To delete once completed - underconstruction flag */}
          {/* <div class="flex p-4 mb-4 text-sm shadow-sm text-red-800 rounded-lg bg-red-50" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">ALERT: </span> This section is still under construction. 
            </div>
          </div> */}
          {/* To delete once completed */}
          <div class="mx-auto my-auto max-w-md">
            <h1 className="text-3xl font-semibold text-center dark:text-black animate-pulse">You messages sent succesfully...</h1>
            
          </div>
        </div>
      </div>
  )
}
