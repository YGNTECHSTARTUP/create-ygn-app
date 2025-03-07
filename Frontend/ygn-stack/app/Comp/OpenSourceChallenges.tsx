import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OpenSourceChallenges = () => {
  return (
    <div className="bg-[#6c35aa] bg-gradient-to-b from-[#251849] to-[#251849] text-white py-16 px-4 -mt-32">
    <div className="max-w-5xl mx-auto ">
      <div className="text-center mb-16 ">
      <h1 className="text-3xl font-bold mb-4">🚀 Empower Open Source, Together! 💡</h1>
<p className="text-lg mb-2">🤝 Join forces to build, innovate, and scale.</p>
<p className="text-xl md:text-2xl xl:text-4xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400 pb-2">⚡ Alone, you may go fast. But together, we go further.  Choose wisely!</p>

      </div>
      </div>
      <div className='justify-center items-center mx-auto flex -mt-16'>
        <Image src="/OpenSource.svg" alt='Open source Challenge' height={800} width={800}/>
      </div>
      <Link href={"https://github.com/YGNTECHSTARTUP/create-ygn-app/"} target='_blank'>
      <Button
              variant="outline"
              className="hover:bg-indigo-800 cursor-pointer text-white py-6 px-4 rounded-md flex items-center gap-3 justify-center mx-auto border-2 mt-2 border-indigo-400 min-w-md bg-indigo-900"
            >
              <Github className="h-5 w-5" />
              <span className="text-lg">Start Your Contribution Now !</span>
            </Button>
      </Link>
     
      </div>
  )
}

export default OpenSourceChallenges