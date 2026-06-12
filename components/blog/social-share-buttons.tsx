'use client'

import { useEffect, useState } from 'react'
import { Facebook, Twitter } from 'lucide-react'

interface SocialShareButtonsProps {
  title: string
}

export function SocialShareButtons({ title }: SocialShareButtonsProps) {
  const [shareUrl, setShareUrl] = useState('')

  // Set shareUrl only on client side after mount
  useEffect(() => {
    setShareUrl(window.location.href)
  }, [])

  if (!shareUrl) return null

  const shareText = `Check out: ${title}`

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-muted-foreground">Share:</span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        title="Share on Facebook"
      >
        <Facebook className="h-4 w-4" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        title="Share on Twitter"
      >
        <Twitter className="h-4 w-4" />
      </a>
    </div>
  )
}
