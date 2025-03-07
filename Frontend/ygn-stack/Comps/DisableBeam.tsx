"use client"

import { type RefObject, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export interface DisabledBeamProps {
  className?: string
  containerRef: RefObject<HTMLElement | null>
  fromRef: RefObject<HTMLElement | null>
  toRef: RefObject<HTMLElement | null>
  curvature?: number
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
  startXOffset?: number
  startYOffset?: number
  endXOffset?: number
  endYOffset?: number
  isTop?: boolean
}

export const DisabledBeam: React.FC<DisabledBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 50,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.4,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  isTop = false,
}) => {

  const [pathD, setPathD] = useState("")
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const rectA = fromRef.current.getBoundingClientRect()
        const rectB = toRef.current.getBoundingClientRect()

        const svgWidth = containerRect.width
        const svgHeight = containerRect.height
        setSvgDimensions({ width: svgWidth, height: svgHeight })

        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset
        let startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset

        const controlX = (startX + endX) / 2
        let controlY = (startY + endY) / 2 + Math.abs(curvature) // Default: bends downward

        // **Modify the starting point if `isTop` is active**
        if (isTop) {
          startY = Math.abs(curvature) // Move the starting Y position lower
          controlY = startY + (endY - startY) / 2 // Keep natural arc but shift downward
        }

        const d = `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`
        setPathD(d)
      }
    }

    const resizeObserver = new ResizeObserver(() => updatePath())

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    updatePath()

    return () => resizeObserver.disconnect()
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset, isTop])

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none absolute left-0 top-0 transform-gpu stroke-2", className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        strokeDasharray="6 6"
      />
    </svg>
  )
}
