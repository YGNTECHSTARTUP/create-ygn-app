"use client"

import type React from "react"
import { forwardRef, useRef } from "react"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/Comps/AnimatedBeam"
import Image from "next/image"

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

export default function AnimatedBeamDemo() {
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

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg  bg-[#6c35aa] bg-gradient-to-b from-[#251849] to-[#250e49] text-white py-16 px-4 -mt-12 p-10 md:shadow-xl"
      ref={containerRef}
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
        <div className="flex flex-row items-center justify-between mt-6">
          <Circle ref={div13Ref} isDisabled><Image src="/npm.svg" alt="Disabled" width={40} height={40} /></Circle>
          <Circle ref={div8Ref} isDisabled><Image src="/Bun.svg" alt="Disabled" width={40} height={40} /></Circle>
          <Circle ref={div9Ref} isDisabled><Image src="/Deno.svg" alt="Disabled" width={40} height={40} /></Circle>
          <Circle ref={div10Ref} isDisabled><Image src="/vercel.svg" alt="Disabled" width={40} height={40} /></Circle>
          <Circle ref={div11Ref} isDisabled><Image src="/Lambda.svg" alt="Disabled" width={40} height={40} /></Circle>
          <Circle ref={div12Ref} isDisabled><Image src="/fly.svg" alt="Disabled" width={40} height={40} /></Circle>
        </div>
      </div>

      {/* Animated Beams - Only connecting active nodes */}
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} />
<AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
<AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={75} endYOffset={10} />
<AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} reverse />
<AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse />
<AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} curvature={75} endYOffset={10} reverse />

      {/* No beams for disabled circles */}
    </div>
  )
}