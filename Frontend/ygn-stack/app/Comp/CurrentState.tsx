"use client"

import type React from "react"
import { forwardRef, useRef } from "react"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/Comps/AnimatedBeam"
import Image from "next/image"
import { DisabledBeam } from "@/Comps/DisableBeam"

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode; isDisabled?: boolean }>(
  ({ className, children, isDisabled }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-16 items-center justify-center rounded-full border-2 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          isDisabled ? "border-dashed opacity-50 bg-red-500/30" : "bg-white",
          className,
        )}
      >
        {children}
      </div>
    )
  },
)

  

Circle.displayName = "Circle"

export default function Graph() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Active circles
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)

  // Disabled circles
  const div7Ref = useRef<HTMLDivElement>(null)
  const div8Ref = useRef<HTMLDivElement>(null)
  const div9Ref = useRef<HTMLDivElement>(null)
  const div10Ref = useRef<HTMLDivElement>(null)
  const div11Ref = useRef<HTMLDivElement>(null)
  const div12Ref = useRef<HTMLDivElement>(null)
  const div13Ref = useRef<HTMLDivElement>(null)
  const div14Ref = useRef<HTMLDivElement>(null)
  const div15Ref = useRef<HTMLDivElement>(null)
  const div16Ref = useRef<HTMLDivElement>(null)
  const div17Ref = useRef<HTMLDivElement>(null)
  const div18Ref = useRef<HTMLDivElement>(null)
  const div19Ref = useRef<HTMLDivElement>(null)


  return (
    <div className=" bg-[#6c35aa] bg-gradient-to-b from-[#251849] to-[#250e49] text-white py-16 px-4 -mt-12 p-10 md:shadow-x">
         <h1 className="text-xl md:text-4xl container text-center items-center justify-center mx-auto font-bold leading-16 md:leading-none tracking-tight  mb-8">
   Visualizing the YGN Workflow: <span className="text-[#38bdf8]">   Command-Line Orchestration for Scalable</span>,{" "}
    <span className="text-[#818cf8]">Serverless</span> & <span className="text-[#c084fc]">Edge Deployments</span>
  </h1>
  <div ref={containerRef}>
  <div className="flex mx-auto items-center md:justify-between w-md" >
          <Circle ref={div14Ref} isDisabled><Image src="/expo.svg" alt="Disabled" width={40} height={40} /></Circle>
          <Circle ref={div15Ref} isDisabled><Image src="/fresh.svg" alt="Disabled" width={40} height={40} /></Circle>
          <Circle ref={div16Ref} isDisabled><Image src="/Phoenix.svg" alt="Disabled" width={40} height={40} /></Circle>
          <Circle ref={div17Ref} isDisabled><Image src="/rust.svg" alt="Disabled" width={40} height={40} /></Circle>
          <Circle ref={div18Ref} isDisabled><Image src="/FastApi.svg" alt="Disabled" width={40} height={40} /></Circle>
          <Circle ref={div19Ref} isDisabled><Image src="/wasm.svg" alt="Disabled" width={40} height={40} /></Circle>
        </div>
        <div
      className="relative -mt-20 flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg  bg-[#6c35aa] bg-gradient-to-b from-[#251849] to-[#250e49] text-white py-16 px-4  p-10 md:shadow-xl"
    >
    
   
      <div className="flex size-full max-h-[250px] max-w-xl flex-col items-stretch justify-between gap-8">
        
      
        {/* Active Circles Row 1 */}
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}><Image src="/cloudflare worker.svg" alt="Cloudflare worker" width={50} height={50} /></Circle>
          <Circle ref={div5Ref}><Image src="/Drizzle Orm.svg" alt="Drizzle ORM" width={50} height={50} /></Circle>
        </div>

        {/* Active Circles Row 2 */}
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}><Image src="/honojss.svg" alt="Hono.js" width={50} height={50} /></Circle>
          <Circle ref={div4Ref}><Image src="/ygn.svg" alt="Ygn" width={50} height={50} /></Circle>
          <Circle ref={div6Ref}><Image src="/neon.svg" alt="Neon" width={50} height={50} /></Circle>
        </div>

        {/* Active Circles Row 3 */}
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}><Image src="/nextt.svg" alt="Next.js" width={50} height={50} /></Circle>
          <Circle ref={div7Ref}><Image src="/type.svg" alt="Next.js" width={50} height={50} /></Circle>
        </div>

        {/* Disabled Circles Row */}
        <div className="flex gap-1.5 items-center md:justify-between mt-6">
          <Circle ref={div13Ref} isDisabled><Image src="/fastly.svg" alt="Disabled" width={40} height={40} /></Circle>
          <Circle ref={div8Ref} isDisabled><Image src="/Bun.svg" alt="Disabled" width={40} height={40} /></Circle>
          <Circle ref={div9Ref} isDisabled><Image src="/Deno.svg" alt="Disabled" width={40} height={40} /></Circle>
          <Circle ref={div10Ref} isDisabled><Image src="/vercel.svg" alt="Disabled" width={40} height={40} /></Circle>
          <Circle ref={div11Ref} isDisabled><Image src="/Lambda.svg" alt="Disabled" width={40} height={40} /></Circle>
          <Circle ref={div12Ref} isDisabled><Image src="/fly.svg" alt="Disabled" width={40} height={40} /></Circle>
        </div>
      </div>

      {/* Animated Beams - Only connecting active nodes */}
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} />
<AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} curvature={-50} endYOffset={-5} />
<AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={75} endYOffset={10} />
<AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} reverse />
<AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} curvature={-50} endYOffset={-5} reverse />
<AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} curvature={75} endYOffset={10} reverse />

{/* Symmetric Dashed Beams */}
<DisabledBeam containerRef={containerRef} fromRef={div8Ref} toRef={div4Ref} curvature={-50} />
<DisabledBeam containerRef={containerRef} fromRef={div9Ref} toRef={div4Ref} curvature={-50} />
<DisabledBeam containerRef={containerRef} fromRef={div10Ref} toRef={div4Ref} curvature={-50} />
<DisabledBeam containerRef={containerRef} fromRef={div11Ref} toRef={div4Ref} curvature={-50} />
<DisabledBeam containerRef={containerRef} fromRef={div12Ref} toRef={div4Ref} curvature={-50} />
<DisabledBeam containerRef={containerRef} fromRef={div13Ref} toRef={div4Ref} curvature={-50} />

{/* Symmetric Top Curvatures */}
<DisabledBeam containerRef={containerRef} fromRef={div14Ref} isTop curvature={75} endYOffset={10} toRef={div4Ref} />
<DisabledBeam containerRef={containerRef} fromRef={div15Ref} isTop curvature={75} endYOffset={10} toRef={div4Ref} />
<DisabledBeam containerRef={containerRef} fromRef={div16Ref} isTop curvature={75} endYOffset={10} toRef={div4Ref} />
<DisabledBeam containerRef={containerRef} fromRef={div17Ref} isTop curvature={75} endYOffset={10} toRef={div4Ref} />
<DisabledBeam containerRef={containerRef} fromRef={div18Ref} isTop curvature={75} endYOffset={10} toRef={div4Ref} />
<DisabledBeam containerRef={containerRef} fromRef={div19Ref} isTop curvature={75} endYOffset={10} toRef={div4Ref} />


    </div>
  </div>

    </div>
  
  )
}