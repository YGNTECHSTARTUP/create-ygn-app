import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

export default function Footer() {
  return (
    <footer className="container bg-black mx-auto py-16 px-6 flex flex-col md:flex-row md:justify-between items-center md:items-start text-md ">
      {/* Left Section - Branding */}
      <div className="flex flex-col items-center md:items-start w-full md:w-1/4">
        <div className="w-24 h-24 mb-4 relative overflow-hidden rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-400 p-0.5">
          <div className="w-full h-full rounded-full overflow-hidden bg-black">
            <Image
              src="/yakshaa.png"
              alt="Colorful astronaut logo"
              width={80}
              height={80}
              className="w-full p-0.5 h-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white">
          YGN <span className=" from-green-500 via-emerald-500 to-cyan-400 bg-gradient-to-r text-transparent bg-clip-text ">APP</span>
        </h2>
        <Link href="https://ygagan.vercel.app" className="text-md text-gray-300 hover:text-fuchsia-400 transition-colors">
        <div className="text-md  text-white mt-1 hover:from-green-500 hover:via-emerald-500 hover:to-cyan-400 bg-gradient-to-r hover:text-transparent bg-clip-text ">by Gagan Yarramsetty</div>
        </Link>
        
        <div className="text-sm text-gray-500 mt-0.5">built with Shadcn UI</div>

        <div className="mt-4 text-center md:text-left">
          <Link href="https://t3.gg/" className="text-md text-gray-300 hover:text-fuchsia-400 transition-colors">
            Special Thanks to <span className="bg-purple-600 to-purple-400 via-purple-500 text-transparent bg-clip-text">Theo</span>
          </Link>
          <p className=" text-gray-500 mt-1 text-sm">for the idea and inspiration to create this project</p>
        </div>
      </div>

      {/* Right Section - Navigation */}
      <div className="w-full md:w-3/4 flex flex-col md:flex-row justify-between mt-10 md:mt-0">
        <FooterColumn title="OVERVIEW">
          <NavLink href="#">Introduction</NavLink>
          <NavLink href="#">Getting Started</NavLink>
          <NavLink href="#">File Structure</NavLink>
        </FooterColumn>

        <FooterColumn title="DOCS">
          <NavLink href="#">Backend</NavLink>
          <NavLink href="#">Workflow</NavLink>
          <NavLink href="#">Tech Stack</NavLink>
          <NavLink href="#">Authentication</NavLink>
          <NavLink href="#">FAQ</NavLink>
        </FooterColumn>

        <FooterColumn title="COMMUNITY">
          <NavLink href="https://github.com/YGNTECHSTARTUP/create-ygn-app/" external>GitHub</NavLink>
          <NavLink href="https://x.com/ygndotgg" external>Twitter</NavLink>
          <NavLink href="https://discord.com/invite/hc6bveqT" external>Discord</NavLink>
        </FooterColumn>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
      <h3 className="text-xl font-semibold mb-4 tracking-wider text-gray-300 border-white border-b-2 mt-2">{title}</h3>
      <nav className="flex flex-col space-y-2 ">{children}</nav>
    </div>
  );
}

function NavLink({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <Link
      href={href}
      className="text-gray-400 hover:text-white transition-colors text-lg flex items-center text-left mt-2 md:mt-0"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
      {external && <ExternalLink className="ml-1 w-3 h-3" />}
    </Link>
  );
}
