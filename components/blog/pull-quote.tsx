interface PullQuoteProps {
  children: React.ReactNode
  author?: string
}

export function PullQuote({ children, author }: PullQuoteProps) {
  return (
    <figure className="my-10 md:my-12 px-6 md:px-8 py-8 md:py-10 rounded-lg border-l-4 border-primary bg-primary/5">
      <blockquote className="text-lg md:text-xl font-serif text-foreground/90 italic mb-3">
        &ldquo;{children}&rdquo;
      </blockquote>
      {author && (
        <figcaption className="text-sm text-muted-foreground">
          — {author}
        </figcaption>
      )}
    </figure>
  )
}
