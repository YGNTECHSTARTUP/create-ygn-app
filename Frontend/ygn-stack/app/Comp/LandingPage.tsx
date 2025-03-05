"use client"
import { Star, Github, ExternalLink, Copy } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

export default function LandingPage() {
  const copyCommand = () => {
    
    navigator.clipboard.writeText("npm create t3-app@latest")
    toast("Copied to Clipboard")
  }

  return (
    <div className="min-h-screen bg-[#0f1120] bg-gradient-to-b from-[#0f1120] to-[#1a1b36] text-white">
      {/* Navigation */}
      <header className="container mx-auto flex items-center justify-between py-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-3xl font-bold">
            <span className="text-white">YGN</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/docs" className="hover:text-blue-300 transition-colors">
              Docs
            </Link>
            <Link href="/faq" className="hover:text-blue-300 transition-colors">
              FAQ
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[#1a1b36] px-3 py-1 rounded-full">
            <Star className="h-4 w-4 text-white" />
            <span className="text-sm font-medium">25K</span>
          </div>
          <Link
            href="https://github.com/t3-oss/create-t3-app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#1a1b36] rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
          Build Web Apps Faster with a <span className="text-[#38bdf8]">Scalable</span>,{" "}
          <span className="text-[#818cf8]">Serverless</span> <span className="text-[#c084fc]">Architecture</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <Link
            href="/documentation"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-colors"
          >
            Documentation <ExternalLink className="h-4 w-4" />
          </Link>
          <Link
            href="https://github.com/t3-oss/create-t3-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-colors"
          >
            GitHub <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        {/* Command Line */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-[#1a1b36] rounded-lg p-4 flex items-center justify-between">
            <code className="text-white font-mono">npm create t3-app@latest</code>
            <button
              onClick={copyCommand}
              className="p-2 hover:bg-white/10 rounded transition-colors"
              aria-label="Copy command"
            >
              <Copy className="h-5 w-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

