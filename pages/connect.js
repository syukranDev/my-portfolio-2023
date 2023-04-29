export const metadata = {
    title: 'SyukranDev | Connect',
    description: 'This page is to contact website owner.',
  }
  
  export default function page() {
    return (
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 ">
          <img src="https://play.tailwindcss.com/img/beams.jpg" alt="" class="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
          <div class="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div class="relative bg-white mx-5 mt-5 md:mt-20 rounded-lg px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            {/* To delete once completed */}
            <div class="flex p-4 mb-4 text-sm shadow-sm text-red-800 rounded-lg bg-red-50" role="alert">
              <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">ALERT: </span> This section is still under construction. 
              </div>
            </div>
            {/* To delete once completed */}
            <div class="mx-auto max-w-md">
              <h1 className="text-3xl font-semibold text-center dark:text-black">Contact Me</h1>
              <div class="divide-y divide-gray-300/50">
                <div class="space-y-6 py-8 text-base leading-7 text-gray-600 ">
                  <p className="text-center">Fill the form and we will keep in touch soon!</p>
                  <ul class="space-y-4">
                    {/* ========== */}
                    <form>
                      <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                          Your email
                        </label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="hr@company.com"></input>
                      </div>
                      <div class="mb-6">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                          Your message
                        </label>
                        <textarea type="text" id="message" row="4" class=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Hi SyukranDev, I am interested to know more about you..." required></textarea>
                      </div>
                      <button type="submit" 
                            class="text-white justify-center
                            bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
                            focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium 
                            rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Let's connect!
                        </button>
                      </form>
                    {/* ========== */}
                  </ul>
                </div>
                <div class="pt-8 text-base font-semibold leading-7">
                  <p class="text-gray-900">Looking for my another portfolio?</p>
                  <p>
                    <a href="https://www.github.com/syukranDev" class="text-sky-500 hover:text-sky-600">Jump to my Github &rarr;</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
  