import Image from 'next/image'
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
      </div>
  )
}

export default OpenSourceChallenges