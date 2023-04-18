import Image from 'next/image'
import { Poppins } from 'next/font/google'

const inter = Poppins({ weight: ['300'], subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      Hello, About!
    </div>
  )
}
