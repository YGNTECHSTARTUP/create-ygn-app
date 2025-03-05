
export const runtime = "edge"

export function Header() {
 
  

  return (
    <header className="w-full py-12 bg-[#6c35aa] bg-gradient-to-b from-[#250e49] to-[#251849] ">
      <div className="container mx-auto px-4">
        <div className="flex sm:flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4 text-[#818cf8]">Edge Runtime From The Start</h1>
            <p className="text-xl max-w-2xl text-[#b6bdf7]">
              We made create-ygn-app to do one thing: Streamline the setup of Serverless Architecture apps WITHOUT compromising
              modularity.
            </p>
            <p className="text-xl max-w-2xl text-[#b6bdf7]">
             After many years on this tech, we have lots of opinion and insights. we have done our best to encode them into this CLI
            </p>
        
          </div>
          <div className="flex-1">
            <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-800 font-mono text-sm">
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-gray-300">npm create ygn-app@latest</p>
              <div className="mt-4 text-green-400">
                ? What will your project be called? <span className="text-blue-400">my-ygn-app</span>
              </div>
              <div className="mt-2 text-green-400">
                ? Will you be using JavaScript or TypeScript? <span className="text-blue-400">TypeScript</span>
              </div>
              <div className="mt-2 text-gray-300">
                <span className="text-green-400">Good choice! Using TypeScript!</span>
              </div>
              <div className="mt-2 text-green-400">
                ? Which packages would you like to enable?{" "}
                <span className="text-blue-400">clerk, drizzleorm,neondb, honojs</span>
              </div>
              <div className="mt-2 text-green-400">
                ? Initialize a new git repository? (Y/n) <span className="text-blue-400">Yes</span>
              </div>
              <div className="mt-2 text-gray-300">
                <span className="text-green-400">Sounds good! You can come back and run git init later.</span>
              </div>
              <div className="mt-2 text-green-400">
                ? Would you like us to run npm install? (Y/n) <span className="text-blue-400">Yes</span>
              </div>
              <div className="mt-2 text-gray-300">
                <span className="text-green-400">Alright. We&apos;ll install the dependencies for you!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

