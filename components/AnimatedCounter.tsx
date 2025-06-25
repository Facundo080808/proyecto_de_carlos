"use client"

import { useState, useEffect } from "react"
import { useSpring, animated } from "@react-spring/web"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  isInView: boolean
  decimals?: number
}

export default function AnimatedCounter({ from, to, duration = 2, isInView, decimals = 0 }: AnimatedCounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false)

  // Only animate once when in view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const { number } = useSpring({
    from: { number: from },
    number: hasAnimated ? to : from,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10, duration: duration * 1000 },
  })

  return <animated.span>{number.to((n) => n.toFixed(decimals))}</animated.span>
}
