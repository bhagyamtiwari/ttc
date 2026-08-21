import { useEffect, useRef, useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** Adds the image-settle effect on top of the rise. */
  settle?: boolean
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article' | 'figure' | 'header'
}

/**
 * The site's only scroll effect: content settles into place once, the first
 * time it is seen. Content is shown immediately if JS or motion is unavailable.
 */
export default function Rise({ children, className = '', settle = false, delay = 0, as = 'div' }: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  const Tag = as as any
  return (
    <Tag
      ref={ref}
      className={`rise ${settle ? 'settle' : ''} ${shown ? 'shown' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
