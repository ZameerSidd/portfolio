'use client'

import { useState, useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [loaded, setLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hasError, setHasError] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mount/unmount the heavy Spline runtime based on viewport visibility
  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0, rootMargin: '200px' }
    )

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  // Respect reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion || hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">🤖</div>
          <p className="text-muted-foreground text-sm">Interactive 3D Scene</p>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {isVisible ? (
        <>
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/50">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                <span className="text-sm text-muted-foreground">Loading 3D scene...</span>
              </div>
            </div>
          )}

          <Spline
            scene={scene}
            className={className}
            onLoad={() => setLoaded(true)}
            onError={() => setHasError(true)}
          />
        </>
      ) : (
        <div
          className="w-full h-full rounded-lg bg-gradient-to-br from-primary/5 to-primary/10"
          aria-hidden="true"
        />
      )}
    </div>
  )
}
