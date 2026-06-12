import { Sparkles } from 'lucide-react'

interface BudgetTipCardProps {
  title: string
  children: React.ReactNode
}

export function BudgetTipCard({ title, children }: BudgetTipCardProps) {
  return (
    <div className="my-8 md:my-10 p-6 md:p-8 rounded-2xl shadow-sm border border-primary/10 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="flex items-start gap-3 mb-3">
        <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
        <h4 className="font-semibold text-foreground text-lg">{title}</h4>
      </div>
      <div className="text-foreground/80 leading-relaxed">
        {children}
      </div>
    </div>
  )
}
