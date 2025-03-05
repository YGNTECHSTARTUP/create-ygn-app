import Image from "next/image"
import Link from "next/link"

export default function Ecosystem() {
  return (
    <div className="bg-[#6c35aa] bg-gradient-to-b from-[#251849] to-[#250e49] text-white py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-4 mb-12">
          <h1 className="md:text-4xl xl:text-6xl  font-bold text-white">
          Build Scalable Serverless Apps with the Best of TypeScript, Hono.js, and Cloudflare Worker...
          </h1>
          <h2 className="md:text-4xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400 pb-2">
            ...No Bloat, Just Power!
          </h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Take what you want and nothing more! Build faster with just the right tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Next.js Card */}
          <FeatureCard
            icon="/nextjs.jpg"
            title="Framework"
            link="https://nextjs.org/"
            iconAlt="Next.js"
            description="Choose any framework you prefer—though for now we recommend Next.js. Its robust ecosystem, SEO-friendly design, and active community make it ideal for scalable applications. Stay tuned as we expand support to more frameworks."
          />

          {/* TypeScript Card */}
          <FeatureCard
            icon="/typescript.png"
            title="TypeScript"
            link="https://www.typescriptlang.org/"
            iconAlt="TypeScript"
            description="Embrace strict type safety with TypeScript. Its rigorous type system is essential for building large-scale, maintainable applications by catching errors early and enhancing developer productivity."
          />

          {/* tRPC Card */}
          <FeatureCard
            icon="/drizzle.png"
            title="Drizzle ORM"
            iconAlt="Drizzle ORM"
            link="https://orm.drizzle.team/"
            description="Drizzle ORM offers efficient, type-safe querying with a modular design. It simplifies database interactions, reduces runtime errors, and boosts overall developer efficiency with a modern, minimalistic approach."
          />

          {/* Prisma Card */}
          <FeatureCard
            icon="/honojs.png"
            title="Hono js"
            link="https://hono.dev/"
            iconAlt="Honojs"
            description="Optimized for edge runtimes, Hono.js is lightweight yet fully featured. Its built-in solutions, type safety, and performance make it perfect for serverless applications that demand speed and security."
          />

          {/* Tailwind CSS Card */}
          <FeatureCard
            icon="/cloudflare.png"
            title="Cloudflare Workers"
            link="https://workers.cloudflare.com/"
            iconAlt="cloudflare"
            description="Deploy effortlessly at the edge with Cloudflare Workers. Benefit from global scalability, low latency, robust security features, and production-grade performance—all with minimal configuration."
          />

          {/* NextAuth.js Card */}
          <FeatureCard
            icon="/neondb.jpg"
            title="NeonDB"
            link="https://neon.tech/"
            iconAlt="NextAuth.js logo"
            description="NeonDB is our choice for a serverless PostgreSQL solution. It delivers impressive performance, auto-scaling capabilities, and generous free tier benefits, ensuring your data layer is both robust and scalable."
          />
        </div>

       
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon: string
  title: string
  iconAlt: string
  description: string
  link:string
  highlight?: boolean
}

function FeatureCard({ icon, title, iconAlt, description,link,}: FeatureCardProps) {
  return (
    <Link href={link} target="_blank">
 <div
      className="rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-indigo-400 bg-indigo-900"
    >
      <div className="flex items-start gap-3 mb-3 bg-indigo-800 rounded-xl ">
        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white/10 p-2 flex items-center justify-center">
          <Image src={icon || "/placeholder.svg"} alt={iconAlt} width={40} height={40} className="object-contain" />
          
        </div>
        <h3 className="text-xl font-bold text-white p-2 ">{title}</h3>
      </div>
      <p className="text-indigo-100 text-sm leading-relaxed flex-grow ">{description}</p>
    </div>
    </Link>
   
  )
}

