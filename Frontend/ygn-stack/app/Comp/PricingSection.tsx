import { Star, Twitter, Gift } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PricingSection() {
  return (
    <div className="bg-[#6c35aa] bg-gradient-to-b from-[#250e49] to-[#251849] text-white py-16 px-4 -mt-24">
      <div className="max-w-5xl mx-auto ">
        <div className="text-center mb-16 ">
          <h1 className="text-5xl font-bold mb-4">Pricing</h1>
          <p className="text-2xl mb-2">Just kidding, It is free and open-source</p>
          <p className="text-xl">You can still make your contribution!</p>
        </div>

        <div className="md:flex container justify-center items-center -mt-10 ">
          {/* Left droplet */}
          <div className=" -mt-10 flex sm:mx-auto md:mx-0 md:min-w-0 sm:text-center  sm:min-w-lg justify-center container">
            <Image
              src="/pricing.svg"
              width={350}
              height={200}
              alt="YGN"
              className="opacity-90"
            />
          </div>

          {/* Center buttons */}
          <div className="flex flex-col gap-4 container ">
            <Link href="https://github.com/YGNTECHSTARTUP/create-ygn-app/" target="_blank" >
            <Button
              variant="outline"
              className=" hover:bg-indigo-800 cursor-pointer text-white py-6 px-4 rounded-md flex items-center gap-3 w-full justify-start border-2 border-indigo-400 bg-indigo-900"
            >
              <Star className="h-5 w-5" />
              <span className="text-lg">Give us a star</span>
            </Button>
            </Link>
          

            <Button
              variant="outline"
              className="hover:bg-indigo-800 cursor-pointer text-white py-6 px-4 rounded-md flex items-center gap-3 w-full justify-start border-2 border-indigo-400 bg-indigo-900"
            >
              <Twitter className="h-5 w-5" />
              <span className="text-lg">Join us on Twitter</span>
            </Button>
<Link href="https://discord.gg/hc6bveqT">
<Button
              variant="outline"
              className=" hover:bg-indigo-800 cursor-pointer text-white py-6 px-4 rounded-md flex items-center gap-3 w-full justify-start border-2 border-indigo-400 bg-indigo-900"
            >
              <DiscordIcon className="h-5 w-5" />
              <span className="text-lg">Join our community</span>
            </Button>
</Link>
           
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block w-px bg-zinc-800 h-64 mx-auto"></div>

          {/* Right section */}
          <div className="flex flex-col-reverse items-center gap-4 container">
            <p className="text-lg mb-2">Buy us some ramen 🍜</p>
            <Button
              variant="outline"
              className=" hover:bg-indigo-800 cursor-pointer text-white py-6 px-8 rounded-md flex items-center gap-3 border-2 border-indigo-400 bg-indigo-900"
            >
              <Gift className="h-5 w-5" />
              <span className="text-lg">Become a sponsor</span>
            </Button>

            {/* Right droplet */}
            <div className="block mt-4">
              <Image
                src="/sponser.svg"
                width={150}
                height={200}
                alt="Drizzle mascot with money"
                className="opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Custom Discord icon since it's not in lucide-react
function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
      <path d="M15 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
      <path d="M7.5 4h9c.5 0 1.5 0 2 1.5l1 7c.5 1.5 .5 3 -1 4s-2.5 1.5-4 1.5h-5c-1.5 0-2.5-.5-4-1.5s-1.5-2.5-1-4l1-7c.5-1.5 1.5-1.5 2-1.5z"></path>
    </svg>
  )
}

