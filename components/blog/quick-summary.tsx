import { CheckCircle2 } from 'lucide-react'

interface QuickSummaryProps {
  items: string[]
}

export function QuickSummary({ items }: QuickSummaryProps) {
  return (
    <div className="my-8 md:my-10 p-6 md:p-8 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
      <h3 className="font-semibold text-foreground text-lg mb-4">Quick Summary</h3>
      <p className="text-sm text-muted-foreground mb-4">Key takeaways for busy moms:</p>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-foreground/80 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
